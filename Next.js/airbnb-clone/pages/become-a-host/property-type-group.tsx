import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Router, useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Property, { PropertyData } from "../../lib/models/property";
import { Slider } from "@mui/material";
import HostingDefaultButton from "../../components/hosting/hostingDefaultButton";

export default function BecomeAHostPTG({
    datas,
  }: InferGetStaticPropsType<typeof getStaticProps>) {
    const router = useRouter();  
    const { data, status } = useSession();
    const [value, setValue] = React.useState<string>(""); 
    const nextStepHandle = () => {
        // 데이터 생성 fetch...===>  생성된 데이터의 ID를 얻어와야 함      
        fetch("/api/hosting", {
            method: "post",
            body: JSON.stringify({group:value}),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            if (data.result === true) {
              router.push("/become-a-host/" + data?.data._id + "/property-type");
            } else {
            }
        });
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
        <Typography component="h1" variant="h4" color={"white"} >
          호스팅할 숙소 유형을 알려주세요
        </Typography>
      </Grid>
      <Grid item md={6} sx={{width:"100%"}}>
        <Box sx={{ height: "100vh", position: "relative" }}>
          <Slider
            disabled
            value={10}
            size="small"
            sx={{ position: "absolute", top: 0 }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pt: 20,
              gap: 4,
            }}
          >
            {datas.map((one) => (
              <HostingDefaultButton
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
            <Button variant="text" onClick={() => router.back()}>
              뒤로
            </Button>
            <Button
              variant="contained"
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
    const datas = await Property.find({});
    console.log(datas);
    return {
      props: {
        datas: JSON.parse(JSON.stringify(datas)),
      },
    };
};