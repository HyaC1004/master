import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Item from "./item";
import Write from "./write";
import Update from "./update";
import HistoryBar from "./historybar";

function History({datas, historyAPI, logon}) {
    const monthRef = useRef();
    
    const [items,setItems] = useState([]);
    const [selected, setSelected] = useState();
    
    const [month, setMonth] = useState( new Date().toISOString().slice(0, 7));
    const [deleted,setDeleted] = useState(0);
    const [added,setAdded] = useState(0);
    const [updated,setUpdated] = useState(0);
    const [graph, setGraph] = useState(true);

    const navigate = useNavigate();
    // console.log("logon: ",logon);
    // console.log("deleted: ",deleted);
    // console.log("added: ",added);



    useEffect(()=>{
        monthRef.current.value= month;
        historyAPI.history(month,logon)
        .then(recv=>{
            if(recv.result) {            
                setItems(recv.datas);
            }else {
                navigate("/");
            }
        })
    },[logon,deleted,added,updated,month])

    const handleSelected = (data) =>{
        setSelected(null);
        setSelected(data);
    }
    
    const checkHandle = () =>{
        if(graph==true){
            setGraph(false);
        }else{
            setGraph(true);
        }
    };
    
    return (
    <div>        
        <div className="row d-flex">
            <div className="col-md-11 ">
                <div className="form-floating">
                <input type="month" className="form-control" id="itemDate" 
                    ref={monthRef} onChange={(e)=>{ setMonth(e.target.value)}}/>
                <label htmlFor="itemDate">검색년월</label>                    
                </div>
            </div>
            <div className="col-md-1 d-flex justify-content-end">                    
                <button type="button" className="btn btn-lg btn-dark " data-bs-toggle="modal" data-bs-target="#write">
                <i className="bi bi-pencil"></i>
                </button>
            </div>
            <div className="form-check form-switch d-flex justify-content-end mt-1">
                <input className="form-check-input  me-1 " onChange={checkHandle} type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked />
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">그래프 보기</label>
            </div>
        </div>
        <form className="row d-flex">
            <div className="col-sm-3">
                <div className="form-floating">
                    <input type="date" className="form-control" id="itemDate" ref={monthRef}/>
                    <label htmlFor="itemDate">시작날짜</label>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="form-floating">
                    <input type="date" className="form-control" id="itemDate" ref={monthRef}/>
                    <label htmlFor="itemDate">마지막날짜</label>
                </div>
            </div>
            <div className="col-sm-3">

            </div>
            <div className="col-sm-3">

            </div>
            <button type="submit" className="btn btn-secondary mt-2">검색</button>
        </form>
        {
            graph && 
            <HistoryBar datas={items} />
        }
        
        <div className="item table-responsive">
            <h2>지출 목록</h2>
            
            <table className="table table-hover">
                <thead>
                    <tr className="table-info">
                        <th scope="col">날짜</th>
                        <th scope="col">사용내역</th>
                        <th scope="col">현금</th>
                        <th scope="col">카드</th>
                        <th scope="col" className="mb">카테고리</th>
                        <th scope="col" className="mb">태그</th>
                        <th scope="col">수정</th>
                        <th scope="col">삭제</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {items.map( one=>{
                        return <Item data={one} key={one._id} onSelected={handleSelected} historyAPI={historyAPI} setDeleted={setDeleted}/>
                    })}
                </tbody>
                <tfoot>

                </tfoot>
            </table>
        </div>


        

        <div className="modal fade" id="write">
            <Write historyAPI={historyAPI} setAdded={setAdded} />
        </div>

        <div className="modal fade" id="update">  
            <div className="modal-dialog">
                <div className="modal-content">
                 { selected && <Update historyAPI={historyAPI} target={selected} setSelected={setSelected} setUpdated={setUpdated} />}
                </div>
            </div>
        </div>  
        
    </div>  
    );
}

export default History;