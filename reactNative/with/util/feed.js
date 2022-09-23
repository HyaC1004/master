import axios from "axios"

const URI = "https://with-c5480-default-rtdb.asia-southeast1.firebasedatabase.app/"

export async function sendFeed(idToken,email,feed) {
    console.log("feed Loading...");
    console.log("token: ",idToken);
    try{
        const response = await axios.post(URI+"feeds.json?auth="+idToken,{
            title:feed.title, contents:feed.contents, email:email, createdAt:Date.now()
        });
        //console.log(response);
        return response;
    }catch(e){
        console.log("send Error");
        console.log(e.message);
    }
}

export async function recieveFeed() {
    console.log("feed Loading...");
    try{
        const response = await axios.get(URI+"feeds.json");
        //console.log("resp: ", response);
        return response;
    }catch(e){
        console.log("feed Error");
        console.log(e.message);
    }
}

export async function detailFeed(id) {
    console.log("feed Loading...");
    try{
        const response = await axios.get(URI+"feeds/"+id+".json");
        //console.log("resp: ", response);
        return response;
    }catch(e){
        console.log("detail Error");
        console.log(e.message);
    }
}
export async function changeFeed(id,idToken,feed) {
    console.log("feed Loading...");
    console.log(feed);
    try{
        const response = await axios.patch(URI+"feeds/"+id+".json?auth="+idToken,feed);
        //console.log("resp: ", response);
        return response;
    }catch(e){
        console.log("change Error");
        console.log(e.message);
    }
}
export async function deleteFeed(idToken,id) {
    console.log("feed Loading...");
    try{
        const response = await axios.delete(URI+"feeds/"+id+".json?auth="+idToken);
        //console.log("resp: ", response);
        return response;
    }catch(e){
        console.log("delete Error");
        console.log(e.message);
    }
}
