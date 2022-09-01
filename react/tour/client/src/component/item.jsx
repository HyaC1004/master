function Item({data,onSelected}) {

    return (
        <li className="card p-2 mb-4" style={{width: "18rem"}} onClick={()=>onSelected(data.addrRoad)}>
            <h5 className="card-title">{data.tourDestNm}</h5>         
            <h6 className="card-subtitle mb-2 text-muted">{data.addrRoad}</h6>                     
            <p className="card-text">편의시설: {data.publicConvFcltInfo}</p>    
            <p className="card-text">소개: {data.tourDestIntro}</p>
            <p className="card-text">TEL: {data.mngAgcTel}</p>
        </li>
     );
}

export default Item;