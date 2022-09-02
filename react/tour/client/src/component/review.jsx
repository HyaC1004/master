import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Loading from "./loading/loadingspinner"

function Review({data,reviewAPI}) {
    const [gets,setGets] = useState([]);
    const [news,setNews] = useState();

    const comments = useRef();
    const writer = useRef();
    const score = useRef();
    useEffect(()=>{        
        reviewAPI.read(data.id)
        .then(recv=>{
            setGets(recv.datas);
        })
    },[gets])

    const handleSubmit = (event) =>{    
        event.preventDefault();
        reviewAPI.create(data.id,writer.current.value,comments.current.value,score.current.value)
            .then(recv =>{
                console.log(recv);
                setNews(recv);
            })
            .catch(e=>{
                console.log(e.message);
            })
        event.target.reset();   
    }


    if(gets){
        return (
            <div className="card-body">
                <p>댓글({gets.length})</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-2 d-flex">
                        <input type="text" className="nick me-4" placeholder="닉네임"ref={writer} />                        
                        
                        <span className="score">평점</span>
                        <select ref={score}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        
                    </div>
                    <div className="form-floating mb-2">
                        <textarea className="form-control" ref={comments} id="floatingTextarea"></textarea>
                        <label htmlFor="floatingTextarea">Comments</label> 
                    </div>                   
                    <input className="form-control-sm" id="formFileSm" type="file" />
                    <button className="btn btn-dark">등록</button>   
                    <hr />
                </form>
                <div>
                    {gets.map(one=>{
                        const content = 
                            <div>
                                <div className="d-flex justify-content-between">
                                <p className="card-subtitle text-muted">{one.writer}</p><span className="card-subtitle text-muted">평점:{one.score}점</span>
                                </div>
                                <p>{one.comments}</p>                                
                                <hr />
                            </div>
                        return content;
                    })}
                </div>
            </div>  );
    }else{
        return <Loading />;
    }
    
}

export default Review;