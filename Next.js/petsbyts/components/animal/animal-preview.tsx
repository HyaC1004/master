import Image from "next/image";
import { Animal } from "../../interface";
import styles from "./animal.module.css";
type AnimalPreviewProps = {
  target: Animal;
};

export default function AnimalPreview({ target }: AnimalPreviewProps) {
  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <Image
          src={target.popfile}
          alt={target.kindCd}
          width={200}
          height={200}
        />
      </div>
      <ul className={styles.list}>
        <li>
          {target.kindCd} |{" "}
          <small>
            {target.colorCd} | {target.sexCd}
          </small>
        </li>
        <li>
          {target.orgNm} {target.happenPlace}에서 발견
        </li>
      </ul>
    </div>
  );
}
