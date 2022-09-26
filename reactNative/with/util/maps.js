const GOOGLE_API_KEY="AIzaSyAvROcjCAGzrXWnRDdbogCv2wrsN6p6hnw";

function createStaticMapURI(lat,lng) {
    
    
    return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=15&size=800x450&markers=color:0xCE9DFA%7Clabel:H%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
}

export default createStaticMapURI;