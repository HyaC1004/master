import React from "react";
import ReactDOM  from "react-dom/client";
import BlackSmith from "./components/blacksmith";
import Box from "./components/box/box";
import Buttonss from "./components/buttonss";
import Card from "./components/card/card";
import Counter from "./components/counter";
//import Exchange from "./components/exchange";
import Exchanger from "./components/exchanger";
import SearchBar from "./components/searchbar";
import "./exchange.css";
const root = ReactDOM.createRoot(document.querySelector("#root"));

//kr, us, jp, cn
//root.render(<Exchanger />);
// root.render(<>
//     <Counter />
//     <Buttonss />
// </>);
// root.render(<BlackSmith />);
//root.render(<SearchBar />);
root.render(<>
    <Card />
    <Box />
</>)