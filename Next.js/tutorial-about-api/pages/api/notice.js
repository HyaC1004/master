import { getAllNotices } from "../../models/notice";


export default async function handler(req,res) {    
    const datas = await getAllNotices();
    
    return res.status(200).json({items:datas});
   
}

 