import axios from "axios"

const APP_KEY = "AIzaSyAP62giccNA9ZqzzTjeP5xnagf4DRlxISw"

export async function sendRegisterReq(email,password) {
    console.log("Register Loading...");
    try{
        const response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="+APP_KEY,{
            email, password, returnSecureToken: true
        });
        console.log(response);
    }catch(e){
        console.log("Register Error");
        console.log(e.message);
    }
}

export async function sendLoginReq(email,password) {
    console.log("Login Loading...");
    try{
        const response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+APP_KEY,{
            email, password, returnSecureToken: true
        });
        console.log(response);
    }catch(e){
        console.log("Login Error");
        console.log(e.message);
    }
}