const { configureStore, createSlice } = require("@reduxjs/toolkit");

const favoriteSlice = createSlice({
    name:"favorite",
    initialState: [],
    reducers: {
        add : (state, action) => {console.log("favorite add")},
        remove: (state, action) => {console.log("favorite remove")},
    }
});

const authSlice = createSlice({
    name:"auth",
    initialState: {},
    reducers: {
        login : (state, action) => {console.log("auth login")},
        logout : (state, action) => {console.log("auth logout")},
    }
});

// console.log(favoriteSlice);
// console.log(authSlice);

const store = configureStore({
    reducer: {favorite: favoriteSlice.reducer, auth:authSlice.reducer}
});

// console.log(store);
/*
    Slice를 이용해서 만들어진 reducer 기능들은..
    dispatch를 시킬때 직접 객체를 설계하지 않고,
    slice가 가지고 있는 actions 라는 프로퍼티를 이용해서 객체를 생성한다.
*/
// console.log(favoriteSlice.actions.add(10));
// store.dispatch(favoriteSlice.actions.add(10));
// store.dispatch({ type: 'favorite/add', payload: 10 });
store.dispatch({ type: 'auth/login', payload: 10});
const ret = favoriteSlice.actions.add({name:"Fizz",score:1})
store.dispatch(ret);
console.log(store.getState());



