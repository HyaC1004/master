import { Animal } from "../../interface";
import AnimalPreview from "./animal-preview";
import styles from "./animal.module.css";

type AnimalAlbumProps = {
  datas: Animal[];
};

export default function AnimalAlbum({ datas }: AnimalAlbumProps) {
  return (
    <>
      <div className={styles.album}>
        {datas.map((one) => (
          <AnimalPreview target={one} key={one.desertionNo} />
        ))}
      </div>      
    </>
  );
}
