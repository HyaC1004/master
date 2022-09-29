import axios from "axios";
import { Buffer } from "buffer";
const URI = "https://with-c5480-default-rtdb.asia-southeast1.firebasedatabase.app/"
export async function sendAddPlaceRequest(placeData, fileData, fileURI, userData) {
    console.log("SendAdd =================================")
    // 1. 파일업로드를 하고 (storage에 전송)
    // console.log(fileData?.length," : ", fileData?.substring(0,100))
    const fileName = fileURI.substring(fileURI.lastIndexOf("/")+1);
    const endPoint = `https://firebasestorage.googleapis.com/v0/b/with-c5480.appspot.com/o/${fileName}`
    
    try{
        const uploadResult =await axios({
            url: endPoint,
            headers: {
                "Content-type": "image/jpeg"
            },
            data: Buffer.from(fileData,"base64"),
            method:"post"
        });
        // console.log(uploadResult);
    }catch(e){
        console.log("UPLOAD",e.message);
    }
    // 2. 데이터 저장 (realtime database에 저장)
    const placeItem = {...placeData, imageURL: endPoint+"?alt=media",writer:userData.email};
    const response = await axios.post(URI+"places.json?auth="+userData.idToken,{
        ...placeItem, 
        createdAt:Date.now()
    });
    //console.log(response);
    console.log("SendAdd ===================END===========")
}

// export async function recievePlace() {    
//     console.log("places Loading...");
//     try{
//         const response = await axios.get(URI+"places.json");
//         //console.log(response);
//         return response;
//     }catch(e){
//         console.log("placeRcv Error");
//         console.log(e.message);
//     }
// }

export async function recievePlace() {
    const endPoint = `${URI}/places.json`;
    // console.log(endPoint);
    const response = await axios.get(endPoint);
    const datas = [];

    Object.keys(response.data).forEach((key) => {
        const temp = { key, ...response.data[key] };
        datas.push(temp);
    });

    return datas;
}