import { NextApiHandler } from "next";
import { AccountData } from "../../../interface/account";
import Account from "../../../lib/models/account";
import mongooseInit from "../../../lib/mongooseInit";
import bcrypt from "bcrypt";

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
        document.password = await bcrypt.hash(document.password,10);  
        if (
          !document.email ||
          !emailRegex.test(document.email) ||
          !document.firstName ||
          !document.lastName ||
          !document.password 
        ) {
          throw new Error("누락된 필드값이 존재합니다.");
        }
        const find = await Account.findOne({ email: document.email });
        if (find) {
          throw new Error("이미 사용중인 이메일입니다.");
        }
        const result = await Account.create(document);
        return res.status(201).json({
          result: true,
          message: "회원가입처리가 되었습니다.",
        });
      } catch (e: any) {
        return res.status(201).json({
          result: false,
          message: e.message ?? "회원가입 중 오류가 발생하였습니다",
        });
      }
    
   
  
};

export default handler;
