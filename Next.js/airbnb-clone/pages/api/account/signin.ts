import { NextApiHandler } from "next";
import { AccountData } from "../../../interface/account";
import Account from "../../../lib/models/account";
import mongooseInit from "../../../lib/mongooseInit";
import bcrypt, { compareSync } from "bcrypt";

const handler: NextApiHandler = async (req, res) => {
    if (req.method !== "POST") {
        return res
            .status(405)
            .json({ result: false, message: "요청을 처리할 수 없습니다." });
    }
    try {
        mongooseInit();
        const document = req.body as AccountData;
        const find = await Account.findOne({ email: document.email });
        if (compareSync(document.password, find?.password!)) {
            return res.status(200).json({ result: true, authUser: find });
        }
            return res.status(406).json({ result: false, authUser: null });
      } catch (e: any) {
        return res.status(201).json({
          result: false,
          message: e.message ?? "로그인 중 오류가 발생하였습니다",
        });
      }
    
   
  
};

export default handler;
