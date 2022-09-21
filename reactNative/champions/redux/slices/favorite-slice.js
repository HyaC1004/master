import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const favoriteSlice = createSlice({
    name:"favorite",
    initialState: [],
    reducers: {
        addFavorite : (state, action) => {
            console.log("favoriteSlice.add");
            return [...state,action.payload];
        },
        removeFavorite: (state, action) => {
            console.log("favoriteSlice.remove");
            return state.filter(one=> one!==action.payload);
        },
    }

});

export const {addFavorite, removeFavorite} = favoriteSlice.actions;

export default favoriteSlice;