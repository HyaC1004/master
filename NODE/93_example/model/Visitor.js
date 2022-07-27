const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema({   
    name: String,
    comment: String,
    createdAt: Date
});


module.exports = mongoose.model("visitor", visitorSchema, "visitors");
