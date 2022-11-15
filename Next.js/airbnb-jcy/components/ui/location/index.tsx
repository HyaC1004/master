import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Button, Container, Modal, Typography, Divider, Grid, TextField } from '@mui/material';
import { useSession } from 'next-auth/react';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

type props = {open:boolean, setOpen:()=>void}




export default function LocationModal({open, setOpen}: props) {
  React.useEffect(()=>{
    
  },[])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
   
  };

  const backHandle = () => {
    // console.log("back!!")
  };


  return (
    <Modal
        open={open}
        onClose={setOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >        
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
            >
                <ArrowBackIosNewIcon
                    fontSize="small"
                    sx={{ position: "absolute", right: 24, top:24, cursor:"pointer" }}
                    onClick={backHandle}
                />
                <Typography component="h2" variant="inherit">
                    주소 확인
                </Typography>
                <Divider style={{width:'100%'}}/>              
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="주/도"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="lastName"
                                required
                                fullWidth
                                id="lastName"
                                label="도시"
                            />
                        </Grid>  
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="lastName"
                                required
                                fullWidth
                                id="lastName"
                                label="도로명"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="lastName"
                                fullWidth
                                id="lastName"
                                label="아파트 이름, 동호수 등(선택사항)"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="lastName"
                                required
                                fullWidth
                                id="lastName"
                                label="우편번호"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="lastName"
                                required
                                fullWidth
                                id="lastName"
                                label="국가/지역"
                            />
                        </Grid>                      
                    </Grid>
                    <Divider />
                        <Typography component="h2" variant="inherit">
                            구체적인 위치 표시하기
                        </Typography>
                        <Typography>
                            게스트에게 숙소 위치를 더욱 구체적으로 알려주실 수 있습니다. 
                            숙소 주소는 예약이 확정된 후에만 공개됩니다.
                        </Typography>
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
                        확인
                    </Button>            
                </Box>
            </Box>
        </Container>          
    </Modal>
  );
}