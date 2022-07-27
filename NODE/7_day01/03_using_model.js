const mongoose = require("mongoose");
const User = require("./model/User");
const uri ="mongodb+srv://cheolyoung:jcy1107@mongodb.dbvp4ma.mongodb.net/?retryWrites=true&w=majority";

!async function() {
    await mongoose.connect(uri,{dbName: "study"});
    
    try{
        await User.create({name:"장철영", age: 19, type:"내국인", country: "KOR"});
        console.log("success")

    }catch(err){
        console.log("failed.. "+err.message);

    }


}();
