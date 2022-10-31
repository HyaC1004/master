import { useEffect } from "react";
import { getAnimalsByUpkind } from "../lib/animal-api";

const List = () => {

    useEffect(() => {
        getAnimalsByUpkind().then((result)=>{
            result.forEach((e)=>{
                console.log(e.id);
            })
        })
    },[]);

}

export default List;