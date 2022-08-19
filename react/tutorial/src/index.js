import React from "react";
import ReactDOM  from "react-dom/client";
//import Exchange from "./components/exchange";
import Exchanger from "./components/exchanger";
import "./exchange.css";
const root = ReactDOM.createRoot(document.querySelector("#root"));

//kr, us, jp, cn
root.render(<Exchanger />);