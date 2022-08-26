import express from "express";
import morgan from "morgan";
import cors from "cors";
import account from "./route/account.js"
import history from "./route/history.js"
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose.connect(process.env.MONGODB_URI,{dbName:"moneybook"})
const app = express();

app.use(cors());
app.use(morgan("[Server] :method :url :status (:response-time ms)"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());



app.use("/api/account", account);
app.use("/api/history", history);




app.listen(8080, ()=>{
    console.log("[server] start.");
});


/*
    cors
    morgan
    express
    mongoose
    mongodb
    dotenv
    jsonwebtoken
*/