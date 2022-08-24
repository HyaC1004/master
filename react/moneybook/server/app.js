import express from "express";
import morgan from "morgan";
import cors from "cors";
// const express = require("express");

import api from "./route/api.js"

const app = express();

app.use(morgan("[Server] :method :url :status (:response-time ms)"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());


app.use("/api", api);




app.listen(8080, ()=>{
    console.log("[server] start.");
});
