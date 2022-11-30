import { GetServerSideProps } from "next";
import Hosting, { HostingData } from "../../../lib/models/hosting";
import { Box, Grid, Typography } from "@mui/material";

import Head from "next/head";
import Book, { BookData } from "../../../lib/models/book";
import BookingPreview from "../../../components/book/bookingPreview";
import mongooseInit from "../../../lib/mongooseInit";


function BookResult({ data }: { data: BookData & HostingData }) {
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
          <Typography variant="h4">예약이 확정되었습니다.</Typography>
          <BookingPreview data={data} />
        </Box>
      </Box>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  await mongooseInit();
  const { id } = ctx.query;

  const one = await Book.findById(id).lean();
  if (!one) {
    return {
      notFound: true,
    };
  }
  const other = await Hosting.findById(one.productId).lean();
  // console.log(JSON.stringify({ ...one, ...other }));
  return {
    props: {
      data: JSON.parse(JSON.stringify({ ...one, ...other })),
    },
  };
};

export default BookResult;
BookResult.isDetail = true;
BookResult.isRaw = true;