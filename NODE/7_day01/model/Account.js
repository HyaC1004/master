const mongoose = require("mongoose");

const birthSchema = new mongoose.Schema({
    year: Number,
    month: Number,
    day: Number
})
// birthSchema.add({day:Number});
// birthSchema.remove("_id");

const accountSchema = new mongoose.Schema({
    _id: String,
    pass: String,
    name: String,
    contact: String,
    birth: {    // birthSchema, //[Number]
        year: Number,
        month: Number,
        day: Number
    },
    image: String,
    createdAt: Date
},{
    statics:{
        findByName(name) {
            return this.find({name: name});
        }
    }
});
// static function을 추가하려면, 처음부터 생성하면서 설정해도 되고
accountSchema.statics.updateProfileById = function(id,profile) {
    return this.findByIdAndUpate(id,{image: profile},{returnDocument: "after"});
};

module.exports = mongoose.model("account", accountSchema, "accounts");
        // 3번째 string 값은 컬렉션의 이름이 된다, 등록되는 모델명의 복수형(s)이 디폴트