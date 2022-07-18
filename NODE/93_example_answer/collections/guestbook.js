const mongodb = require("mongodb");
const uri = "mongodb+srv://edupoll:1q2w3e4r@cluster0.lc7bymt.mongodb.net/?retryWrites=true&w=majority";
const ObjectId = mongodb.ObjectId;

function connect() {
    return new mongodb.MongoClient(uri).db("study").collection("guestbook");
}

async function insertOne(obj) {
    const guestbook = connect();
    let result = await guestbook.insertOne(obj);
    return result;
}

async function findAll() {
    const guestbook = connect();
    return await guestbook.find({}).sort("createdAt", -1).toArray();
}


async function findById(id) {
    const guestbook = connect();
    let obj = await guestbook.findOne({ _id : new ObjectId(id)});
    
    return obj;
}

async function deleteById(id) {
    const guestbook = connect();
    let result = await guestbook.deleteOne({"_id" : new mongodb.ObjectId(id)});;
    return result;
}

async function updateById(id, obj) {
    const guestbook = connect();
    let result = await guestbook.updateOne({"_id" : new mongodb.ObjectId(id)} , { $set : {
        "comment" : obj.comment,
        "name" : obj.name,
        "password" : obj.password,
        "modifiedAt" : new Date()
    }});
    return result;
}

module.exports= {
    insertOne, findAll, findById, deleteById, updateById
};




