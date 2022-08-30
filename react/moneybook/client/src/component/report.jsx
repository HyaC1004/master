import { useEffect, useRef, useState } from "react";
import ReportBarChart from "./reportBarChart";
import ReportDoughnutChart from "./reportDoughnutChart";

function Report({ historyAPI, logon }) {

    const [range, setRange] = useState({});
    const [datas, setDatas] = useState([]);

    const beginRef = useRef();
    const endRef = useRef();

    const handleChange = (evt)=>{
        setRange({...range, [evt.target.name] : evt.target.value});
    }

    useEffect(()=>{
        endRef.current.value = new Date().toISOString().slice(0, 10);
        beginRef.current.value = new Date(Date.now()-1000*60*60*24*30).toISOString().slice(0, 10);
        setRange({begin :beginRef.current.value, end : endRef.current.value });
    },[]);

    useEffect(()=>{
        if(!range.begin || !range.end ) {
            return;
        }
        historyAPI.search(range.begin, range.end).then((recv=>{
            if(recv.result) {
                setDatas(recv.datas);
            }
        }));
    },[range])

    return (<div>
        <div className="input-group mb-3">
           
            <input type="date" className="form-control" name="begin"
                onChange={handleChange} ref={beginRef}/>
            <span className="input-group-text"> ~ </span>
            <input type="date" className="form-control" name="end"
                onChange={handleChange} ref={endRef} />
        </div>
        <ReportBarChart datas={datas} />
        <ReportDoughnutChart datas={datas} /> 
    </div>);
}

export default Report;