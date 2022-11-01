import { NextApiHandler } from "next";

const handler: NextApiHandler = (req, res) => {
    if(req.method !== "POST") {
        return res.status(401).json({message: "invalid request method"})
    }
    const { writer, comment, star } = req.body as {writer:string; comment: string; star: number};
    console.log(writer, comment, star);
    return res.status(200).json({message:"success"});
}

export default handler;