import Link from "next/link";
import styles from "./animal-preview.module.css";

function AnimalPreview({ data }) {
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
            <a>
                <div className={styles.item}>
                    <div className={styles.image}>
                        <img src={data.popfile} alt={data.kindCd} />
                    </div>
                    <ul className={styles.list}>
                        <li>{data.kindCd}  <small>{data.colorCd}</small></li>
                        <li>{data.orgNm} {data.happenPlace}에서 발견</li>
                    </ul>
                </div>
            </a>
        </Link>
    );
}

export default AnimalPreview;