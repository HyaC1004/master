/*
    쿠키라는 건 사용자의 브라우저에서 관리되는 임시파일이라고 보면 된다.

    이 쿠키라는 걸 이용해서 서버측에서는 사용자의 세션을 구분해서 관리하게 된다.
*/
const http = require("http")
http.createServer((req,res)=>{
    if(req.url==='/') {
        // 여기 왔을때 사용자에게 WELCOME이라고 보내면서
        // 쿠키를 함께 하나 보다.
        res.writeHead(200, {
            "content-type" : "text/html",
            "set-cookie":[
                "personkey=FAEWIKFWEMFfesdlkfjmioasefj",
                "commonkey=432efeafe4"
            ]
        });
        res.end("<h1>WELCOME TO APP</h1>");
    }else if (req.url==="/view"){        
        // 만약 쿠키가 없다면 undefined 있다면 string으로 나온다.
        // 쿠키의 정보는 쿠키이름=쿠키값 이런 형태로 추출된다.
        // 만약 사용자로부터 전달받은 쿠키가 여러개라면 ; 이 붙은 형태로 추출이 된다.
        // 해당 string을 가지고 적절한 조치를 취해서 쿠키를 분리하고
        // 쿠키이름과 값 역시 분리해서 출력해보자.  
        let cookie = req.headers.cookie;
        const cookies={};
        if(cookie){
            const cookieArray=cookie.split(/;\s+/);
            cookieArray.forEach(elm=>{
                const [name,value] = elm.split("=");
                cookies[name]=value;
                console.log("쿠키이름: " + name + " / 값: "+value);
            });
        }
        console.log(cookies);
        res.write(JSON.stringify(cookies));
        res.end("Okay....");   
    }else {
        res.end("NOT FOUND");
    }

}).listen(8080,()=>{
    console.log("START");
});

