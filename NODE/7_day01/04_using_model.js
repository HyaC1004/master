const mongoose = require("mongoose");
const Account = require("./model/Account");


!async function() {
    const uri ="mongodb+srv://cheolyoung:jcy1107@mongodb.dbvp4ma.mongodb.net/?retryWrites=true&w=majority";
    await mongoose.connect(uri,{dbName: "study"});
    
    try{
        // Read ==> find, findOne, findById
        // let result = await Account.find({});

        // let result = await Account.find({name:"장철영"});   // 필터에 매칭되는 문서들을 찾음, 배열
        // console.log(result);

        // let result = await Account.findOne({name:"장철영"});   // 필터에 매칭되는 문서 하나를 찾음
        // console.log(result);
        
        // let result = await Account.findById({name:"장철영"});   // 특정 ID의 문서를 찾음
        // console.log(result);

        // DELETE ==> deleteOne, deleteMany
        // let result = await Account.deleteOne({name:"장철영3"});
        // console.log(result);

        // 아이디값에 일치하는 데이터를 delete를 하고 싶으면
        // let result = await Account.findByIdAndDelete({name:"장철영3"});
        // console.log(result);     // 영향을 받은 도큐먼트가 출력

        // findAnd_XXXXXX 의 작업결과는 find된 도큐먼트가 리턴됨 (null이면 작업실패)
        // finadAnd 계열이 유용한 작업은 update일때이다.
        
        // UPDATE ==> updateOne, updateMany 디폴트가 set
        // update시엔 validating 기능이 default off 되있음.
        // let result = await Account.updateOne({_id:"장철영"},{"name": "철영"});
        // let result = await Account.updateOne({_id:"장철영"},{"name": "철영"},{runValidators: true});
        // console.log(result);

        // findOneAndUpdate 나 findByIdAndUpdate의 리턴값은 찾은 문서가 리턴
        // 디폴트가 바뀌기전의 문서가 나온다. {returnDocument: "before"}로 설정되있음 ==> "after"로 변경
        // let result = await Account.findByIdAndUpdate({_id:"장철영"},{"name": "철영"},{returnDocument:"after"});
        // console.log(result);    // retrunDocument 설정안하면 바뀌기 전에것이 출력

        // 프로필 이미지 update 시킬때도 했고, 댓글추가할때 $push update, then find ===> .comments를 사용했었는데,
        // 이걸 업데이트의 결과로 바로 확보할수 있다.

        // 기본 CRUD는 이렇게 처리되고 있다.
        // 자주 사용할 DB CRUD는 모델에 추가를 하는게 가능하다.

        // let founds = await Account.findByName("장철영");
        // console.log(founds);

        // let updated = await Account.updateProfileById("","")

    }catch(err){
        console.log("failed.. "+err.message);

    }


}();
