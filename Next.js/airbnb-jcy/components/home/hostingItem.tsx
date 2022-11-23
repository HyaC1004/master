import { Box, Button, Card, CardContent, CardMedia, Grid, MobileStepper, Typography, useTheme } from "@mui/material";
import React from "react";
import { HostingData } from "../../lib/models/hosting";
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { formatDistance } from "date-fns";
import { ko } from "date-fns/locale";
import { useRouter } from "next/router";
import { AppContext } from "../../pages/_app";

function HostingItem({hosting}:any) {
    const appCtx = React.useContext(AppContext);
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = hosting.photos.length;
    const theme = useTheme();
    const router = useRouter();
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
        <>
        { hosting.publish && <Grid item xs={12} sm={6} md={3}>
            <Card
             sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
            >
            <Box sx={{height:"200px", position:"relative"}}>
                <CardMedia
                    component="img"
                    sx={{
                    height:"200px"
                    }}
                    image={hosting.photos[activeStep].extraUrl??""}
                    alt="random"
                />
            <MobileStepper
                steps={maxSteps}
                activeStep={activeStep}
                sx={{position:"absolute",height:"2rem", background:"rgb(255,255,255,0.5)", top:"170px", zIndex:99}}
                nextButton={
                <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                >
                    {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                    ) : (
                    <KeyboardArrowRight />
                    )}
                </Button>
                }
                backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                    ) : (
                    <KeyboardArrowLeft />
                    )}
                </Button>
                }
            />    
            </Box>
            <CardContent 
                sx={{ flexGrow: 1, display:"flex", cursor:"pointer",  flexDirection:"column", justifyContent:"space-between" }}
                onClick={()=>{
                    appCtx?.ready();
                    router.push(`/rooms/${hosting._id}`);
                    appCtx?.done();
                }}
            >
                <Typography gutterBottom variant="h5" component="h2">
                    {hosting.title}
                </Typography>
                <Typography>
                    {hosting.receipt && formatDistance(new Date(hosting.receipt), new Date(), {
                        addSuffix: true,
                        locale: ko,
                    })}{" "}
                </Typography>
                {
                    hosting.sale?
                    <Box sx={{display:"flex"}}>
                      <Typography variant="subtitle2" sx={{textDecoration:"line-through",fontFamily:"sans-serif", color:"#aaa", mr:1}}>₩{hosting.price}</Typography>
                      <Typography variant="subtitle2" sx={{fontFamily:"sans-serif"}}>₩{(hosting.price)*0.8} /박</Typography>
                    </Box> : 
                    <Typography variant="subtitle2" sx={{fontFamily:"sans-serif"}}>₩{hosting.price} /박</Typography>
                }
            </CardContent>
            </Card>
        </Grid>}
        </>
    );
}

export default HostingItem;