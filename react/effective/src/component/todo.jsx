import { memo, useState } from "react";

const Todo = memo(function ({data,todos,deleteTodo,checkTodo}) {
    const [check,setCheck] = useState(data.done);

    const handleCheck = (evt) =>{
        setCheck(evt.target.checked);
        checkTodo(data.id,evt.target.checked);
    }
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
        </div>
        <div>
        <button onClick={handleDelete}>삭제</button>
        </div>
    </div> );
})

export default Todo;