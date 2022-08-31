import { useState } from "react";

function Footer({addTodo}) {
    const [todo,setTodo] = useState("");
    const handleClick = () =>{
        if(todo){
            addTodo(todo);
            setTodo("");
        }
    }

    return ( <div className="footerBox">
        <input type="text" value={todo} onChange={(evt)=>{setTodo(evt.target.value)}} />
        <button onClick={handleClick}>추가</button>
    </div> );
}

export default Footer;