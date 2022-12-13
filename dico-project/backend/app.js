const express = require("express");
const path = require("path")
const cors = require("cors");

const authRoutes = require("./routes/auth");



const app = express();

app.use(cors());
// enctype = "application/json" 형태 파싱 처리
app.use(express.json());    
app.use("/static", express.static(path.join(__dirname, "static")));

app.use("/auth", authRoutes);







app.listen(8080,()=>{
    console.log("START");
});