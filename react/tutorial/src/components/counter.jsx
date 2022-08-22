/*
    functional component 에서
    state를 갖고 싶다면? useState()라는 훅을 사용하면 됨.
*/

import { useState } from "react";

function Counter() {
    let cnt = 0;
    const ret = useState(0);
        // 배열이 리턴되는데 앞에가 상태값이고, 뒤에가 이 상태를 변경하는 함수
    console.log(cnt, ret);
    const value = ret[0] 
    const setValue = ret[1];

    function decrease(evt) {
        ret[1](value-1>0 ? value-1: 0);
        cnt--;
    }

    const increase = ()=>{
        setValue(value+1);
        cnt++;
    }

    return (<div>
        <button onClick={decrease}>-</button>
        <span> {value} </span>
        <button onClick={increase}>+</button>
    </div>  );
}

export default Counter;