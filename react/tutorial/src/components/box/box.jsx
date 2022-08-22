import style from "./box.module.css";

function Box() {
    // className={}
    return (<div className ={style.box+" "+style.danger}>
        <h2>Box</h2>
    </div>  );
}

export default Box;