import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./slices/favorite-slice";

const store = configureStore({
    reducer: {favorite: favoriteSlice.reducer}
});

export default store;