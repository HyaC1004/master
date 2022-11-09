import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


export default function Home() {
  return (
      <Container sx={{ py: 2 }} maxWidth="lg">
        <Grid container spacing={3}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={3}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height:"200px"
                  }}
                  image="https://source.unsplash.com/random"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    숙소이름
                  </Typography>
                  <Typography>
                    숙소 설명
                  </Typography>
                  <p>$99 / night</p>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
  );
}

Home.isInLayout = true;