import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { FormControl, TextField, OutlinedInput, InputAdornment, FormHelperText } from "@mui/material";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import Hosting from "../../../lib/models/hosting";
import HostingNavigator from "../../../components/hosting/hostingNavigator";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import HostingProgress from "../../../components/hosting/hostingProgress";

export default function Title(props: { privacies: string[] }) {
  // console.log(props);
    const router = useRouter();
    const [value, setValue] = React.useState<string>("");
    const [title, setTitle] = React.useState<string>("");

    const handleTitle = (evt:any) => {
        setTitle(evt.target.value);
    }
 
    const nextStepHandle = async () => {
        const { itemId } = router.query;
        const response = await fetch(
        "/api/hosting/updateStepData?opertion=addTitle",
        {
            method: "POST",
            body: JSON.stringify({ title:title, _id: itemId }),
            headers: { "Content-type": "application/json" },
        }
        );
        const json = await response.json();

        if (response.status === 200) {
        router.push("/become-a-host/" + json?.data._id + "/description");
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
        이제 place에 이름을 지⁠어⁠주⁠세⁠요
        </Typography>
      </Grid>
      <Grid item md={6} sx={{width:"100%"}}>
        <Box sx={{ height: "100vh", position: "relative" }}>
          <HostingProgress value={75} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pt: 15,
              gap: 4,
              height: "100vh",
              pb: 10,
            }}
          >
            <Typography variant="h6" sx={{paddingX:4}}>
                숙소 이름은 짧을수록 효과적입니다. 나중에 언제든지 변경할 수 있으니, 너무 걱정하지 마세요.
            </Typography>
            <Box
                sx={{
                    width:"80%",
                    height:"400px",
                    textAlign:"center",
                }}
            >
                <FormControl sx={{ m: 1, width: '100%',maxHeight:"400px" }} variant="outlined">
                    <TextField 
                        sx={{fontSize:"2rem"}}
                        aria-describedby="helper-text"
                        onChange={handleTitle}
                        color="secondary"
                        multiline                                                
                        rows={5}
                    />
                    <FormHelperText id="helper-text">{title.length}/32</FormHelperText>
                </FormControl>
            </Box>  
            
          </Box>
          <HostingNavigator disabled={false} onNextClick={nextStepHandle} />
        </Box>
      </Grid>
    </Grid>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const itemId = context.query.itemId as string;
  const hosting = await Hosting.findById(itemId);
  if (!hosting) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      privacies: ["게스트", "침대", "침실", "욕실"],
    },
  };
};

Title.isRaw = true;
