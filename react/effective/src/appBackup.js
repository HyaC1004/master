
import { useCallback, useEffect, useReducer, useState } from 'react';
import './App.css';
import Body from './component/body';
import Footer from './component/footer';
import Header from './component/header';
import {v4} from "uuid";
import HeadLine from './component/headline';

// 리듀서 정의는 매개변수 2개짜리로...
function todoReducer(state, action) {
  console.log("state: ",state);
  console.log("action: ",action);
}

function App() {
  //const [todos,setTodos] = useState([]);
  const [counts,setCounts] = useState(0);

  const [to, setTo] =useReducer(todoReducer,[]);

  useEffect(()=>{
    const todos = localStorage.getItem("todos");    
    if(todos){
      setTodos(JSON.parse(todos));
    }
  },[]);

  useEffect(()=>{
    const count= todos.filter((one)=>{ return one.done ===false}).length;
    localStorage.setItem("todos",JSON.stringify(todos));    
    setCounts(count);
  },[todos,counts]);

  
  const addTodo = (content)=>{
    const newTodo = {id:v4(),content,done:false};
    setTodos([...todos, newTodo]);    
  };

  const deleteTodo = useCallback((content)=>{
    setTodos([...content]);
  },[todos]);

  const checkTodo = useCallback((id, done) => {
    //console.log(id, done);
    const newTodos = todos.map((one) => {
      if (one.id === id) {
        one.done = done;
      }
      return one;
    })
    setTodos(newTodos);
  },[todos]);
  
  return (
    <div className="App">
      <Header />
      <HeadLine counts={counts} />
      <Body todos={todos} deleteTodo={deleteTodo} checkTodo={checkTodo}/>
      <Footer addTodo={addTodo}/>
    </div>
  );
}

//export default App;
