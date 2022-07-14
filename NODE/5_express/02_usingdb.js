const mongodb = require("mongodb");
const uri ="mongodb+srv://cheolyoung:jcy1107@mongodb.dbvp4ma.mongodb.net/?retryWrites=true&w=majority"
try{
    const client = new mongodb.MongoClient(uri);
    const database = client.db("study");
    console.log("success");
    const students = database.collection("students");    
    students.find().toArray().then(result=>{
        console.log(result);
    });    
}catch(e){
    console.log(e.message);
}