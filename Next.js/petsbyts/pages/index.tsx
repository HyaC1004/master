import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import AnimalAlbum from "../components/animal/animal-album";
import { AnimalWithUpKind } from "../interface";

import { getLatestAnimalData } from "../lib/animal-api";

export default function Home(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { animals } = props;
  return (
    <>
      <Head>
        <title>홈 - 유기동물조회서비스</title>
        <meta
          name="description"
          content="공공데이터로 등재되어 관리되는 유기동물 정보들을 제공해주고자 합니다."
        />
      </Head>
      <AnimalAlbum datas={animals} />
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  animals: AnimalWithUpKind[];
}> = async (context) => {
  const datas: AnimalWithUpKind[] = await getLatestAnimalData();
  return {
    props: {
      animals: datas,
    }, // will be passed to the page component as props
    revalidate: 20,
  };
};
