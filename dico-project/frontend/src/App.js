import './App.css';
import {
  Route,
  Routes,
} from "react-router-dom";
import RegisterPage from './pages/register';
import LoginPage from './pages/login';


function App() {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
