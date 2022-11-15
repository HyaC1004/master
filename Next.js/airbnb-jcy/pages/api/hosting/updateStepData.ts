import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import Hosting, { HostingData } from "../../../lib/models/hosting";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = await getToken({ req });
  console.log(token);
  // const { operation } = req.query;
  try {
    if (!token?.email) {
      throw new Error("로그인한 사용자들이 사용할 수 있습니다.");
    }
    //console.log("updateStepData Handle --- ", { ...item, owner: token?.email });

    const item: HostingData = req.body;
  
    let resultItem;
    
    if (!item._id) {
      resultItem = await Hosting.create({ ...item, owner: token?.email });
    } else {
      resultItem = await Hosting.findByIdAndUpdate(item._id, item, {
        returnDocument: "after",
      });
    }
    return res.status(200).json({ result: true, data: resultItem });
  } catch (e: any) {
    console.log("updateStepData Handle error --- ", e);
    return res.status(500).json({ result: false, error: e.message });
  }
}
