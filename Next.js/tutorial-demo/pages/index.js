import Link from 'next/link';
import { useEffect, useState } from 'react'
import AnimalPreview from '../components/animal/animal-priview';
import styles from '../styles/Home.module.css'


// 전체 동물 정보 제공 페이지
export default function Home(props) {
  const{animals,total} = props
  const [loaded,setLoaded] = useState(true);

// useEffect(()=>{
//     fetch("http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=7EwDqJBddRRRfXDpE3Te10UmZi%2BFGvJXYFuUU7IXhR%2F2lVb9A2AEhd0tG16ndELGVYf%2F20rPFyEdZ799DABrxA%3D%3D&_type=JSON&numOfRows=20")
//       .then((resp)=>resp.json())
//       .then((data)=>{
//         console.log(data);
//         setAnimals(data.response.body.items.item);
//         setTotal(data.response.body.totalCount);
//         setLoaded(true);
//       });
//   },[])  

  if(!loaded) {
    return <p>데이터 불러오는 중</p>
  }

  return (
    <div className={styles.container}>
      {animals.map(one=><AnimalPreview data={one} key={one.desertionNo} />)}
    </div>
  )
}


export async function getStaticProps(context) {
  const resp = await fetch("http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=7EwDqJBddRRRfXDpE3Te10UmZi%2BFGvJXYFuUU7IXhR%2F2lVb9A2AEhd0tG16ndELGVYf%2F20rPFyEdZ799DABrxA%3D%3D&_type=JSON&numOfRows=60");
  const data = await resp.json();

  // console.log("at/index.js",context);
  return {
    props: {
      animals: data.response.body.items.item,
      total: data.response.body.totalCount
    }, // will be passed to the page component as props
    revalidate: 20
  }
}