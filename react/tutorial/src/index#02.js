import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector("#root"));

/*
    React의 가장 큰 특징은 사용자 정의 컴포넌트를 만들수 있다는 것.
    
    - function 으로 설계: 한번 만들어진 후 변경이 필요없을 때
    - class 로 설계: 컴포넌트 내부적으로 데이터를 관리해야 될때
    
    ※ React 16.8 부터 React에 Hook 이라는게 추가되면서 class 만 할수 있던 것들을
    function 으로 설계해도 가능해짐. (추세는 function 방식으로만 만듬 )

    ※ 사용자 정의 컴포넌트는 
    일반 HTML 컴포넌트와의 구분을 위해서 대문자로 시작하게 만듬.
*/

// 1. function 방식
function DisplayDate(props) {
    console.log(props, props.lang);
    const {lang } = props;      // const lang = props.lang; 
    const today = new Date().toISOString().slice(0, 10);
    switch(lang) {
        case "ko" :
            return (
                <div>
                    오늘은 {today } 입니다. 좋은 하루 보내세요 !!
                </div>
            );
        default : 
            return (
                <div>
                    Today is {today }. Happy Day !!
                </div>
            );
    }
}
const fmt = 100;
const user = {
    name : "윤형호",
    access : true
};
root.render(
    <div>
        <DisplayDate lang="ko" format={fmt } actor={user } />
        <DisplayDate lang="en" format="{fmt }" 
                    actor={ { name : "정상춘", access : false} } />
    </div>
);








