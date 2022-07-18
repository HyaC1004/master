// guestbook 모듈
const monogodb = require("mongodb");
const uri ="mongodb+srv://cheolyoung:jcy1107@mongodb.dbvp4ma.mongodb.net/?retryWrites=true&w=majority";

function connect() {
    return new monogodb.MongoClient(uri).db("study").collection("visitors");
}

async function insertOne(obj) {
    const visitors = connect();
    let result = await visitors.insertOne(obj);
    return result;
}

async function findAll() {
    const visitors = connect();
    return await visitors.find({}).sort("createdAt",-1).toArray();
}

async function findById(id) {
    const visitors = connect();
    let obj = await visitors.findOne({"_id": new monogodb.ObjectId(id)});
    return obj;
}

async function deleteById(id) {
    const visitors = connect();
    let result = await visitors.deleteOne({"_id": new monogodb.ObjectId(id)});
    return result;
}

async function updateById(id,obj) {
    const visitors = connect();
    let result = await visitors.updateOne(
        {"_id": new monogodb.ObjectId(id)},
        {$set:{
            "comment" : obj.comment,
            "name" : obj.name,
            "password" : obj.password,
            "modifiedAt" : new Date()
        }});
    return result;
}

module.exports = {
    insertOne, findAll, findById, deleteById, updateById
};