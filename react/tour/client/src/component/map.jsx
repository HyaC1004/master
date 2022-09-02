import { useContext } from "react";
import { useEffect, useRef } from "react";
import { Store } from "../app";
const { kakao } = window;

function Map({select}) {
    const value= useContext(Store);    
    const divRef = useRef();
    //처음 지도 그리기
    useEffect(()=>{        
        const options = { center: new kakao.maps.LatLng(35.1595454, 126.8526012), level: 8 };
        const map = new kakao.maps.Map(divRef.current, options);
        const clusterer = new kakao.maps.MarkerClusterer({
            map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
            averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
            minLevel: 7 // 클러스터 할 최소 지도 레벨 
        });
        const bounds = map.getBounds();
        const markers = value.map(e=>{
            bounds.contain(new kakao.maps.LatLng(e.lat,e.lng))
            // console.log(rst);
            const marker = new kakao.maps.Marker({
                position: new kakao.maps.LatLng(e.lat,e.lng)
            });
            return marker;
        });
        clusterer.addMarkers(markers);

        if(select){
            const center = new kakao.maps.LatLng(select.lat, select.lng);  
            const content = '<div class="customoverlay">' +
                                `<span class="title">${select.tourDestNm}</span>` +
                            '</div>';          
            const options = {
                center: center,
                level: 3
            };
            const map = new kakao.maps.Map(divRef.current,options);            
            new kakao.maps.CustomOverlay({
                map: map,
                position: center,
                content: content,
                yAnchor: 0
            });
            
            map.setCenter(center);
        }
    },[select,value])

    

    return (
    <div className="d-flex">
        <div id="map" ref={divRef} >
        </div>
    </div>);
}

export default Map;