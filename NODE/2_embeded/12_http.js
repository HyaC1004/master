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

/* http.createServer((req,res)=>{
    let parsed = url.parse(req.url,true);
    let pathname = parsed.pathname;
    let query = parsed.query;
    res.setHeader("content-type", "text/html;charset=utf-8");
    if(pathname=== "/weekdayList" && query.rank!==undefined) {
        res.write("<html>");
        res.write("<body>");
        res.write("<h2>당신의 요청쿼리 분석 결과</h2>");
        res.write("<p>");
        res.write(`${query.week}요 웹툰 ${query.rank}위 조회`);
        res.write("</p>");        
        res.write("</body>");
        res.write("</html>");
    } else {
        res.write("<h3>리소스가 존재하지 않음 (NOT FOUND)</h3>")
    }
    res.end();
}).listen(8080,()=>{
    console.log("STARTED");
}); */

const server = http.createServer((req, res) => {
    if (req.url !== "/favicon.ico") {
        console.log(url.parse(req.url));
    }
    res.setHeader("content-type", "text/html;charset=utf-8");
    let pathname = url.parse(req.url).pathname;
    // 쿼리 title(key)=79277(value)
    let query = url.parse(req.url, true).query; 
    console.log(Object.values(query), typeof query);    
    let week = ['mon','tue','wed','thu','fri','sat','sun'];
    let weekK = ['월','화','수','목','금','토','일'];
    let weekIndex = week.indexOf(query.week);            

    if (pathname === "/weekdayList") { 
        if(week.includes(query.week) && query.rank!==undefined){
            res.write(`
                <h2>너의 요청 처리 결과</h2> <p><b>${weekK[weekIndex]}요웹툰 ${query.rank}위</b></p>
            `);
        } else {
            res.write(`너의 요청을 처리할 수 없다.`);
        }              
    } else {
        res.write(`너의 요청을 처리할 수 없다.`);
    }
    res.end();
}).listen(8080, () => {
    console.log("[SERVER] START");
});

!function () {
    let rst = url.parse("/dayList?rank=8&genre=action", true);
    // true 쿼리string을 Object, default값이 false => string
    console.log(rst.query.genre);
};