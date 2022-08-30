import './App.css';

import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';

import Nav from './component/nav';
import Welcome from './component/welcome';
import Login from './component/login';
import Register from './component/register';
import Write from './component/write';
import History from './component/history';

import AccountAPI from './service/accountAPI';
import HistoryAPI from './service/historyAPI';

// const accountAPI = new AccountAPI("http://192.168.4.69:8080");
// const historyAPI = new HistoryAPI("http://192.168.4.69:8080");

const accountAPI = new AccountAPI("http://15.165.15.168:8080");
const historyAPI = new HistoryAPI("http://15.165.15.168:8080");

function App() {
  
  const[logon,setLogon] = useState(false);
  //console.log(logon)
  useEffect(()=>{
    if(localStorage.getItem("token")){
      accountAPI.valid(localStorage.getItem("token"))
        .then(recv=>{
          if(recv.result){
            setLogon(recv.owner)
          }
        })
    }
  },[])

  return (
    <div className="container">      
      <BrowserRouter>
        <Nav logon={logon} setLogon={setLogon}/>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/write" element={<Write />} />
          <Route path="/history" element={<History historyAPI={historyAPI} logon={logon}/>} />
          <Route path='/login' element={<Login accountAPI={accountAPI} logon={logon} setLogon={setLogon}/>}/>
          <Route path='/register' element={<Register accountAPI={accountAPI} setLogon={setLogon}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
