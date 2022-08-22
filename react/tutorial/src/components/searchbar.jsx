import { useRef } from "react";

function SearchBar() {
    const input = useRef();    

    const handle = (evt) =>{
        console.log(input.current.value);
    }
    const enterHandle = (evt)=>{
        if(evt.key==="Enter"){
            console.log(input.current.value);
        }
    }
    const changeHandle = (evt)=>{
        console.log(input.current.value,"change");
    }
    return (<>
        <input type="text" ref={input} onKeyDown={enterHandle} onChange={changeHandle}/>
        <button onClick={handle}>BUTTON</button>
    </>  );
}

export default SearchBar;