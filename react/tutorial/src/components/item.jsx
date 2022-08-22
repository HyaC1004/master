import { useEffect } from "react";
import { useState } from "react";

//function Item(props) {  // props.data, props.onDelete
function Item ({data,onDelete}) {

    // mount될때, 업데이트 될때 다작동함.
    useEffect(()=>{
        console.log(data.name);
    },[data]);  // [] ==> 최초 한번 발생하는 이펙트
            // [data] ==> update 될때마다 발생하는 이펙트

    return (<li>
        <b>{data.name}</b>
        <span>({data.price}) </span>
        <button onClick={(evt)=>{onDelete(data)}}>🗑</button>
        </li>  );
}

export default Item;