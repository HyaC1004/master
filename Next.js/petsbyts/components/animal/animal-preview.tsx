import Image from "next/image";
import Link from "next/link";
import { Animal } from "../../interface";
import styles from "./animal-preview.module.css";

type AnimalPreviewProps = {
    data: Animal
}
const AnimalPreview = ({ data }: AnimalPreviewProps) => {
    return (
        <Link href={{
            pathname: "/[type]/[desertionNo]",
            query: {
                desertionNo: data.desertionNo,
                type: data.kindCd.startsWith("[개]") ? "dog" : (
                    data.kindCd.startsWith("[고양이]") ? "cat" : "etc"
                )
            }
        }}>            
            <div className={styles.item}>
                <div className={styles.image}>
                    <Image src={data.popfile} alt={data.kindCd} width={200} height={200} 
                            />
                </div>
                <ul className={styles.list}>
                    <li>{data.kindCd}  <small>{data.colorCd}</small></li>
                    <li>{data.orgNm} {data.happenPlace}에서 발견</li>
                </ul>
            </div>           
        </Link>
    );
}

export default AnimalPreview;