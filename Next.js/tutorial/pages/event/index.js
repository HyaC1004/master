import { useRouter } from "next/router";
import { useEffect, useState } from "react";

/*
    페이지간 이동이 항상 Link로만 일어나진 않을꺼다.
    프로그래밍적으로 구현해야 될때는
*/
function EventHome() {
    const router = useRouter();

    useEffect(()=>{
        console.log("event home rendering");
    },[])
    const [word,setWord] = useState("");
    
    return (
    <>
        <h2>Event-Main</h2>
        <form onSubmit={(evt)=>{
            evt.preventDefault();
            console.log(word);
            // router.push("/event/"+word);
            router.push({
                pathname:"/event/[event_id]",
                query: {event_id:word}
            })
            setWord("");
        }}>
            <input type="text" value={word} onChange={(v)=>{setWord(v.target.value)}} />
        </form>
    </>
    );
}

export default EventHome;