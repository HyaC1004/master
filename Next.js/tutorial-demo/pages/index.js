import { useEffect, useState } from "react"
import AnimalAlbum from "../components/animal/animal-album";
import Head from "next/head";
import { getLatestAnimalData } from "../services/animal-util";
/*
  전체 동물 정보 제공 페이지
*/
export default function Home(props) {
  const [loaded, setLooaded] = useState(true);
  const { animals, total } = props;
  if (!loaded) {
    return <p>데이터 불러오는 중</p>
  }
  return (
    <>
      
      <AnimalAlbum animals={animals} />
    </>
  )
}

export async function getStaticProps(context) {
  console.log(" - Home component .. getStaticProps");
  const datas = await getLatestAnimalData();
  return {
    props: {
      animals: datas
    }, // will be passed to the page component as props
    revalidate: 20
  }
}

