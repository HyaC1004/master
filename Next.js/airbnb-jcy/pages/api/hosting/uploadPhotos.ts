import fs from "fs";
import { NextApiRequest, NextApiResponse, NextConfig } from "next";
import { initializeApp } from "firebase/app";
import { ref, getStorage, getDownloadURL, uploadBytes } from "firebase/storage";
import formidable from "formidable";
import Hosting from "../../../lib/models/hosting";
/*
    multipart /form-data parser 는 기본 내장이 안되있어서 추가 설정
    (multer 같은..) 
    formidable 이란 multipart parsing 라이브러리를 활용
    npm i formidable @types/formidable
*/

export const config: NextConfig = {
  api: {
    bodyParser: false,
  },
};

const firebaseConfig = {
    apiKey: "AIzaSyCXTHnME__sngXvZ1zzQA3PCnKWMayjwE8",
    authDomain: "airbnbjcy.firebaseapp.com",
    projectId: "airbnbjcy",
    storageBucket: "airbnbjcy.appspot.com",
    messagingSenderId: "168633229418",
    appId: "1:168633229418:web:9b8424ac10150796de2a13",
    measurementId: "G-303Y2466KS"
};
const app = initializeApp(firebaseConfig);
//=========================================================================
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const form = formidable({ multiples: true });
  console.log("==== uploadPhotos ===");

  const parsed: { itemId: string; photos: formidable.File[] } =
    await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        resolve({
          itemId: fields.itemId as string,
          photos: files.photos as formidable.File[],
        });
      });
    });

  // console.log(parsed);

  const storage = getStorage(app);
  const pathRef = ref(storage, "hosting/" + parsed.itemId);
  const photos: { extraUrl: string }[] = [];
  for (let one of parsed.photos) {
    const imageRef = ref(pathRef, one.newFilename);
    await uploadBytes(imageRef, fs.readFileSync(one.filepath), {
      contentType: one.mimetype!,
    });
    photos.push({ extraUrl: await getDownloadURL(imageRef) });
  }
  console.log(photos);

  const resultItem = await Hosting.findByIdAndUpdate(
    parsed.itemId,
    { photos: photos },
    {
      returnDocument: "after",
    }
  );

  return res.status(200).json({ result: true, data: parsed.itemId });
}
