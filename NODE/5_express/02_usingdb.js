const mongodb = require("mongodb");
const uri ="mongodb+srv://cheolyoung:jcy1107@mongodb.dbvp4ma.mongodb.net/?retryWrites=true&w=majority"

const client = new mongodb.MongoClient(uri);    
const students = client.db("study").collection("students");    

let data = {
    name: "김기협",
    age: 26,
    hobbies: ["게임","유튜브 시청"]
};

students.insertOne(data).then(result=>{
    console.log(result.acknowledged);   // 작업성공여부    
}).catch(e=>console.log(e.message))
    .finally(()=>{
        client.close();
    })



// read #
{
    const client = new mongodb.MongoClient(uri);
    const database = client.db("study");
    console.log("success");
    const students = database.collection("students");    
    students.find().toArray().then(result=>{
        console.log(result);
    }).finally(()=>{
        client.close();
    });  
}
