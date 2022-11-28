import { GetServerSideProps } from "next";
import Hosting, { HostingData } from "../../../lib/models/hosting";
import { Box, tablePaginationClasses } from "@mui/material";

import Head from "next/head";
import StayHedaer from "../../../components/checkout/stayHeader";
import StayMain from "../../../components/checkout/stayMain";
import mongooseInit from "../../../lib/mongooseInit";

export type BookData = {
  productId?: string;
  checkin?: Date | null;
  checkout?: Date | null;
  numberOfGuests?: number;
  numberOfAdults?: number;
  numberOfChildren?: number;
};

function StayCheckout({
  hosting,
  booking,
}: {
  hosting: HostingData;
  booking: any;
}) {
  return (
    <Box >
      <Head>
        <title>확인 및 결제</title>
      </Head>

      <Box
        sx={{
          position: "relative",
          maxWidth: "1120px",
          margin: "auto",
          pb: 10,
        }}
      >
        <StayHedaer />
        <StayMain hosting={hosting} booking={booking} />
      </Box>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  await mongooseInit();
  const { id } = ctx.query;

  const data = await Hosting.findById(id);
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      hosting: JSON.parse(JSON.stringify(data)),
      booking: ctx.query,
    },
  };
};

export default StayCheckout;

StayCheckout.isDetail = true;
StayCheckout.isRaw = true;