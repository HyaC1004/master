
import { useEffect, useState } from 'react';
import './App.css';
import Body from './component/body';
import Footer from './component/footer';
import Header from './component/header';
import {v4} from "uuid";

function App() {
  const [todos,setTodos] = useState([]);
  const [counts,setCounts] = useState(0);

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
  const deleteTodo = (content)=>{
    setTodos([...content]);
  };
  const checkTodo = (id, done) => {
    //console.log(id, done);
    const newTodos = todos.map((one) => {
      if (one.id == id) {
        one.done = done;
      }
      return one;
    })
    setTodos(newTodos);
  }
  
  return (
    <div className="App">
      <Header counts={counts}/>
      <Body todos={todos} deleteTodo={deleteTodo} checkTodo={checkTodo}/>
      <Footer addTodo={addTodo}/>
    </div>
  );
}

export default App;
