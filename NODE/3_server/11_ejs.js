/*
    file system을 이용하면 이미 만들어진 HTML을 응답으로 보내는건 가능하다.
    하지만 요청처리 결과를 반영해서 HTML을 만들고자 하는건 불가능하다.

    위 상황을 해결하는 동적인 HTML을 만들어내려면 template engine을 사용해야 된다.
    template engine은 노드에서 제공하는 것은 아니고 모듈을 설치해야 한다.
    
    ejs 모듈을 사용해보려고 한다. (handlebars, pug, nunjucks, etc.)
*/
const http = require("http");
const url = require("url");
const path = require("path");
const ejs = require("ejs");
const { time } = require("console");
/*
    이 서버에 서비스를 하나 추가하자.
    /fee 라는 url에서 처리하면 되고
    이 url로 접근시 사용자 used 라는 이름으로 이용시간(단위 분)을 쿼리로 넘겨준다.
    /fee?used=180    /fee?used=794
    이 사용시간에 해당하는 요금을 계산해서 이걸 이쁘게 출력할 수 있게 ejs를 활용한다.
                                        (렌더링에 최소한 전체 사용시간과, 사용요금은 포함한다.)
    30분까지는 1000원 / 10분당 400 ===> 최대요금 10000
*/
http.createServer((req,res)=>{
    console.log(req.method);
    const pathname = url.parse(req.url,true).pathname;
    const query = url.parse(req.url,true).query;    
    // console.log(query.used,Number.parseInt(query.used));
    // console.log(/[0-9]+/.test(Number.parseInt(query.used)));
    if(pathname==="/fee" ){
        let usedTime = Number.parseInt(query.used);        
        let fee           
        if(usedTime<=10){
            fee=0;
        }else{               
            fee = 1000;             
            if(usedTime > 30) {                    
                fee += Math.ceil((usedTime-30)/10)*400;
            }
            fee = fee < 10000 ? fee : 10000;  
        } 
        if(/[0-9]+/.test(usedTime)){
            ejs.renderFile(path.join(__dirname,"view","fee.ejs"),{
                title: "Parking Fee",
                time: usedTime,
                price: fee
            }).then(data=>{
                res.writeHead(200,{
                    "content-type" : "text/html;charset=utf-8"
                });             
                res.end(data);
            });
        } else {
            ejs.renderFile(path.join(__dirname,"view","404.ejs"),{
            }).then(data =>{
                res.writeHead(404,{
                    "content-type" : "text/html;charset=utf-8"
                });          
                res.end(data);
            }); 
        }
    }else if(pathname==="/rank") {        
        const rendered = ejs.renderFile(path.join(__dirname,"view","rank.ejs"),{
            title: "First EJS",
            weekday: query.week,
            list: ["이솔","이혜주"]
        }).then(data => {
            res.writeHead(200,{
                "content-type" : "text/html;charset=utf-8"
            });  
            res.end(data);
        });
    } else {
        ejs.renderFile(path.join(__dirname,"view","404.ejs"),{
        }).then(data =>{
            res.writeHead(404,{
                "content-type" : "text/html;charset=utf-8"
            });          
            res.end(data);
        }); 
    }
}).listen(8080,()=>{
    console.log("START");
});
