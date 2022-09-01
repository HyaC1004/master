import { useEffect, useState, useRef } from "react";
const { kakao } = window;

function Map({select}) {
    
    const [map,setMap] = useState(null);
    const divRef = useRef();
    //처음 지도 그리기
    useEffect(()=>{        
        const options = { center: new kakao.maps.LatLng(33.450701, 126.570667) };
        const kakaoMap = new kakao.maps.Map(divRef.current, options);
        setMap(kakaoMap);
    },[])

    const geocoder = new kakao.maps.services.Geocoder();
    const callback = function(result, status) {
        if (status === kakao.maps.services.Status.OK) {
            console.log(result);
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            new kakao.maps.Marker({
                map: map,
                position: coords
            });
            map.setCenter(coords);
        }
    };
    
    geocoder.addressSearch(select, callback);

    return (
    <div className="d-flex">
        <div id="map" ref={divRef} >


        </div>
    </div>);
}

export default Map;