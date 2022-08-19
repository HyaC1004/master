import React from "react";
import ReactDOM from "react-dom/client";
import { Component } from "react";
// const { Compoent } = React
const root = ReactDOM.createRoot(document.querySelector("#root"));
/*
    class 를 이용해서 리액트 컴포넌트 설계하기

    class 방식으로 설계했을때의 properties 는 이 클래스의 props 변수에 할당이 된다.
*/

console.log(  256455 .toString(16) );

class News extends React.Component {
    render() {
        console.log("render => ", this.props );
        return (
            <div>
                <h3>아무개</h3>
                <p>
                    리액트 컴포넌트는 function 기반 / class 기반 으로 설계 가능하다. 
                </p>
            </div>
        );
    }
}

root.render( <News id={ Date.now().toString(16) } /> );






