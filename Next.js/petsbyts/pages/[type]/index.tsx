import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import AnimalAlbum from "../../components/animal/animal-album";
import { Animal, AnimalWithUpKind } from "../../interface";
import { getLatestAnimalData } from "../../services/animal-util";
type HomeOfUpkindProps = {
    animals: Animal[],
    type: string
}
const HomeOfUpkind = ({ animals, type }: HomeOfUpkindProps) => {
    if (!animals) {
        return <p>해당데이터를 찾을 수 업습니다.</p>
    }
    return (
        <>
            <Head><title>{type}</title></Head>
            <AnimalAlbum animals={animals} />
        </>
    )
}
export async function getStaticPaths() {
    return {
        paths: [
            { params: { type: 'cat' } },
            { params: { type: 'dog' } },
        ],
        fallback: "blocking" // can also be true or 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const datas: AnimalWithUpKind[] = await getLatestAnimalData();
    return {
      props: {
        animals: datas,
      }, // will be passed to the page component as props
      revalidate: 20,
    };
  };
export default HomeOfUpkind;

