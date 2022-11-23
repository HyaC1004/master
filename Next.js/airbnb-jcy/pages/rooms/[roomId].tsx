import { Box, Typography, Grid, Divider } from "@mui/material";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import WifiIcon from '@mui/icons-material/Wifi';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import {useEffect,useState,useRef} from 'react';
import styles from "./signup.module.css";
import mongooseInit from "../../lib/mongooseInit";
import Hosting from "../../lib/models/hosting";
import DetailRightContents from "../../components/detail/detailRightContents";
import DetailLeftContents from "../../components/detail/detailLeftContents";
import DetailMainContents from "../../components/detail/detailMainContents";
import DetailMainHeader from "../../components/detail/detailMainHeader";
import DetailMainPhotos from "../../components/detail/detailMainPhotos";

const imgArr = [0,1,2,3]


function HostingDetail({
    data
  }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    // console.log(hosting)
    // console.log(hosting.facilities);
    return (
      <Box sx={{position:"relative"}}> 
        <DetailMainHeader data={data} />
        <DetailMainPhotos data={data} />
        <DetailMainContents data={data} />
          <Divider sx={{width:"100%", mt:2, mb:2}} />
          <Box></Box>
          <Divider sx={{width:"100%", mt:2, mb:2}} />
          <Box></Box>
          <Divider sx={{width:"100%", mt:2, mb:2}} />
          <Box></Box>
          <Divider sx={{width:"100%", mt:2, mb:2}} />
          <Box></Box>
          <Divider sx={{width:"100%", mt:2, mb:2}} />
      </Box>
    );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  mongooseInit();
  const itemId = context.query.roomId as string;
  const data = await Hosting.findById(itemId);
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
};

export default HostingDetail;

HostingDetail.isDetail = true;
HostingDetail.isRaw = true;