import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import Property, { PropertyData } from "../../../lib/models/property";
import PropertyButton from "../../../components/hosting/propertyButton";
import Hosting from "../../../lib/models/hosting";

export default function PropertyType(props: {
  groupItems:any;
}) {
    const router = useRouter();
    const [value, setValue] = React.useState<string>(""); 
    // console.log("props", props.groupItems.types);
    // console.log("쿼리",router.query);
    const nextStepHandle = () => {
      const { itemId } = router.query;
      fetch("/api/hosting", {
        method: "post",
        body: JSON.stringify({property: value, _id: itemId}),
        headers: {
            "Content-type": "application/json"
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.result === true) {
          router.push("/become-a-host/" + data?.data._id + "/privacy-type");
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
      <Grid item md={6} sx={{display:"flex", flexDirection: "column"}}>
        <Box
          sx={{
            my: 2,
            mx: 4,
            display:"flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >          
            <Button>나가기</Button>          
        </Box>
        <Box
            sx={{
                mx: 4,
                display:"flex",
                flexGrow:1,
                flexDirection: "column",
                alignItems: "center",
                justifyContent:"center"
            }}       
        >         
          {props.groupItems.types.map((one:any) => (
              <PropertyButton
                onClick={(nValue) => setValue(nValue)}
                value={one.property}
                description = {one.description}
                compare={value}
                key={one.property}
              />
          ))}
            
          </Box>
            <Box
                sx={{
                    my: 2,
                    mx: 4,
                    display:"flex",
                    flexDirection: "row",
                    justifyContent: 'space-between'
                }}
            >          
                <Button onClick={()=>router.back()}>뒤로</Button>
                <Button onClick={nextStepHandle}>다음</Button>          
            </Box>  
                    
      </Grid>
    </Grid>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const itemId = context.query.itemId as string;
  const hosting = await Hosting.findOne({itemId:itemId});
  if (!hosting) {
    return {
      notFound: true,
    };
  }
  const groupItems = await Property.findOne({ group: hosting?.group });
  return {
    props: {
      groupItems: JSON.parse(JSON.stringify(groupItems)),
    },
  };
};