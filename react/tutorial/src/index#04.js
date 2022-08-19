import React from "react";
import ReactDOM from "react-dom/client";

import PersonCard from "./components/personCard";
import NameCard from "./components/nameCard";

const root = ReactDOM.createRoot(document.querySelector("#root"));
const user = {
    name : "윤형호",
    hp : "010-4614-8225",
    email : "kr.edupoll@gmail.com",
    grade : 10
};

root.render( <>
    <PersonCard data={user } />
    <NameCard data={user  } />
</>);









