import { NextApiHandler } from "next";
import { AccountData } from "../../../interface/account";
import Account from "../../../lib/models/account";
import mongooseInit from "../../../lib/mongooseInit";

const handler: NextApiHandler = async (req, res) => {
    if (req.method !== "POST") {
        return res
            .status(405)
            .json({ result: false, message: "요청을 처리할 수 없습니다." });
    }
    try {
        mongooseInit();
        const emailRegex = /\S+@\S+\.\S+/;
        const document = req.body as AccountData;
        if (
          !document.email ||
          !emailRegex.test(document.email)
        ) {
          throw new Error("잘못 입력했습니다.");
        }
        const find = await Account.findOne({ email: document.email });
        if(find){
          return res.status(201).json({
            result: true, type: true, email: document.email
          });
        } else {
          return res.status(201).json({ //sign up
            result: true, type: false, email: document.email
          });
        }
        
      } catch (e: any) {
        return res.status(201).json({
          result: false,
          message: e.message
        });
      }
    
   
  
};

export default handler;
