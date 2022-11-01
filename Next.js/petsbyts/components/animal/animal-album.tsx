import AnimalPreview from "./animal-preview";
import React from "react";
import { Animal } from "../../interface";

type AnimalAlbumProps = {
    animals: Animal[]
}

const AnimalAlbum = ({ animals }: AnimalAlbumProps) => {
    return (
        <>
            <div className="album">
                {
                    animals.map(one =>
                        <AnimalPreview data={one} key={one.desertionNo} />
                    )
                }
            </div>
            <style jsx>{`
                .album {
                    display : flex;
                    flex-wrap: wrap;
                    gap : 0.2rem;
                    justify-content : center;
                }
            `}</style>
        </>);
}

export default AnimalAlbum;