
import AnimalAlbum from "../../../components/animal/animal-album";
import { getLatestAnimalData } from "../../../services/animal-util";

export default function FavoritePage({animals, userid}) {
  console.log("dsdsa",userid);
    return (<>
        <h2 style={{textAlign:"center"}}>{userid} 님이 주시하고 있는 동물</h2>
        <AnimalAlbum animals={animals} />
    </>  );
}


export async function getServerSideProps(context) {
  console.log("getServerSideProps",Object.keys(context));
  const {req, res} = context; // 서버사이드 구축시 사요했던 req, res;
  // console.log("---req: ",Object.keys(req))
  // console.log("---res: ",Object.keys(res))
  const {userid} = context.params;  // 처리하고자 하는 라우트가 동적라우트일때    
  // console.log(userid);

  const datas = await getLatestAnimalData();
  const dummy = datas.filter((one)=>Math.random()>0.9);

  return {
    props: {
      userid: userid,
      animals:dummy
    }, // will be passed to the page component as props
  }
  }