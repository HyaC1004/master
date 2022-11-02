import Image from "next/image";
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
                        <Image src={data.popfile} alt={data.kindCd} width={10} height={10}
                            layout={"responsive"} />
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
            </a>
        </Link>
    );
}

export default AnimalPreview;