import { Box, Typography, Grid, Divider } from "@mui/material";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import WifiIcon from '@mui/icons-material/Wifi';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import {useEffect,useState,useRef, createContext} from 'react';
import styles from "./signup.module.css";
import mongooseInit from "../../lib/mongooseInit";
import Hosting from "../../lib/models/hosting";
import DetailRightContents from "../../components/detail/detailRightContents";
import DetailLeftContents from "../../components/detail/detailLeftContents";
import DetailMainContents from "../../components/detail/detailMainContents";
import DetailMainHeader from "../../components/detail/detailMainHeader";
import DetailMainPhotos from "../../components/detail/detailMainPhotos";
import { addDays, format } from "date-fns";

export type Book = {
  productId?: string;
  checkin?: string;
  checkout?: string;
  numberOfGuests?: number;
  numberOfAdults?: number;
  numberOfChildren?: number;
}
export const BookContext = createContext<{
  data: Book;
  updateData: Function;
} | null>(null)

function HostingDetail({
    data
  }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [book, setBook] = useState<Book>({
      productId: data._id.toString(),
      checkin: format(new Date(), "yyyy-MM-dd"),
      checkout: format(addDays(new Date(), 1), "yyyy-MM-dd"),
      numberOfGuests: 2,
      numberOfAdults: 2,
      numberOfChildren: 0,
    });

    const updateData = (frag: Book) => {
      setBook((tp) => ({ ...tp, ...frag }));
    };
    return (
      <>
      <BookContext.Provider value={{ data: book, updateData: updateData }}>
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
      </BookContext.Provider>
      </>
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