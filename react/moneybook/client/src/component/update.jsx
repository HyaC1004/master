import { useRef } from "react";

function Update({historyAPI,target,setSelected,setUpdated}) {    
    const cateogries = ["미분류","식비","주거/통신","생활용품","의복/미용","교통/차량","용돈/기타"];
    
    const itemDate = useRef();
    const useDesc = useRef();
    const cashAmt = useRef();
    const cardAmt = useRef();
    const category = useRef();
    const tag = useRef();
    
    console.log(target);

    const handleSubmit = (event) =>{    
        event.preventDefault();
        historyAPI.update(target._id,itemDate.current.value,useDesc.current.value,cashAmt.current.value,cardAmt.current.value,category.current.value,tag.current.value)
            .then(recv =>{
                if(recv.result){
                    setUpdated(recv.data.createdAt);
                }
                console.log(recv);    
            })
        setSelected(null);
    }
    const cancleButton = () =>{
        setSelected(null);
    }


    return (
        <div className="modal-body">
            <h2>수정하기</h2>
            <form onSubmit={handleSubmit}>                                
                <div className="form-floating mb-3 mt-3">
                    <input type="date" className="form-control" id="itemDate" ref={itemDate} defaultValue={target.itemDate.slice(0,10)}/>
                    <label htmlFor="itemDate">소비날짜</label>
                </div> 
                <div className="form-floating mb-3 mt-3">
                    <input type="text" className="form-control" id="useDesc" ref={useDesc} defaultValue={target.useDesc}/>
                    <label htmlFor="useDesc">사용내역</label>
                </div> 
                <div className="row g-2">
                    <div className="col-md">
                        <div className="form-floating mb-3">
                            <input type="number" className="form-control" id="cashAmt" ref={cashAmt} defaultValue={target.cashAmt}/>
                            <label htmlFor="cashAmt">현금</label>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="form-floating mb-3 ">
                            <input type="number" className="form-control" id="cardAmt" ref={cardAmt} defaultValue={target.cardAmt}/>
                            <label htmlFor="cardAmt">카드</label>
                        </div> 
                    </div> 
                </div>
                <div className="form-floating mb-3 mt-3">
                    <select type="text" className="form-control" id="category" ref={category} defaultValue={target.category}>
                        {cateogries.map(one=>{
                            return <option value={one} key={one}>{one}</option>
                        })}                
                    </select>
                    <label htmlFor="category">카테고리</label>
                </div> 
                <div className="form-floating mb-3 mt-3">
                    <input type="text" className="form-control" id="tag" ref={tag} defaultValue={target.tag}/>
                    <label htmlFor="tag">태그</label>
                </div> 
                <div className="modal-footer">
                    <button className="btn btn-dark " data-bs-dismiss="modal">수정</button>
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={cancleButton}>취소</button>
                </div>
            </form> 
        </div>
        );
}

export default Update;