import { NextApiHandler } from "next";
import { getToken } from "next-auth/jwt";
import { getSession } from "next-auth/react";
import { HostingData } from "../../../interface/hosting";
import Hosting from "../../../lib/models/hosting";
import mongooseInit from "../../../lib/mongooseInit";

const handler: NextApiHandler = async (req, res) => {
    if (req.method !== "POST") {
        return res
            .status(405)
            .json({ result: false, message: "요청을 처리할 수 없습니다." });
    }
    try {
        mongooseInit();
        const token = await getToken({ req });
        const document = req.body as HostingData;
        // console.log(token?.email,document);
        let resultItem;

        if (!token?.email) {
          throw new Error("로그인한 사용자들이 사용할 수 있습니다.");
        }
        if (document._id) {
          resultItem = await Hosting.findByIdAndUpdate(document._id, document, {
            returnDocument: "after",
          });
        } else {
          resultItem = await Hosting.create({ ...document, email: token?.email });
        }
        return res.status(200).json({ result: true, data: resultItem });
      } catch (e: any) {
        return res.status(201).json({
          result: false,
          message: e.message
        });
      }
    
   
  
};


export default handler;

