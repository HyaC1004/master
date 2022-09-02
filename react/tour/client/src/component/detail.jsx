import { useNavigate, useParams } from "react-router-dom";
import Loading from "./loading/loadingspinner"
import Review from "./review";

function Detail({target,reviewAPI}) {
    const navigate = useNavigate();
    const closeHandle = ()=>{
        navigate("/");
    }
    if(target){
        document.title=`${target.tourDestNm}`;

        return ( <div className="detail p-2">
            <div className="card detailCard">
                <span className="closeBtn" onClick={closeHandle}>닫기</span>
                <div className="card-body">
                    <h3 className="card-title" style={{width:"90%"}}>{target.tourDestNm}</h3>
                    <h6 className="card-subtitle mb-3 text-muted">{target.addrRoad}</h6>
                    <h5 className="card-title">편의시설</h5>
                    <h6 className="card-subtitle mb-3 text-muted">{target.publicConvFcltInfo}</h6>
                    <h5 className="card-title">수용인원수</h5>
                    <h6 className="card-subtitle mb-3 text-muted">{target.capacity}명</h6>
                    <h5 className="card-title">주차가능수</h5>
                    <h6 className="card-subtitle mb-3 text-muted">{target.availParkingCnt??0}대 수용가능</h6>
                    <h5 className="card-title">관리기관</h5>
                    <h6 className="card-subtitle mb-3 text-muted">{target.mngAgcNm}</h6>
                    <h5 className="card-title">연락처</h5>
                    <h6 className="card-subtitle mb-3 text-muted">{target.mngAgcTel}</h6>
                    <p className="card-text">{target.tourDestIntro}</p>                
                </div>
                <Review data={target} reviewAPI={reviewAPI}/>
            </div>
        </div> );
    }else{
        return <Loading />;
    }
}

export default Detail;