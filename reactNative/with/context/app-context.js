import { createContext, useEffect, useReducer, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AppContext = createContext({
})
const authReducer = (state = null,action) => {
    switch(action.type) {
        case "login" :
            AsyncStorage.setItem("userAuth",JSON.stringify(action.payload));
            return action.payload;
        case "logout" :
            return null;
    }
    return null;
}
export function AppContextProvider ({children}) {
    const [auth, dispatch] = useReducer(authReducer,null);
    

    useEffect(()=>{
        !async function(){
            const savedAuth = await AsyncStorage.getItem("userAuth")

            //console.log("ssave",savedAuth)
            if(savedAuth) {
                dispatch({type:"login", payload:JSON.parse(savedAuth)})
            }
        }();
    },[])

    return (
    <AppContext.Provider value={{auth,dispatch}}>
        {children}
    </AppContext.Provider>    );
}