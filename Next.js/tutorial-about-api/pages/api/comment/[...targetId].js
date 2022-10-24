export default function (req, res) {
    /*
        dynamic route의 placeholder 값은 query에 포함되어있다.

        placeholder 에 ...처리 해두엇다면?
    */
    console.log("      - ",req.query.targetId);

    return res.status(200).json({result:true});
    
}

