import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

function HostingItem({hosting}:any) {
    return (
        <Grid item xs={12} sm={6} md={3}>
            <Card
             sx={{ height: '100%', display: 'flex', flexDirection: 'column', cursor:"pointer" }}
             onClick={()=>{alert("미구현")}}
            >
            <CardMedia
                component="img"
                sx={{
                height:"200px"
                }}
                image={hosting.photos[0].extraUrl}
                alt="random"
            />
            <CardContent sx={{ flexGrow: 1, display:"flex", flexDirection:"column", justifyContent:"space-between" }}>
                <Typography gutterBottom variant="h5" component="h2">
                    {hosting.title}
                </Typography>
                <Typography>
                    {hosting.description}
                </Typography>
                {
                    hosting.sale?
                    <Box sx={{display:"flex"}}>
                      <Typography variant="subtitle2" sx={{textDecoration:"line-through",fontFamily:"sans-serif", color:"#aaa", mr:1}}>₩{hosting.price}</Typography>
                      <Typography variant="subtitle2" sx={{fontFamily:"sans-serif"}}>₩{(hosting.price)*0.8} /박</Typography>
                    </Box> : 
                    <Typography variant="subtitle2">₩{hosting.price} 박</Typography>
                }
            </CardContent>
            </Card>
        </Grid>
    );
}

export default HostingItem;