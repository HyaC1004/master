const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    comment: String,
    score: {
        type: Number, min:1, max:5
    },
    target: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie"
    },
    taegetstr: {
        type: String,
        ref: "Movie"
    },
    targetCd: {
        type: String,
        ref: "Movie"
    }
});

reviewSchema.virtual("sign").get(()=>{
    return "Edupoll";
});
/*
    virtual을 이용해서 populate용 가상변수를 설정할 수 있다.
*/
reviewSchema.virtual("vtTargetCd",{
    localField: "targetCd",
    ref: "Movie",    
    foreignField: "movieCd"
}).get(function(){
    return this.targetCd;
});

module.exports = mongoose.model("Review",reviewSchema);
