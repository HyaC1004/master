import './app.css';
import { Fragment, useEffect, useReducer } from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from './component/header';
import Content from './component/content';
import Detail from './component/detail';
import Error from './component/error';

import { TourAPI } from "./service/tourAPI";

const tourAPI = new TourAPI();

const reducer = function(state, action) {

switch(action.type) {
  case "setDatas" : 
    return {...state, datas : action.datas};
  }
 return state;
}

function App() {
  const [state, dispatch ] = useReducer(reducer, {version : 1.0, datas : [] } );
 
  useEffect(()=>{
    tourAPI.getInfos().then(recv=>{
      dispatch({type : "setDatas", datas : recv.TourDestBaseInfo });
    });
  },[]);

  return (
    <Fragment>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content datas={ state.datas  } />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>

    </Fragment>
  );
}

export default App;
