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
    let obj = await articles.findOne({ _id : ObjectId(targetId)});
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

async function deleteComment(targetId,commentId) {
    const articles = connect();   
    console.log("targetId: ", ObjectId(targetId))
    let obj = await articles.updateOne(
        { _id : ObjectId(targetId) } , 
        { $pull : { comment : {_id : ObjectId(commentId)} } }
    );
    return obj;
}
async function addComment(targetId,data) {
    const articles = connect();
    let result = await articles.updateOne(
        {_id : new ObjectId(targetId)} , 
        { $push : { comment : data } }
    );
    return result;    
}


module.exports = {
    insertOne, findAll, findById, deleteComment, findByTargetId, findByType, addComment
};