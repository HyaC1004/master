const http = require("http");
const url = require("url");
const path = require("path");
const ejs = require("ejs");
const querystring = require('querystring');

function calcPrice(time) {
    let usedTime = Number.parseInt(time);
    let fee;
    if (usedTime <= 10) {
        fee = 0;
    } else {
        fee = 1000;
        if (usedTime > 30) {
            fee += Math.ceil((usedTime - 30) / 10) * 400;
        }
        fee = fee < 10000 ? fee : 10000;
    }
    return fee;
}
http.createServer(async(req, res) => {
    console.log(req.method);
    const pathname = url.parse(req.url, true).pathname;
    let query;
    let used;
    let price;
    if (pathname === "/output") {
        if(req.method=="GET"){
            if(req.method==="POST"){
                res.writeHead(302,{
                    "location":"/input"
                });        
                return res.end();
            }
            query = url.parse(req.url, true).query;  
            used = query.used;       
            price = calcPrice(used);               
            //console.log(used);
            ejs.renderFile(path.join(__dirname, "view", "fee.ejs"), {
                title: "Parking Fee",
                time: used,
                price: price
            }).then(data => {
                res.writeHead(200, {
                    "content-type": "text/html;charset=utf-8"
                });
                res.end(data);
            });
        } else if (req.method=="POST") {
            let recv;
            price = calcPrice(used);
            req.on("data",(data)=>{                
                recv=data;                
            });            
            req.on("end",()=>{
                const params = new URLSearchParams(recv.toString());
                //console.log(params);    // params.get("rank");                
                used = params.get("used");
                price = calcPrice(used);
                ejs.renderFile(path.join(__dirname, "view", "fee.ejs"), {
                    title: "Parking Fee",
                    time: used,
                    price: price
                }).then(data => {
                    res.writeHead(200, {
                        "content-type": "text/html;charset=utf-8"
                    });
                    res.end(data);
                });
            });    
        }
        
    } else if (pathname === "/input") {
        let data = await ejs.renderFile(path.join(__dirname,`view${req.url}.ejs`),{today:new Date().toLocaleDateString()});
        res.end(data);          
    } else {
        ejs.renderFile(path.join(__dirname, "view", "404.ejs"), {}).then(data => {
            res.writeHead(404, {
                "content-type": "text/html;charset=utf-8"
            });
            res.end(data);
        });
    }
}).listen(8080, () => {
    console.log("START");
});
