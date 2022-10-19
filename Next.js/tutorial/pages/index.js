import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  const events = ["X2Fcs3yu", "K2fpr4Fe"]
  return (
    <>
    <div className={styles.container}>
      <Link style={{margin:10}} href="/about">
        About
      </Link>
    </div>
    <hr />
    <div>
      {
        events.map((e)=><Link style={{margin:10}} key={e} href={`/event/${e}`}>{e}</Link>)
      }
    </div>
    <div>
      {
        events.map((e)=><Link style={{margin:10}} key={e} href={"/event/"+e}>{e}</Link>)
      }
    </div>
    <div>
      {
        events.map((e)=><Link style={{margin:10}} key={e} href={{
          pathname:"/event/[event_id]",
          query:{event_id:e, role:"guest"}
        }}>{e}</Link>)
      }
    </div>
    <div>
      <Link href={{
        pathname: "/event/hot",
        query: {month:"07"}
      }}><a>TEST</a></Link>
    </div>
    </>
  )
}
