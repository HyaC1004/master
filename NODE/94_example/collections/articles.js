// articles 모듈
const mongodb = require("mongodb");
const uri ="mongodb+srv://cheolyoung:jcy1107@mongodb.dbvp4ma.mongodb.net/?retryWrites=true&w=majority";
const ObjectId = mongodb.ObjectId;

function connect() {
    return new mongodb.MongoClient(uri).db("study").collection("articles");
}

async function insertOne(obj) {
    const articles = connect();
    let result = await articles.insertOne(obj);
    return result;
}

async function findAll() {
    const articles = connect();
    return await articles.find({}).sort("createdAt",-1).toArray();
}

async function findByTargetId(targetId) {
    const articles = connect();
    let obj = await articles.findOne({ _id : new ObjectId(targetId)});
    return obj;
}
async function findByType(type) {
    const articles = connect();
    let obj = await articles.findOne({"type": type});
    return obj;
}
async function findById(id) {
    const articles = connect();
    let obj = await articles.findOne({"_id": id});
    return obj;
}

async function deleteById(id) {
    const articles = connect();
    let result = await articles.deleteOne({"_id": id});
    return result;
}
async function addComment(id,comment) {
    const articles = connect();
    let result = await articles.updateOne(
        {_id : new ObjectId(id)} , 
        { $push : {
                "comment" : comment                
            }
        }
    );
    return result;    
}
async function updateUserImage(id,url) {
    return await connect().updateOne({_id:id},{$set : { image : url  }});
}


module.exports = {
    insertOne, findAll, findById, deleteById, updateUserImage, findByTargetId, findByType, addComment
};