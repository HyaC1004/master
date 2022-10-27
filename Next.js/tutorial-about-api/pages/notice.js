import { useState } from "react";
import { getAllNotices } from "../models/notice";

export default function NoticePage({initItems}) {
    const [items, setItems] = useState(initItems);
    const itemRefresh = function () {
        fetch("/api/notice")
            .then(response => response.json())
            .then(data => setItems(data.items));
    }
    return (<>
        <h2 >알림사항 </h2>
        <button onClick={itemRefresh}>데이터 갱신</button>
        <ul>
            {
                items && items.map((one) => <li key={one._id}>{one.title}</li>)
            }
        </ul>
    </>);
}
//====================================
// staticProps 혹은 serverSideProps로 

export async function getStaticProps(context) {
    // const resp = await fetch("http://127.0.0.1:3000/api/notice");
    // const data = await resp.json();
    const data = await getAllNotices();
    console.log(process.cwd());
    return {
      props: {
        initItems: data
      },
      revalidate: 20
    }
  }

