import React from "react";
import ReactDOM from "react-dom";
const root = ReactDOM.createRoot(document.querySelector("#root"));
/*
    리액트의 컴포넌트는 JSX을 이용해서 설정할 수 있다.
*/
function convert(str) {
    return str.split("").join("-");
}
const subject = "React";
const msg = (
    <React.Fragment>
        <h1 className="title">
            Welcome to the { convert(subject) + "!!" }
        </h1>
        <p>

        </p>
    </React.Fragment>
);

root.render(msg);









