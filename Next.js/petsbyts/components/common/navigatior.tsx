import styles from "./navigator.module.css"
import Link from "next/link";

const Navigator = () => {
    return (<header className={styles.header}>
        <div className={styles.logo}>
            <Link href="/"><img src="/images/logo.png" width={100} height={40} /></Link>
        </div>
        <nav className={styles.navigation}>
            <ul>
                <li><Link href="/cat">고양이</Link></li>
                <li><Link href={"/dog"}>개</Link></li>
                <li><Link href={"/etc"}>기타</Link></li>
                <li><Link href={"/favorite"}>관심동물</Link></li>
                <li><Link href={"/help"}>도움</Link></li>
            </ul>
        </nav>
    </header>);
}

export default Navigator;