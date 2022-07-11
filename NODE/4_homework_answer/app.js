const http = require("http");
const url = require("url");
const ejs = require("ejs");
const path = require("path");
const fs = require("fs");
const e = require("express");

const movies = [
    { id: "mv01", name: "토르 - 러브 앤 썬더", img: "/static/85999_320.jpg" },
    { id: "mv02", name: "범죄도시 2", img: "/static/85813_320.jpg" },
    { id: "mv03", name: "탑건 - 매버릭", img: "/static/82120_320.jpg" },
    { id: "mv04", name: "헤어질 결심", img: "/static/85852_320.jpg" },
];

http.createServer(async (req, res) => {
    const { pathname } = url.parse(req.url, true);
    // 이미지파일 혹은 css 파일, js 파일 같은 경우는 바로 제공될 수 있게 특정한 경로에 모아두고
    // 그 경로로 요청이 들어오면 바로 pipe 로 전송해주자.
    if(pathname.startsWith("/static/")){
        return fs.createReadStream(path.join(__dirname, pathname)).pipe(res);
    }

    ["/list", "/in"].includes(pathname);
    if (pathname === "/list" || pathname === "/") {
        let html = await ejs.renderFile(path.join(__dirname, "ejs", "list.ejs"), { movies });
        // res.send(html);     res.end();
        res.writeHead(200, { "content-type": "text/html;charset=utf-8" });
        return res.end(html);
    } 
    if(pathname === "/seat") {
        // [GET] query 로 id 란 이름에 영화id 값이 전달되게 설계함.
        let query = url.parse(req.url, true).query;
        // 해당 id의 영화정보를 찾아서 렌더링할때 넘겨주는 것까지 백엔드
        let target = movies.find((elm)=> elm.id == query.id);
        if(!query.id || !target) {
            res.writeHead(302, {"Location": "/list"});  // 리다이렉트라고 부름.
            return res.end();
        }
        let html = 
            await ejs.renderFile(path.join(__dirname, "ejs", "seat.ejs"), { target });
        res.writeHead(200, { "content-type": "text/html;charset=utf-8" });
        return res.end(html);
    }
    if(pathname === "/reserve") {
        // 요청을 POST 로 처리할꺼기 때문에, 받은 데이터를 추출하는 과정이 추가
        let recv = "";
        req.on("data", chunk => {
            recv += chunk;
        });
        req.on("end", async () => {
            const params = new URLSearchParams(recv);
            const query = url.parse("/?"+recv, true).query;
            // id 란 이름이 영화 id 값이 넘어오고,   seat라는 이름으로 선택된 좌석값이 넘어옴.
            // 이걸 추출해서 적절하게 작업해서 rendering 시키는게 목적
            let target = movies.find((elm)=> elm.id == params.get("id"));
            // let target = movies.find((elm)=> elm.id == query.id));
            // let seat = params.get("seat");      // 맨 처음일치되는 데이터 하나가 추출 (string)
            // let seat = params.getAll("seat");      // 일치되는 데이터 전부가 배열로 추출 (string)
            let seat;
            if(Array.isArray(query.seat)){
                seat = query.seat;
            }else {
                seat = [ query.seat ];
            }
            /*
                참고로 url.parse 는 값이 하나던 여러개던 .seat 를 나오는데
                하나일때는 string 으로 나오고  여러개일때는 배열로 나옴.
            */
            let html = 
                await ejs.renderFile(path.join(__dirname, "ejs", "reserve.ejs"), { target, seat });
            res.writeHead(200, { "content-type": "text/html;charset=utf-8" });
            return res.end(html);
        });
    }

    // res.end(".....");

}).listen(8080, () => {
    console.log("[SERVER] START");
});

