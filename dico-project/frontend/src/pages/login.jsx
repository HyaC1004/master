import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

function LoginPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h4">
          돌아오신 것을 환영해요!
        </Typography>
        <Typography component="h1" variant="h6">
          다시 만나다니 너무 반가워요!
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Typography variant='caption'>이메일 또는 전화번호<span style={{color:"red"}}>*</span></Typography>
          <TextField
            required
            fullWidth
            id="email"
            name="email"
            autoComplete="email"
            sx={{mb:2}}
          />
          <Typography variant='caption'>비밀번호<span style={{color:"red"}}>*</span></Typography>
          <TextField
            required
            fullWidth
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Link href="#" variant="body2" sx={{textDecoration:'none'}}>
            비밀번호를 잊으셨나요?
          </Link>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Link href="#" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Box>
      </Box>
    </Container>
  </ThemeProvider>
  );
}

export default LoginPage;