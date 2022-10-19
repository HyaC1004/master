import { useRouter } from "next/router";

function EventHot() {
    const router = useRouter();
    console.log(router.query);

    const datas = ["JS 1주일 마스터", "React 3시간만에 뽀개기"];
    return (
        <>
            <h2>Hottest Event!</h2>
            <ul>
                {datas.map((data) => <li key={data}>{data}</li>)}
            </ul>
        </>
    );
}

export default EventHot;