import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import Clicker from "./components/clicker";
import RandBox from "./components/randomBox";
import Buttons from "./components/buttons";
import List from "./components/list";
import Contents from "./components/contents";
const root = ReactDOM.createRoot(document.querySelector("#root"));


root.render(<Contents />);