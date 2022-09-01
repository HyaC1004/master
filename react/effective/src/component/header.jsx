import { memo } from "react";

function dayDisplay() {
    const today = new Date();
    const weeks = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'];
    
    const year = today.getFullYear();
    const month = today.getMonth()+1;
    const date = today.getDate();
    console.log("dayDisplay... ")
    return {date:`${year}년 ${month}월 ${date}일`, day:weeks[today.getDay()]};
}

const Header = memo(function () {
    const txt = dayDisplay();
    return ( <div>
        <h1>{txt.date}</h1>
        <h3 style={{color:"gray"}}>{txt.day}</h3>
    </div> );
})

export default Header;