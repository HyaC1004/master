const initialState = {items:[],isLoggined:false}

const appReducer = (state = initialState, action) =>{
    switch (action.type) {
        case "login":
            return {...state, isLoggined: true};
        case "logout":
            return {...state, isLoggined: false};
        case "addFavorite":
            return {...state, items: [...state.items, action.value]};
        case "removeFavorite":
            return {...state, items: [...state.items, action.value]};
        default:
            return state;
    }
}