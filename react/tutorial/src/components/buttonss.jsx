import { useState } from "react";

function Buttonss() {
    const [create, setCreate] = useState(0); // state초기값
    const [read, setRead] = useState(0);
    const [item, setItem] = useState({id:"pd0231", name:"아이폰14"});

    // read 온 클릭 이벤은 인라인 말고 애로우 펑션 형태로 정의 내려서 연결

    const handleRead = () =>{
        setRead(read+1);
    }
    const handleUpdate = ()=>{
        setItem({...item, name:'갤럭시S22+'});
        console.log(item);
    }
    return (<>
        <button onClick={()=>{setCreate(create+1)}}>Create({create})</button>
        <button onClick={handleRead}>Read({read})</button>
        <button onClick={handleUpdate}>Update</button>
        <hr />
        <span>{item.id} ({item.name})</span>
    </>  );
}       


export default Buttonss;