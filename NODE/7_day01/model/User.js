const mongoose = require("mongoose");
/*
    스키마 설정을 통해 필드의 기본값 설정을 한다거나 (default)
    데이터의 유효성 검사(validation)를 쉽게 처리할 수 있다.
        - required는 모든 타입에 다 존재함
        - Number는 min, max
        - String은 num, match, minlength, maxlength
*/
const userSchema =  new mongoose.Schema({
    // name: String,   // 별도의 설정없이 타입 지정만 할꺼라면 축약가능
    name: {type:String, required: true, match: /[가-힇]{2,}/ },
    nickname: {type: String, minlength: 3},
    // 필드 설정에 타입외에 더 추가적으로 설정하고자 한다면 {} 객체형태로 표기해야 한다.
    age: {type:Number, min: 0},
    type: {type: String, enum: ["내국인", "외국인"] },
    authed: {type:Boolean, default: false},
    createdAt: {type: Date, default: Date.now()},
    country: {
        type: String,
        validate: {
            validator: (val)=>{
                return ["KOR", "JPN", "USA", "CHN"].includes(val);
            },
            message: ()=>{
                return "Access Denied"
            }
        },
        required: true
    }
});
//======================================================
// 데이터 구성 외에 미들웨어 (pre/post 로 가능)라는걸 설정해둘 수 있다.
// 설정할 수 있는 포인트는 여러곳이 있는데 save, remove, update, find 등등...

// 저장되기전에 미들웨어먼저 거치고 저장
userSchema.pre("save",function(next){
    if(Math.random() > 0.5){
        console.log("save",this);
        // next();
    }else{
        console.log("error");
        throw new Error("something is wrong");
    }
});
userSchema.post("save",function(){
    console.log(this._id + "saved.");
});

module.exports = mongoose.model("User",userSchema);