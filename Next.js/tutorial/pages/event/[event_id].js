// 대괄호를 이용해 경로를 잡아줄수 잇다. 

import { useRouter } from "next/router";

// event/3xr43r5 이런식으로 아무거나들어오면 대괄호경로로 이어짐
function EventDetail() {
    // 동적라우팅 했을때: 경로를 []를 이용해서 처리했을때
    // 그 값을 얻어내기 위해서는
    const router = useRouter(); // next가 제공하는 useRouter를 이용해서
    // console.log(router);    // 라우팅 관련된 정보 및 제어함수가 들어있음
    console.log(router.query);  // 값을 객체형태로 반환 {id:""}
    return (<>
        <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
            <span onClick={()=>{
                router.back();
            }}>Back</span>
            <h1 style={{flex:1, margin:10}}>Event-Detail</h1>

        </div>
    </>  );
}

export default EventDetail;