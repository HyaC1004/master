import nextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import mongooseInit from "../../../lib/mongo-init";
import user from "../../../lib/models/user";
import { compare } from "bcryptjs";
// export default function(req, res) {};
export const option ={
    providers: [
        Credentials({
            async authorize(credentials, req) {
                console.log("nextauth - ", credentials);
                // DB 연결을 해서 유효한 정보인지 확인한후
                mongooseInit();
                const one = await user.findOne({email:credentials.email});
                if(!one || !(await compare(credentials.password, one.password))) {
                    throw new Error("invalid email/password");
                }
                return {email: one.email,name:"인재개발원"};
            }
        })    
    ]
}; 

export default nextAuth(option); 