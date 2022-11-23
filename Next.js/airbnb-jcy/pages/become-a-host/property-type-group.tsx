import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Slider } from "@mui/material";
import { useRouter } from "next/router";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Property, { PropertyData } from "../../lib/models/property";
import HostingToggleButton from "../../components/hosting/hostingToggleButton";
import HostingProgress from "../../components/hosting/hostingProgress";
import mongooseInit from "../../lib/mongooseInit";

export default function BecomeAHostPropertyTypeGroup({
  datas,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const [value, setValue] = React.useState<string>("");
  const nextStepHandle = async () => {
    const response = await fetch("/api/hosting/updateStepData?opertion=new", {
      method: "POST",
      body: JSON.stringify({ propertyGroup: value }),
      headers: { "Content-type": "application/json" },
    });
    const json = await response.json();

    if (response.status === 200) {
      router.push("/become-a-host/" + json?.data._id + "/property-type");
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
          p: 12,
        }}
      >
        <Typography component="h1" variant="h3" color={"white"}>
          호스팅할 숙소 유형을 알려주세요
        </Typography>
      </Grid>
      <Grid item md={6}>
        <Box sx={{ height: "100vh", position: "relative" }}>
          <HostingProgress value={5} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pt: 5,
              gap: 4,
            }}
          >
            {datas.map((one) => (
              <HostingToggleButton
                onClick={(nValue) => setValue(nValue)}
                value={one.group}
                compare={value}
                image={one.image}
                key={one.group}
              />
            ))}
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              zIndex: 2,
              display: "flex",
              justifyContent: "space-between",
              width: "100% ",
              p: 1.5,
              borderTop: "1px solid #dedede",
            }}
          >
            <Button variant="text" color="info" onClick={() => router.back()}>
              뒤로
            </Button>
            <Button
              variant="contained"
              color="info"
              disabled={value === ""}
              onClick={nextStepHandle}
            >
              다음
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export const getStaticProps: GetStaticProps<{
  datas: PropertyData[];
}> = async () => {
  mongooseInit();
  const datas = await Property.find({});
  // console.log(datas);
  return {
    props: {
      datas: JSON.parse(JSON.stringify(datas)),
    },
  };
};

BecomeAHostPropertyTypeGroup.isRaw = true;
