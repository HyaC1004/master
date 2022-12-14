import './App.css';
import {
  Route,
  Routes,
} from "react-router-dom";
import RegisterPage from './pages/register';
import LoginPage from './pages/login';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, CssBaseline } from '@mui/material';
import Layout from './layout/layout';
import MePage from './pages/channels/mepage';
import ChannelsTemplate from './pages/channels/template';
const theme = createTheme({
  palette:{
    mode:"dark"
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth={false} disableGutters>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route element={<Layout />}>
            <Route path='/chaanels/@me' element={<MePage />} />
            <Route path='/chaanels/:id' element={<ChannelsTemplate />} />
          </Route>
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
