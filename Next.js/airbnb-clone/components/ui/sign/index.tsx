import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import styles from "./signup.module.css";
import SignHome from './sign-home';
import SignUp from './sign-up';
import SignIn from './sign-in';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignAuth from './sign-auth';
import { useSession } from 'next-auth/react';

const theme = createTheme({
  palette: {
    primary: {
      main:'#E05F5F',
      light:'#F75CA9',
      dark: '#CF3A3A',
      contrastText: '#000',
    }
  },
});

type props = {open:boolean, setOpen:()=>void}

type SignMode = "SIGNHOME" | "SIGNIN" | "SIGNUP" | "SIGNAUTH";

type SingContextType = {
  onClick: () => void;
  onClose: () => void;
};

export const SignCotext = React.createContext<SingContextType | null>(null);


export default function SignModal({open, setOpen}: props) {
  const [activeMode, setActiveMode] = React.useState<SignMode>("SIGNHOME");
  const [email, setEmail] = React.useState("");
  const {data, status} = useSession();
  React.useEffect(()=>{
    if(!open) {
      setActiveMode("SIGNHOME");
    }
    if(status==="authenticated") {
      setOpen();
    }
  },[open,status])
  const signInHandle = (user: string, type: boolean) => {
    setEmail(user);
    if (type) {
      setActiveMode("SIGNIN");
    } else {
      setActiveMode("SIGNUP");
    }
  };
  const backHandle = () => {
    // console.log("back!!")
    if (activeMode !== "SIGNHOME") {
      setActiveMode("SIGNHOME");
    }
  };
  function getModeContent(mode: string) {
    switch (mode) {
      case "SIGNHOME":
        return <SignHome onSubmit={signInHandle} />;
      case "SIGNUP":
        return <SignUp defaultEmail={email}/>;
      case "SIGNIN":
        return <SignIn loginEmail={email}/>;
      case "SIGNAUTH":
        return <SignAuth defaultEmail={email}/>;
      default:
        throw new Error('Unknown error');
    }
  } 


  return (
    <ThemeProvider theme={theme}>
      <Modal
        open={open}
        onClose={setOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <Box className={styles.signBox}>
            <Container component="main" maxWidth="sm">
              <Paper variant="outlined" sx={{  border:0 }}>                
                  <React.Fragment>
                  <SignCotext.Provider
                    value={{ onClick: backHandle, onClose: setOpen}}
                  >
                    {getModeContent(activeMode)}                    
                  </SignCotext.Provider>
                  </React.Fragment>
              </Paper>
            </Container>
          </Box>
        </div>
      </Modal>
    </ThemeProvider>
  );
}