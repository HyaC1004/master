const uri = "mongodb+srv://cheolyoung:jcy1107@mongodb.dbvp4ma.mongodb.net/?retryWrites=true&w=majority";

const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");

const { createServer } = require("http");
const { Server } = require("socket.io");

const authRoutes = require("./routes/auth");
const relationshiopRoutes = require("./routes/relationship");
const user = require("./models/user");

const app = express();
app.use(cors());
// enctype = "application/json" 형태 파싱 처리
app.use(express.json());
// app.use("/static", express.static(path.join(__dirname, "static")));

app.use("/auth", authRoutes);
app.use("/@me", relationshiopRoutes);

mongoose.connect(uri, { dbName: "dico-clone" });

// app.listen(8080);

const httpServer = createServer(app);

// 웹소켓 처리용 서버
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000"  // 프론트 서버 주소
    }
});

io.on("connection", async (socket) => {
    console.log("socket.id",socket.id, "rooms ", socket.rooms);
    // console.log(socket.handshake.query);
    const owner = socket.handshake.query.email;
    console.log(owner);
    await user.updateOne({ email: owner }, { sid: socket.id });

    socket.on("disconnect", async () => {
        await user.updateOne({ email: owner }, { sid: null });
    })
});

app.set("io", io);  // 



// // 이 서버에 설정을 하면 됨. 
// io.on("connection", (socket) => {
//     console.log("[socket.io] connected ", socket.id);

//     socket.on("disconnect", (reason) => {
//         console.log("[socket.io] disconnect ", socket.id, reason);
//     });

//     // 서버측에서 클라에게 메세지를 보내는 방식이 여러형태가 있다.
//     // 1. 특정 소켓에 emit . 
//     socket.emit("welcome", { "message": "환영합니다." });
//     // 2. 연결되어있는 모든 소켓에
//     // io.emit("newUser", { "message": "누가 들어옴." });
//     io.sockets.emit("newUser", { "message": "누가 들어옴." });

//     // 3. 만약 특정 소켓의 아이디를 만약 알고 있다면..? 그 사용자에게만 보낼수도 있다.

//     io.sockets.to(socket.id).emit("private", { datas: [1, 2, 3, 4] });

// });







httpServer.listen(8080);







