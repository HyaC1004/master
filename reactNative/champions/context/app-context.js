import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";

const AppContext = React.createContext({
    favorites: [],
    addFavorite: (id) => { },
    removeFavorite: (id) => { }
});

export function AppContextProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    useEffect(()=>{
        !async function(){
            const savedFavorites = await AsyncStorage.getItem("favorites")
            if(savedFavorites !== null) {
                setFavorites(JSON.parse(savedFavorites));
            }
        }();
    },[])

    const addFavorite = (id) => {
        setFavorites((current) => {
            const updated = [...current, id];
            AsyncStorage.setItem("favorites",JSON.stringify(updated));
            return updated;
        });
    }
    const removeFavorite = (id) => {
        setFavorites(function (current) {
            const updated = current.filter((one) => one !== id);
            AsyncStorage.setItem("favorites",JSON.stringify(updated));
            return updated
        });
    }

    return (<AppContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
        {children}
    </AppContext.Provider>)
}


export default AppContext;


