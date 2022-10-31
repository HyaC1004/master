import { NextApiRequest, NextApiResponse } from "next";

type Data = {
    result: boolean;
    error?: string;
};

export default function handler(req:NextApiRequest, res: NextApiResponse<Data>) {
    // return res.status(200).json({message: true});
    return res.status(200).json({result: true});
}