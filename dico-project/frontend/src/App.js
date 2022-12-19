import './App.css';
import { Route, Routes } from 'react-router-dom';

import RegisterPage from './pages/register';
import LoginPage from './pages/login';
import { Container } from '@mui/system';
import Layout from './layout/layout';
import ChannelsTemplate from './pages/channels/template';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import ErrorPage from './pages/error';
import MePage from './pages/channels/me';
import { AuthContextProvider } from './contexts/AuthContext';

const theme = createTheme({
  palette: {
    mode: "dark"
  },
  typography: {
    fontFamily: `Noto Sans KR, sans-serif;`,
  },
});

function App() {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth={false} disableGutters>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route element={<Layout />} >
              <Route path='/channels/@me' element={<MePage />} />
              <Route path='/channels/:id' element={<ChannelsTemplate />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </AuthContextProvider>

  );
}

export default App;
