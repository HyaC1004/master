const mongodb = require("mongodb");
const uri = "mongodb+srv://edupoll:1q2w3e4r@cluster0.lc7bymt.mongodb.net/?retryWrites=true&w=majority";

function getCollection() {
    return new mongodb.MongoClient(uri).db("example").collection("artices");
}

async function add(article) {
    return await getCollection().insertOne(article)
}

async function getAll() {
    return await getCollection().find({}).sort("createdAt", -1).toArray();
}

async function getVisibleSome(userId) {
    const query = {"$or" : [{writerId : userId },  {  type : "public" } ] };
    return await getCollection().find(query).sort("createdAt", -1).toArray();
}

async function getByWriter(writerId) {
    return await getCollection().find({writerId : writerId }).sort("createdAt", -1).toArray();
}

async function getById(targetId) {
    return await getCollection().find({_id : new mongodb.ObjectId(targetId)}).toArray();
}

module.exports={
    add, getAll, getByWriter, getById, getVisibleSome
}

