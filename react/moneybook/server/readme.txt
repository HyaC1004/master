API = 
    /api/account
        /register [POST]
            req: {email , password, name, gender, birth}
            resp: {result: true/false , message:   }
        /auth [POST]
            req: {email, password}
            resp: {result: true/false }