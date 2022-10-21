import { useEffect, useState } from "react";
import AnimalAlbum from "../components/animal/animal-album";
import { getLatestAnimalData } from "../services/animal-util";

// CSR (Client Side Rendering)
function LatestAnimal() {
    const [animals, setAnimals] = useState(null);

    useEffect(() => {
        getLatestAnimalData().then(data => {
            setAnimals(data);
        });
    }, []);

    if (!animals) {
       return <p>데이터 불러오는 중</p>
    }
    return (<AnimalAlbum animals={animals} />);
}

export default LatestAnimal;