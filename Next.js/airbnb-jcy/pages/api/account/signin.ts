import { NextApiRequest, NextApiResponse } from "next";
import Account from "../../../lib/models/account";
import { compareSync, hashSync } from "bcryptjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("SERVER - " + req.body);
  const { email, password } = req.body as { email: string; password: string };
  const find = await Account.findOne({ email: email });
  console.log("SERVER - " + find);
  if (compareSync(password, find?.password!)) {
    return res.status(200).json(find);
  }
  return res.status(406).json(null);
}
