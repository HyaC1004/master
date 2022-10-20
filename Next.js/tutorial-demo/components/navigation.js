import Link from 'next/link'
import styles from './navigator.module.css'

function Navigator() {
    return (<>
    <nav >
      <ul className={styles.petNav}>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/cat"><a>Cat</a></Link></li>
        <li><Link href="/dog"><a>Dog</a></Link></li>
        <li><Link href="/etc"><a>etc</a></Link></li>
        <li><Link href="/help"><a>Help</a></Link></li>
      </ul>
    </nav>
    </>  );
}

export default Navigator;