import { useEffect, useRef } from "react";
import List from "./list";
import Write from "./write";
import HistoryAPI from '../service/historyAPI';

const historyAPI = new HistoryAPI("http://192.168.4.69:8080");


function History({datas}) {
    const monthRef = useRef();
    
    useEffect(()=>{
        const month = new Date().toISOString().slice(0,7);
        monthRef.current.value= month;
        
    },[])

    return (
    <div>
        <div className="row g-2">
            <div className="col-sm-8">
                <div className="form-floating">
                    <input type="month" className="form-control " id="itemDate" ref={monthRef}/>
                    <label htmlFor="itemDate">???</label>                    
                </div>
            </div>
            <div className="col-sm-4 d-flex flex-row-reverse justify-content-center ">                
                <button type="button" className="btn btn-lg btn-dark " data-bs-toggle="modal" data-bs-target="#write">
                <i className="bi bi-pencil"></i>
                </button>
                <button className="btn btn-dark btn-lg me-4 ">검색</button>
            </div>
        </div>
        <div className="modal fade" id="write">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                    <Write historyAPI={historyAPI}/>
                    </div>
                </div>
            </div>
        </div>

        <List />
    </div>  
    );
}

export default History;