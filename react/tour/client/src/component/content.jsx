import { useState } from "react";
import Item from "./item";
import Map from "./map";

function Content( {datas} ) {
    const [select,setSelect] = useState();
    document.title=`광주 관광지`;

    return (<div className="d-flex justify-content-between p-2 wrap ">
        <div className="mapBox">
            <Map select={select}/>
        </div>
        <ul className="itemList">
            {
            datas.map( data=> <Item data={data} key={data.id} setSelect={setSelect}/>)}
        </ul>
    </div>);
}

export default Content;