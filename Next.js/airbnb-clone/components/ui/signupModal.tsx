import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from "./signup.module.css";
import SignUpForm from './signup-form';
import SignUpDetail from './signup-detail';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const steps = ['SignUpForm', 'SignUpDetail'];
type props = {open:boolean, setOpen:()=>void}
const theme = createTheme({
  palette: {
    primary: {
      main:'#E05F5F',
      light:'#F75CA9',
      dark: '#CF3A3A',
      contrastText: '#000',
    }
  },
})


export default function SignUpModal({open, setOpen}: props) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [email, setEmail] = React.useState("");
  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <SignUpForm onClickNext={handleNext} setEmail={setEmail}/>;
      case 1:
        return <SignUpDetail onClickNext={handleNext} defaultEmail={email}/>;
      default:
        throw new Error('Unknown step');
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);   
  };
    
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <Modal
        open={open}
        onClose={setOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <Box className={styles.signUpBox}>
            <Container component="main" maxWidth="sm">
              <Paper variant="outlined" sx={{  border:0 }}>
                {activeStep === steps.length ? (
                  // 회원가입 완료
                  <React.Fragment>
                    <Typography variant="h5" gutterBottom>
                      회원가입 완료
                    </Typography>
                    <Typography variant="subtitle1">
                      여행마렵다 많은 이용 부탁드립니다.
                    </Typography>
                    <Button onClick={handleBack}>뒤로</Button>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {getStepContent(activeStep)}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      {activeStep !== 0 && (
                        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                          Back
                        </Button>
                      )}
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 3, ml: 1 }}
                      >
                        {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                      </Button>
                    </Box>
                  </React.Fragment>
                )}
              </Paper>
            </Container>
          </Box>
        </div>
      </Modal>
    </ThemeProvider>
  );
}