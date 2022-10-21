import { useRouter } from "next/router";
import { useState } from "react";
import AnimalAlbum from "../../components/animal/animal-album";
import { getLatestAnimalData } from "../../services/animal-util";

export default function HomeOfUpkind({ animals }) {
    const router = useRouter();
    console.log("isFallBack ? " + router.isFallback);
    if (!animals) {
        return <p>해당데이터를 찾을 수 업습니다.</p>
    }
    return (
        <AnimalAlbum animals={animals} />
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

export async function getStaticProps(context) {
    function convertToCode(str) {
        if (str === "dog") {
            return "417000"
        } else if (str === "cat") {
            return "422400";
        } else if (str === "etc") {
            return "429900";
        } else {
            return null;
        }
    }
    const type = context.params.type;
    const code = convertToCode(type);
    

    const datas = await getLatestAnimalData(code);
    return {
        props: {
            animals: datas
        },
        revalidate: 30
    }
}


