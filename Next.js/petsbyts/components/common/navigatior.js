import styles from "./navigator.module.css"
import Link from "next/link";
import Image from "next/image";

function Navigator() {
    return (<header className={styles.header}>
        <div className={styles.logo}>
            <Link href="/"><Image src={"/images/logo.png"} width={100} height={40} /></Link>
        </div>
        <nav className={styles.navigation}>
            <ul>
                <li><Link href="/cat"><a>고양이</a></Link></li>
                <li><Link href={"/dog"}><a>개</a></Link></li>
                <li><Link href={{
                    pathname: "/[upkind]", query: { upkind: "etc" }
                }}><a>기타</a></Link></li>
                <li><Link href={"/favorite"}><a>관심동물</a></Link></li>
                <li><Link href={"/help"}><a>도움</a></Link></li>
            </ul>
        </nav>
    </header>);
}

export default Navigator;