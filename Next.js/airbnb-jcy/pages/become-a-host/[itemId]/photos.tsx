import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Card, CardContent, Slider, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useRouter } from "next/router";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Hosting from "../../../lib/models/hosting";
import HostingNavigator from "../../../components/hosting/hostingNavigator";
import HostingProgress from "../../../components/hosting/hostingProgress";
import EmptyPhotoBox from "../../../components/hosting/photos/emptyPhotoBox";
import PreviewPhotoBox from "../../../components/hosting/photos/previewPhotoBox";

type PhotoContextType = {
    files: File[];
    addFiles: (frag: File[]) => void;
    removeFiles: (t:File) => void;
};
export const PhotoContext = React.createContext<PhotoContextType | null>(null);

export default function Photos() {
  // console.log(props);
    const router = useRouter();
    const [files, setFiles] = React.useState<File[]>([]);
    const addFiles = (frag: File[]) => {
        setFiles((current)=> [...current, ...frag])
    };
    const removeFiles = (t: File) => {
        setFiles((current)=>{
            return current.filter((one)=> one !== t);
        })
    };
    const nextStepHandle = async () => {
      const { itemId } = router.query;
      // console.log("===========",files);
      const formData = new FormData();
      formData.append("itemId", itemId as string);
      formData.append("id", "ssan");

      files.forEach((one) => {
        formData.append("photos", one);
      });
      
      const response = await fetch(
          "/api/hosting/uploadPhotos",
          {
              method: "POST",
              body: formData,
          }
      );

      // alert(response.status);
      const json = await response.json();
      console.log(json);
      if (response.status === 200) {
        router.push("/become-a-host/" + json?.data + "/title");
      } else {
      }
    };

  return (
    <Grid container component="main" sx={{ height: "100vh", overflowY:"scroll" }}>
      <Grid
        item
        md={6}
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#1f385c",
          p: 7,
          width:'100%'
        }}
      >
        <Typography component="h1" variant="h3" color={"white"}>
            장소 사진 추가하기
        </Typography>
      </Grid>
      <Grid item md={6} sx={{width:"100%"}}>
        <Box sx={{ height: "100vh", position: "relative" }}>
          <HostingProgress value={70} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pt: 7,
              gap: 4,
              height: "100vh"
            }}
          >            
            <PhotoContext.Provider
                value={{
                    files: files,
                    addFiles: addFiles,
                    removeFiles: removeFiles
                }}
            >
                {files.length === 0 && <EmptyPhotoBox />}
                {files.length !== 0 && <PreviewPhotoBox />}
            </PhotoContext.Provider>
          </Box>
          <HostingNavigator disabled={files.length>=2?false:true} onNextClick={nextStepHandle} />
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
      hosting: JSON.parse(JSON.stringify(hosting)),
    },
  };
};
Photos.isRaw = true;
