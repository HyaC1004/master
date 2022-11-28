import { Box, Typography, Grid, Divider } from "@mui/material";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import WifiIcon from '@mui/icons-material/Wifi';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import {useEffect,useState,useRef, createContext, useContext} from 'react';
import styles from "./signup.module.css";
import mongooseInit from "../../lib/mongooseInit";
import Hosting from "../../lib/models/hosting";
import DetailRightContents from "../../components/detail/detailRightContents";
import DetailLeftContents from "../../components/detail/detailLeftContents";
import DetailMainContents from "../../components/detail/detailMainContents";
import DetailMainHeader from "../../components/detail/detailMainHeader";
import DetailMainPhotos from "../../components/detail/detailMainPhotos";
import { addDays, format } from "date-fns";
import DetailLocation from "../../components/detail/detailLocation";
import { useSession } from "next-auth/react";
import { BookData } from "../../lib/models/book";

export type Book = {
  productId?: string;
  client?: string | null;
  checkin?: Date | null;
  checkout?: Date | null;
  numberOfGuests?: number;
  numberOfAdults?: number;
  numberOfChildren?: number;
  numberOfBabies?: number;
  numberOfPets?: number;
  fee?: number;
  totalFee?: number;
};
export const BookContext = createContext<{
  data: Book;
  updateData: (frag: Book) => void;
  isOpened: boolean;
  openDialog: () => void;
  closeDialog: () => void;
  open: boolean;
  openGuest: () => void;
  closeGuest: () => void;
} | null>(null);

function HostingDetail({
    hosting
  }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const { data, status }= useSession();
    const [book, setBook] = useState<Book>({
      productId: hosting._id.toString(),
      client: data?.user?.email,
      checkin: addDays(new Date(), 1),
      checkout: addDays(new Date(), 4),
      numberOfGuests: 1,
      numberOfAdults: 1,
      numberOfChildren: 0,
      numberOfBabies: 0,
      numberOfPets: 0,
      fee:hosting.price,
      totalFee: 0
    });
    const updateData = (frag: Book) => {
      setBook((tp) => ({ ...tp, ...frag }));
    };
    const [open, setOpen] = useState(false);
    const openGuest = () => setOpen(true);
    const closeGuest = () => setOpen(false);
    const [isOpened, setOpened] = useState(false);
    const openDialog = () => setOpened(true);
    const closeDialog = () => setOpened(false);

    return (
      <>
      <BookContext.Provider value={{
          data: book,
          updateData: updateData,
          isOpened,
          openDialog,
          closeDialog,
          open,
          openGuest,
          closeGuest
        }}>
        <Box onClick={() => {closeDialog(); closeGuest();}}>
          <Box sx={{position:"relative"}}> 
            <DetailMainHeader hosting={hosting} />
            <DetailMainPhotos hosting={hosting} />
            <DetailMainContents hosting={hosting} />
            <DetailLocation hosting={hosting} />
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
      hosting: JSON.parse(JSON.stringify(data)),
    },
  };
};

export default HostingDetail;

HostingDetail.isDetail = true;
HostingDetail.isRaw = true;