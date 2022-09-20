
const redux = require("@reduxjs/toolkit");

const initialState = ["Ahri"];
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "add":
            return [...state, action.value];
        case "remove":
            return state.filter(one=> one!==action.value);
        default:
            return state;
    }
};

const store = redux.createStore(reducer);

console.log(store.getState());
store.dispatch({ type: "add", value: "Fizz" });
console.log(store.getState());
