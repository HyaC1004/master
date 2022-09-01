import { memo, useState } from "react";
import { useContext } from "react";
import { DateContext } from "./body";
import { Store } from "../App";
import Label from "./Label";

const Todo = memo(function ({data,todos}) {
    const [check,setCheck] = useState(data.done);
    const ctx = useContext(DateContext);
    const {checkTodo,deleteTodo} = useContext(Store);

    const handleCheck = (evt) =>{
        setCheck(evt.target.checked);
        checkTodo(data.id,evt.target.checked);
    };
    const handleDelete = ()=>{
        const idx = todos.findIndex(i=>i.id ===data.id);
        console.log(todos[idx]);        
        if(idx>-1){
            todos.splice(idx,1);
            localStorage.setItem("todos",JSON.stringify(todos));
            deleteTodo(todos);
        }        
    }
    return ( <div className="todoBox">
        <div>
        <label>
            <input type="checkbox" checked={check} onChange={handleCheck} />
            <span>{data.content}</span>
        </label>
        <small> {ctx}</small>
        </div>
        <div>
        <button onClick={handleDelete}>삭제</button>
        <Label />
        </div>
    </div> );
})

export default Todo;