import { NextApiHandler } from "next";
import { AddCommentMessage, GetCommentsMessage, Message } from "../../../interface/response";


type Response = Message | AddCommentMessage | GetCommentsMessage;

export const handler: NextApiHandler<Response> = async (req, res) => {
  const method = req.method;

  if (req.method === "GET") {
    const { target } = req.query as { target: string };
  }
  if (req.method === "POST") {
    const document: Comment = req.body;
  }

  return res
    .status(403)
    .json({ result: true, error: "not supported request method" });
};
