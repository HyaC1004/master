const {Router} = require("express");
const Review = require("../model/review");

const router = Router();

router.use((req,resp,next)=>{
    
    next();
});

// query로 전달받은 id에 해당하는 리뷰를 응답보내는게 목적
router.get("/get", async(req,resp)=>{
    const id = req.query;
    try{
        const found = await Review.find({target:id.target}).lean();
        
        return resp.status(200).json({result:true, datas:found });        
    }catch(e){
        console.log(e.message);
        return resp.status(500).json({result:false});
    }
    
});

// body로 전달받은 데이터들을 문서화해서 저장하고 결과를 알려주는게 목적
router.post("/post",async(req,resp)=>{
    const photos = [];
    const document = {...req.body, photos};

    try{
        const rst = await Review.create(document);
        resp.status(201).json({result:true, data: rst});
    }catch(e){
        resp.status(500).json({result:false, message: e.message});
    }  
});

module.exports = router;