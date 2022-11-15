import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

export default function RoomItemPreview() {
  return (
    <Grid xs={6} sm={3} md={2}>
      <Card>
        <CardMedia
          component="img"
          image="https://source.unsplash.com/random"
          alt="random"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
            Heading
          </Typography>
          <Typography variant="caption">
            This is a media card. You can use this section to describe the
            content.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
