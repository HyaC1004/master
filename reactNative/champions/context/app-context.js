import React, { useState } from "react";

const AppContext = React.createContext({
    favorites: [],
    addFavorite: (id) => { },
    removeFavorite: (id) => { }
});

export function AppContextProvider({ children }) {

    const [favorites, setFavorites] = useState([]);
    const addFavorite = (id) => {
        setFavorites((current) => [...current, id]);
    }
    const removeFavorite = (id) => {
        setFavorites(function (current) {
            return current.filter((one) => one !== id);
        });
    }

    return (<AppContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
        {children}
    </AppContext.Provider>)
}


export default AppContext;


