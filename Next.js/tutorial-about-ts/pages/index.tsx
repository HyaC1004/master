import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import AnimalAlbum from '../components/animalAlbum';
import Animal from '../interfaces/animal';
import styles from '../styles/Home.module.css'

export default function Home(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <div className={styles.container}>
      <h1>WELCOME NEXT.JS - typescript</h1>
      <ul>
        {/* {props.items.map((e) => (
          <li key={e.id}>{e.kind}</li>
        ))} */}
        <AnimalAlbum items={props.items} />
      </ul>
    </div>
  )
}

type Props = {
  items: Animal[];
  total?: number;
}

export const getStaticProps: GetStaticProps<Props> = async(context) => {

  return {
    props: {
      items: [{id: "143243242", kind: "고양이"},{id: "143244242", kind: "강아지"}],
    },
    revalidate : 60
  }
}
