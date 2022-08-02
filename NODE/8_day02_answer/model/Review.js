const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    comment:String,
    score:{
        type:Number,min:1,max:5
    },
    target:{
        type :mongoose.Schema.Types.ObjectId,
        ref:"Movie",
        required : true
    },
    targetstr : {
        type:String,
        ref:"Movie"
    },
    targetCd : {
        type:String,
         ref:"Movie"
    },
    createdAt : {
        type:Date,
        default:Date.now
    }
});

reviewSchema.virtual("sign").get(()=>{
    return "Edupoll";
});

/*
    virtual 을 이용해서 populate 용 가상변수를 설정할 수 있다.
*/
reviewSchema.virtual("vtTargetCd",{
    localField : "targetCd",
    ref:"Movie",
    foreignField: "movieCd",
});


module.exports = mongoose.model("Review",reviewSchema);