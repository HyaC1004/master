import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from "./signup.module.css";
import {Container, Divider, Grid, TextField } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function SignAuth({open, setOpen}: any) {
  const handleClose = () => setOpen(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h2" variant="inherit">
          이거 동의해야 계정활성화
        </Typography>
        <Divider style={{width:'100%'}}/>              
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>          
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} className={styles.submitButton}>
            동의
          </Button>
          <Button type="button" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} className={styles.submitButton}>
            거절
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
