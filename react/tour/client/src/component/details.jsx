import { useParams } from "react-router-dom";
import { useContext } from "react";
import Detail from "./detail";
import { Store } from "../app";
import Map from "./map";

function Details({datas}) {
    const value = useContext(Store);
    const params = useParams(); 
    const target = value.find(e=>e.id===params.id);
    return (
        
    <div className="d-flex justify-content-between p-2 wrap ">
        <div className="mapBox">
            <Map select={target}/>
        </div>
        <Detail target={target}/>
    </div>  
    );
}

export default Details;