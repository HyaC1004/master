import { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthContextProvider({children}) {
    const jwt = localStorage.getItem("jwt");
    const [token, setToken]= useState(jwt);
    return(
        <AuthContext.Provider value={{token, setToken}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;