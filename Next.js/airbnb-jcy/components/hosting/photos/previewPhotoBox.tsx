import { Box, Typography, Button, Grid } from "@mui/material";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import * as React from "react";
import { PhotoContext } from "../../../pages/become-a-host/[itemId]/photos";
import PhotoItem from "./photoItem";
import EmptyPhotoItem from "./emptyPhotoItem";

function PreviewPhotoBox() {
    const ctx = React.useContext(PhotoContext);
    console.log(ctx?.files)
    return (
        <Box sx={{paddingX:4, width:"100%", height:"85vh", overflowY:"scroll"}}>
            <Typography variant="h6" >
                5장 이상의 사진을 선택하세요.
            </Typography>
            <Box sx={{height:"400px", mb:3}} >
                <PhotoItem target={ctx!.files[0]} />
            </Box>
            <Grid container spacing={3}>
                {ctx?.files.map((file)=>(
                    ctx?.files[0]===file ? <></>:
                    <Grid key={file.name} item xs={12} sm={6} md={6} sx={{height:"250px"}}>
                        <PhotoItem target={file}  />
                    </Grid>
                ))}
                <Grid item xs={12} sm={6} md={6} sx={{height:"250px"}}>
                    <EmptyPhotoItem />
                </Grid>
                <Grid item xs={12} sm={6} md={6} sx={{height:"250px"}}>
                    <EmptyPhotoItem />
                </Grid>
            </Grid>
        </Box>
    );
}

export default PreviewPhotoBox;
