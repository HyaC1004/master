import React from "react";

type Animal = {id: string; kind: string;}
type AnimalAlbumProps = {
    items: Animal[]
}
// const AnimalAlbum : React.FC<AnimalAlbumProps> = (props) =>{
//    return <></>
// }
// const AnimalAlbum = (props: AnimalAlbumProps)
const AnimalAlbum = ({items}: AnimalAlbumProps) => {
    console.log(items);
    return(<>
    {items.map((e)=>{
        <li key={e.id}>{e.kind}</li>
    })}
    </>)
}

export default AnimalAlbum;