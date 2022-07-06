const http = require("http");
const url = require("url");
/*
    URL에 따라 다른 서비스를 제공해보았고,
    이번에는 해당 URL로 요청을 보낼때 보내준 query를 이용해서 응답    
    
    url은 /weekdayList만 처리하면 된다.
        이 url로 접근할때 쿼리가 날라오는데 week라는 이름으로 요일 data(sun~sat)가 넘어오고
                                         rank라는 이름으로 숫자 데이터가 넘어온다고 가정
    이 정보를 추출해서 응답을 보내달라.
    /weekdayList?week=wed&rank=1
        너의 요청 처리 결과 : (수요웹툰 1위)
    /weekdayList?week=sat&rank=7
        너의 요청 처리 결과 : (토요웹툰 7위)
    dayList?rank=8
        너의 요청을 처리할 수 없다.
*/
const server = http.createServer((req, res) => {
    if (req.url !== "/favicon.ico") {
        console.log(url.parse(req.url));
    }
    res.setHeader("content-type", "text/html;charset=utf-8");
    let pathname = url.parse(req.url).pathname;
    // 쿼리 title(key)=79277(value)
    let query = url.parse(req.url, true).query;
    console.log(query);
    if (pathname === "/weekdayList") {
        switch (query.week) {
            case query.week = "mon":
                query.week = "월"
                break;
            case query.week = "tue":
                query.week = "화"
                break;
            case query.week = "wed":
                query.week = "수"
                break;
            case query.week = "thu":
                query.week = "목"
                break;
            case query.week = "fri":
                query.week = "금"
                break;
            case query.week = "sat":
                query.week = "토"
                break;
            case query.week = "sun":
                query.week = "일"
                break;
        }
        res.write(`
            <p>너의 요청 처리 결과: <b>${query.week}요웹툰 ${query.rank}위</b></p>
        `);
    } else {
        res.write(`너의 요청을 처리할 수 없다.`);
    }

    res.end();

}).listen(8080, () => {
    console.log("[SERVER] START");
});

! function () {
    let rst = url.parse("/dayList?rank=8&genre=action", true);
    console.log(rst.query.genre);
};