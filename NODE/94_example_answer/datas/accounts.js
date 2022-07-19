const mongodb = require("mongodb");
const uri = "mongodb+srv://edupoll:1q2w3e4r@cluster0.lc7bymt.mongodb.net/?retryWrites=true&w=majority";

function getCollection() {
    return new mongodb.MongoClient(uri).db("example").collection("accounts");
}

async function add(account) {
    return getCollection().insertOne(account);
}

async function getById(value) {
    return await getCollection().findOne({id : value}); 
}

async function getAll() {
    return await getCollection().find({}).toArray(); 
}


module.exports = {
    add, getById, getAll
}

