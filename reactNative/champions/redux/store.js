import {createStore} from "redux";

const favoritesInitialState = ["Ahri"];

const favoritesReducer = (state=favoritesInitialState, action) => {
    switch(action.type){
        case "add" :
            return [...state, action.value];
        case "remove" : 
            return state.filter(one=> one!==action.value);
        default:
            return state;
    }
};

const store = createStore(favoritesReducer);

export default store;