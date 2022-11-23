import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Slider, ToggleButton } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Property, { PropertyData } from "../../../lib/models/property";
import Hosting from "../../../lib/models/hosting";
import HostingToggleButton from "../../../components/hosting/hostingToggleButton";
import HostingProgress from "../../../components/hosting/hostingProgress";
import HostingNavigator from "../../../components/hosting/hostingNavigator";
import mongooseInit from "../../../lib/mongooseInit";

export default function PropertyTypePage(props: { groupItem: PropertyData }) {
  console.log(props);
  const router = useRouter();
  const [value, setValue] = React.useState<string>("");

  const nextStepHandle = async () => {
    const { itemId } = router.query;
    const response = await fetch(
      "/api/hosting/updateStepData?opertion=addProperty",
      {
        method: "POST",
        body: JSON.stringify({ property: value, _id: itemId }),
        headers: { "Content-type": "application/json" },
      }
    );
    const json = await response.json();

    if (response.status === 200) {
      router.push("/become-a-host/" + json?.data._id + "/privacy-type");
    } else {
    }
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        md={6}
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#1f385c",
          p: 7,
        }}
      >
        <Typography component="h1" variant="h3" color={"white"}>
          다음 중 숙소를 가장 잘 설명하는 문구는 무엇인가요?
        </Typography>
      </Grid>
      <Grid item md={6} sx={{width:"100%"}}>
        <Box sx={{ height: "100vh", position: "relative" }}>
          <HostingProgress value={20} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pt: 5,
              gap: 4,
              overflowY: "scroll",
              height: "100vh",
              pb: 10,
            }}
          >
            {props.groupItem.types.map((item) => (
              <HostingToggleButton
                key={item.property}
                onClick={(nValue) => setValue(nValue)}
                value={item.property}
                compare={value}
                description={item.description}
              />
            ))}
          </Box>
          <HostingNavigator
            disabled={value === ""}
            onNextClick={nextStepHandle}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  mongooseInit();
  const itemId = context.query.itemId as string;
  const hosting = await Hosting.findById(itemId);
  if (!hosting) {
    return {
      notFound: true,
    };
  }
  console.log(hosting?.propertyGroup);
  const groupItems = await Property.findOne({ group: hosting?.propertyGroup });
  console.log(
    "property-type serverSideprops ",
    typeof JSON.parse(JSON.stringify(groupItems))
  );
  return {
    props: {
      groupItem: JSON.parse(JSON.stringify(groupItems)),
    },
  };
};

PropertyTypePage.isRaw = true;
