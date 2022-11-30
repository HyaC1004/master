import { GetServerSideProps } from "next";
import Hosting, { HostingData } from "../../../lib/models/hosting";
import { Box, Grid, Typography } from "@mui/material";

import Head from "next/head";
import Book, { BookData } from "../../../lib/models/book";

import mongooseInit from "../../../lib/mongooseInit";
import { getToken } from "next-auth/jwt";
import BookingListItem from "../../../components/book/bookingListItem";


function BookList({ data }:any) {
  // console.log("data==========================");
  // console.log(data);
  return (
    <>
      <Head>
        <title>예약 목록</title>
      </Head>
      <Box
        sx={{
          position: "relative",
          maxWidth: "1120px",
          margin: "auto",
          pb: 10,
          mt: 0,
        }}
      >
        <Box>
          <Typography variant="h4">예약 목록</Typography>          
          {data.map((one:any)=>(
            new Date() <= new Date(one.checkin) ?
            <BookingListItem key={one._id} data={one} /> :
            <></>            
          ))}
        </Box>
      </Box>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  await mongooseInit();
  const rst = await getToken(ctx);
  // const one = await Book.findOne().populate({
  //   path:'product',
  //   options: {strictPopulate: false}
  // }).lean();
  const datas = await Book.find({client:rst?.email});
  // console.log("----",one);
  // let dataArr:any = [];
  // datas.map((one)=>{
  //   dataArr.push(one.populate("product"));
  // })
  // console.log("----",dataArr);
  // console.log("data==========================");
  // console.log(data);
  return {
    props: { 
      data: JSON.parse(JSON.stringify(datas))
    },
  };
};

export default BookList;
BookList.isDetail = true;
BookList.isRaw = true;