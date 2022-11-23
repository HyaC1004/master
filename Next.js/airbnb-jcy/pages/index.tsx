import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useSession } from "next-auth/react";
import { GetServerSideProps, GetStaticProps, InferGetStaticPropsType } from 'next';
import Hosting, { HostingData } from '../lib/models/hosting';
import HostingItem from '../components/home/hostingItem';
import mongooseInit from '../lib/mongooseInit';
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


export default function Home({
  hosting,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data, status } = useSession();
  // console.log(hosting);
  return (         
    <Grid container spacing={2} sx={{mt:10}}>
      {hosting.map((one:HostingData) => (
        <HostingItem hosting={one} key={one._id} />
      ))}
    </Grid>
  );
}
export const getStaticProps: GetStaticProps = async (context) => {
  mongooseInit();
  const hosting = await Hosting.find();
  if (!hosting) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      hosting: JSON.parse(JSON.stringify(hosting)),
    },
  };
};

Home.isRaw = false;