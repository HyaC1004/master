import axios from "axios";

const GOOGLE_API_KEY="AIzaSyAvROcjCAGzrXWnRDdbogCv2wrsN6p6hnw";

export function createStaticMapURI(lat,lng) {    
    return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=15&size=800x450&markers=color:0xCE9DFA%7Clabel:H%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
}

export async function getAddresses(lat,lng) {    
    const endPoint= `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}&language=ko`;
    const response = await axios.get(endPoint);
    //    console.log(response.data);

    return response.data.results[0];
}
