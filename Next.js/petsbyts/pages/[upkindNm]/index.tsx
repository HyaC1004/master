import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import AnimalAlbum from "../../components/animal/animal-album";
import { AnimalWithUpKind, Upkind } from "../../interface";
import { getLatestAnimalData } from "../../lib/animal-api";

type Props = {
  animals: AnimalWithUpKind[];
  upkindNm: string;
};

export default function UpkindPage(props: Props) {
  useRouter();
  const { animals, upkindNm } = props;
  return (
    <>
      <Head><title>{upkindNm}</title></Head>
      <AnimalAlbum datas={animals} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  const modes = ["dog", "cat", "etc"];

  return {
    paths: modes.map((val) => ({ params: { upkindNm: val } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { upkindNm } = context.params as { upkindNm: string };  
  function convertToCode(upkindNm: string): any {
        if (upkindNm === "dog") {
            return "417000"
        } else if (upkindNm === "cat") {
            return "422400";
        } else {
            return "429900";
        } 
    }
  const upkindCode = convertToCode(upkindNm);
  const datas: AnimalWithUpKind[] = await getLatestAnimalData(upkindCode);

  return {
    props: {
      animals: datas,
      upkindNm: upkindNm
    },
    revalidate: 20,
  };
};
