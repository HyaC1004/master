import { useState } from "react";
import Item from "./item";
import Map from "./map";

function Content( {datas} ) {
    const [select,setSelect] = useState();
    //console.log(datas.length);  

    const selectHandle= (data)=>{
        setSelect(data);
        console.log(select);
    }

    return (<div className="d-flex justify-content-between">
        <div className="mapBox">
            <Map select={select}/>
        </div>
        <ul className="itemList">
            { 
                datas.map( data=> <Item data={data} key={data.id} onSelected={selectHandle}/>)
            }
        </ul>
    </div>);
}

export default Content;