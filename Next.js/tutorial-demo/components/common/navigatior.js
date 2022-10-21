import styles from "./navigator.module.css"
import Link from "next/link";
import Image from "next/image";

function Navigator() {
    return (<header className={styles.header}>
        <div className={styles.logo}>
            <Link href="/"><a>유기동물조회</a></Link>
        </div>
        <nav className={styles.navigation}>
            <ul>
                <li><Link href="/cat"><a>고양이</a></Link></li>
                <li><Link href={"/dog"}><a>개</a></Link></li>
                <li><Link href={{
                    pathname: "/[upkind]", query: { upkind: "etc" }
                }}><a>기타</a></Link></li>
                <li><Link href={"/favorite"}><a>관심동물</a></Link></li>
            </ul>
        </nav>
    </header>);
}

export default Navigator;