import { GetStaticPaths, GetStaticProps } from "next";
import { Animal } from "../../interface";
import { getLatestAnimalData } from "../../lib/animal-api";

type Props = {
    animals: Animal;
};

const DetailOnAnimal = (props: Props) => {
    console.log(props.animals);
    return (<>
        <h3></h3>
        <p>
        </p>
    </>);
}


export async function getStaticPaths() {
    const resp =
        await fetch("http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=ZCU3%2FjB%2FlrpbQX9ou37B1eCj93xvvkjd5%2F609G4%2FxzVrGVTfFcfhBPhexAu%2Fw0APi53876d4eojm%2Bq8Eiq7ZaA%3D%3D&_type=json&numOfRows=6");
    const data = await resp.json(); // 
    const paths = data.response.body.items.item.map((one) => ({
        params: {
            desertionNo: one.desertionNo,
            type: one.kindCd.startsWith("[개]") ? "dog" : (
                one.kindCd.startsWith("[고양이]") ? "cat" : "etc"
            )
        }
    })
    );
    console.log(paths);

    return {
        paths: paths,
        fallback: true // can also be true or 'blocking'
    }
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
    const { desertionNo }:any = context.params as { desertionNo: string };  

    const datas: Animal[] = await getLatestAnimalData(desertionNo);
  
    return {
      props: {
        animals: datas
      },
      revalidate: 20,
    };
  };

export default DetailOnAnimal;