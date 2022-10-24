/*
    모든 request method 가 다 여기로 들어옴.
*/
export default function (req, res) {
    // console.log(req.method);    // "GET" || "POST" ||
    const { method } = req;

    switch (method) {
        case "GET":
            console.log("    - ", req.query);
            return res.status(200).json({});
        case "POST":
            /*
                next.js api route 는 request header 의 컨텐츠 타입에 맞는형태로
                알아서 바디 파싱을 해준다.
            */
            console.log("POST  - ", req.body, typeof req.body);
            console.log(req.body.email);
            return res.status(201).json({});
    }

}