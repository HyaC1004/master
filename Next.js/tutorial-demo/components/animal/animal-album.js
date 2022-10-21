
import AnimalPreview from "./animal-preview";


export default function AnimalAlbum({ animals }) {
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