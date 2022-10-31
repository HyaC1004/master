import { NextApiHandler } from "next";

type Comment = { 
    _id: string;
    content: string;
}

type Data = {
    result: boolean;
    items: Comment[];
}

const handler : NextApiHandler<Data> = (req, res) => {
    return res.status(200).json({result: true, items: []});
}

export default handler;