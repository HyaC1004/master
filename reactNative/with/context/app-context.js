import { createContext, useEffect, useReducer, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { sendRefreshReq } from "../util/accounts";

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
            const savedAuth = await AsyncStorage.getItem("userAuth");
            if(savedAuth) {
                const recoveryData = JSON.parse(savedAuth);
                const refreshData = sendRefreshReq(recoveryData.refreshToken);
                const combiendData = {
                    ...recoveryData,
                    idToken: refreshData.id_token,
                    refreshToken: refreshData.refresh_token
                };
                dispatch({type:"login", payload:combiendData})
                AsyncStorage.setItem("userAuth", JSON.stringify(combiendData));
            }
        }();
    },[])

    return (
    <AppContext.Provider value={{auth,dispatch}}>
        {children}
    </AppContext.Provider>    );
}