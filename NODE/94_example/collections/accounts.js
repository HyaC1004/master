// accounts 모듈
const mongodb = require("mongodb");
const uri ="mongodb+srv://cheolyoung:jcy1107@mongodb.dbvp4ma.mongodb.net/?retryWrites=true&w=majority";

function connect() {
    return new mongodb.MongoClient(uri).db("study").collection("accounts");
}

async function insertOne(obj) {
    const accounts = connect();
    let result = await accounts.insertOne(obj);
    return result;
}

async function findAll() {
    const accounts = connect();
    return await accounts.find({}).sort("createdAt",-1).toArray();
}

async function findById(id) {
    const accounts = connect();
    let obj = await accounts.findOne({"_id": id});
    return obj;
}

async function deleteById(id) {
    const accounts = connect();
    let result = await accounts.deleteOne({"_id": id});
    return result;
}

async function updateById(id,obj) {
    const accounts = connect();
    let result = await accounts.updateOne(
        {"_id": id},
        {$set:{            
            "password" : obj.password,
            "name" : obj.name,            
            "email" : obj.email,
            "contact" : obj.contact,
            "birth" : obj.birth,
            "image" : obj.image
        }});
    return result;
}
async function updateUserImage(id,url) {
    return await connect().updateOne({_id:id},{$set : { image : url  }});
}


module.exports = {
    insertOne, findAll, findById, deleteById, updateById, updateUserImage
};