const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan")
const cors = require("cors");
const mongoose = require("mongoose");
const reviewRouter = require("./router/review");

dotenv.config();
mongoose.connect(process.env.MONGODB_URI,{dbName:"tour"})
const app = express();

app.use(cors());
app.use(morgan("[Server] :method :url :status (:response-time ms)"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/api/tour", reviewRouter);


app.listen(8080, ()=>{
    console.log("[server] start.");
});
