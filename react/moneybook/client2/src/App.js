import './App.css';

import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import Header from './component/header';
import Footer from './component/footer';
import Index from './component/index';
import Login from './component/login';
import { useEffect } from 'react';

function App() {
  
  useEffect(()=>{
  },[]);

  

  return (
    <div className="container">      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path='/login' element={<Login />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
