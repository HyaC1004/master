
import React, { useCallback, useEffect, useReducer, useState } from 'react';

import './App.css';
import Body from './component/body';
import Footer from './component/footer';
import Header from './component/header';
import {v4} from "uuid";
import HeadLine from './component/headline';

// 리듀서 정의는 매개변수 2개짜리로...
function todoReducer(state, action) {
  //console.log("state: ",state);
  // console.log("action: ",action);
  switch(action.type){
    case "init" :
      return JSON.parse(action.raw);
    case "add":
      const one = {id:v4(),content:action.content, done:false};
      return [...state,one];
    case "update":
      const updated = state.map((one)=>{
        if (one.id === action.target) {
          one.done = action.flag;
        }
        return one;
      })
      return updated;
    case "delete":
      const filtered = state.filter((one)=>{return one.id !== action.target});
      return filtered;
  }
}
export const Store = React.createContext(null);

function App() {
  //const [todos,setTodos] = useState([]);
  const [counts,setCounts] = useState(0);

  const [todos, todosDispatch] =useReducer(todoReducer,[]);

  useEffect(()=>{
    //console.log("todos: ",todos);
    todosDispatch({type:"init",raw:localStorage.getItem("todos")??"[]"})
  },[]);

  useEffect(()=>{
   setCounts(4)
  },[]);

  
  const addTodo = (content)=>{
    todosDispatch({type:"add", content: content});
  };

  const deleteTodo = useCallback((target)=>{
    todosDispatch({type:"delete",target:target});
  },[todos]);

  const checkTodo = useCallback((id, done) => {
    todosDispatch({type:"update",target:id,flag:done})
  },[todos]);
  
  const actions = {checkTodo,deleteTodo}

  return (
    <div className="App">
      <Header />
      <HeadLine counts={counts} />
      <Store.Provider value={actions}>
        <Body todos={todos} deleteTodo={deleteTodo} checkTodo={checkTodo}/>
      </Store.Provider>
      <Footer addTodo={addTodo}/>
    </div>
  );
}

export default App;
