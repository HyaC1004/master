import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import AnimalAlbum from '../components/animal/animal-album'
import { Animal } from '../interface'
import { getLatestAnimalData } from '../services/animal-util'

export default function Home(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const [loaded, setLooaded] = useState(true);

  return (
    <>      
      <AnimalAlbum animals={props.items} />
    </>
  )
}

type Props = {
  items: Animal[];
  total?: number;
}

export const getStaticProps: GetStaticProps<Props> = async(context) => {
  const datas = await getLatestAnimalData();
  // console.log(datas);
  return {
    props: {
      items: datas
    }, // will be passed to the page component as props
    revalidate: 60
  }
}