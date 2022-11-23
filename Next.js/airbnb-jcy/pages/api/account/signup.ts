import { NextApiRequest, NextApiResponse } from "next";
import AccountData from "../../../interfaces/account";
import Account from "../../../lib/models/account";
import { hashSync } from "bcryptjs";
import mongooseInit from "../../../lib/mongooseInit";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  mongooseInit();
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ result: false, message: "요청을 처리할 수 없습니다." });
  }

  const data = req.body as AccountData;
  try {
    const emailRegex = /\S+@\S+\.\S+/;
    if (
      !data.email ||
      !emailRegex.test(data.email) ||
      !data.firstname ||
      !data.lastname ||
      !data.password ||
      !data.dob
    ) {
      throw new Error("누락된 필드값이 존재합니다.");
    }
    const find = await Account.findOne({ email: data.email });
    if (find) {
      throw new Error("이미 사용중인 이메일입니다.");
    }
    const hashedPassword = hashSync(data.password);
    const result = await Account.create({ ...data, password: hashedPassword });
    return res.status(201).json({
      result: true,
      message: "회원가입처리가 되었습니다.",
    });
  } catch (e: any) {
    return res.status(422).json({
      result: false,
      message: e.message ?? "회원가입 중 오류가 발생하였습니다",
    });
  }
}
