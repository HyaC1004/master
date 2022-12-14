import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {  useNavigate } from 'react-router-dom';


function LoginPage() {
  const navigate = useNavigate();
  const loginHandle = async(event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:8080/auth/login",{
      method:"POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({})
    });
    if(response.status === 20) {
      const json = await response.json()
      console.log(json.token);
      navigate("/channels/@me");
    }
    console.log(response.status);
  };
  return (
    <Container sx={{width:'100%', display:"flex", flexDirection: 'column', alignItems: 'center'}}>
      <Box
        sx={{
          marginTop: 8,
          padding:5,
          display: 'flex',
          width:"60%",
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor:"#2F2A30",
          borderRadius:"1rem"
        }}
      >
        <Typography component="h1" variant="h4">
          돌아오신 것을 환영해요!
        </Typography>
        <Typography component="h1" variant="h6">
          다시 만나다니 너무 반가워요!
        </Typography>
        <Box component="form" onSubmit={loginHandle} noValidate sx={{ mt: 1 }}>
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
            로그인
          </Button>
          <Link href="#" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default LoginPage;