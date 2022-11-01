import { NextApiHandler } from "next";
import CommentData from "../../../interfaces/comment";
import Comment from "../../../lib/models/comment";



const handler: NextApiHandler = async (req, res) => {
    if (req.method === "GET") {
        const datas = await Comment.find({});
        return res.json({ result: true, datas: datas });
    } else if (req.method === "POST") {
        const document = req.body as CommentData;
        const data = await Comment.create(document);
        return res.json({ result: true, data: data });
    } else {
        return res.json({ result: false });
    }
}

export default handler;