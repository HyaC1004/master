import { useRouter } from "next/router";
import styles from './upkind.module.css'
import { useEffect, useState } from "react";
import AnimalPreview from "../../components/animal/animal-priview";

function UpkindHome(props) {
    const {animals,total} = props
    const router = useRouter();
    const [loaded,setLoaded] = useState(true);
    const {upkind} = router.query;
    // const [animals,setAnimals] = useState(null);

    // useEffect(()=>{
    //     let upkindNo=0;
    //     switch(upkind){
    //         case "dog": upkindNo=417000;
    //             break;
    //         case "cat": upkindNo=422400;
    //             break;
    //         case "etc": upkindNo=429900;
    //             break;
    //     }
    //     // console.log(upkindNo);
    //     setTimeout(()=>{
    //         fetch("http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=7EwDqJBddRRRfXDpE3Te10UmZi%2BFGvJXYFuUU7IXhR%2F2lVb9A2AEhd0tG16ndELGVYf%2F20rPFyEdZ799DABrxA%3D%3D&_type=JSON&numOfRows=60&upkind="+upkindNo)
    //         .then((resp)=>resp.json())
    //         .then((data)=>{
    //             // console.log(data);
    //             setAnimals(data.response.body.items.item);            
    //             setLoaded(true);
    //         });
    //     },0)
        
    //   },[upkind])

    if(!loaded) {
        return <p>데이터 불러오는 중</p>
    }

    return (<>
   
    <div className={styles.list}>
        {animals.map(one=><AnimalPreview data={one} key={one.desertionNo} />)}
    </div>
    </>  );
}

export default UpkindHome;


export async function getStaticPaths() {
    return {
      paths: [
        { params: { upkind: 'cat' } }, 
        { params: { upkind: 'dog' } }, 
        { params: { upkind: 'etc' } }
    ],
      fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps(context) {
    console.log(context);
    let upkindNo=0;
        switch(context.params.upkind){
            case "dog": upkindNo=417000;
                break;
            case "cat": upkindNo=422400;
                break;
            case "etc": upkindNo=429900;
                break;
        }
    console.log(upkindNo);
    const resp = await fetch("http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=7EwDqJBddRRRfXDpE3Te10UmZi%2BFGvJXYFuUU7IXhR%2F2lVb9A2AEhd0tG16ndELGVYf%2F20rPFyEdZ799DABrxA%3D%3D&_type=JSON&numOfRows=60&upkind="+upkindNo);
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