import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [status, setStatus] = useState("loading");
    const [data, setData] = useState(null);

    const auth = async () => {
        const jwt = localStorage.getItem("jwt");
        console.log(jwt)
        if (!jwt) {
            setStatus("unauthenticated");
            return null;
        }
        const response = await fetch("http://localhost:8080/auth/session", {
            method: "POST",
            headers: {
                "authorization": "Bearer " + jwt
            }
        });
        if (response.status === 200) {
            const data = await response.json();
            console.log(data);
            setStatus("authenticated");
            setData(data);
            return data;
        } else {
            setStatus("unauthenticated");
            localStorage.removeItem("jwt");
            return null;
        }
    }

    useEffect(() => {
        const jwt = localStorage.getItem("jwt");
        console.log(jwt);
        // setToken(jwt);
        auth();
    }, [status]);


    const login = async (email, password) => {
        const response = await fetch("http://localhost:8080/auth/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ email, password })
        });
        if (response.status === 200) {
            const json = await response.json();
            console.log(json.token);    // context에 저장
            localStorage.setItem("jwt", json.token);
            auth();
            return true;
        }
        return false;
    }


    const logout = async () => {
        localStorage.removeItem("jwt");
        setStatus("unauthenticated");
    }

    return (<AuthContext.Provider value={{ login, logout, data, status }}>
        {children}
    </AuthContext.Provider>)
}

export default AuthContext;