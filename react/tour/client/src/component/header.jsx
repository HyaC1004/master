import { useRef } from "react";

function Header() {
    const searchData = useRef();
    const searchHandle = ()=>{

    }
    return ( <nav className="navbar navbar-expand-lg mb-3 sticky-top">
        <div className="container-fluid">
            <a className="navbar-brand " >광주 명소</a>
            <input className="d-flex form-control me-2 search" type="search" 
                onChange={searchHandle} placeholder="검색해보실" ref={searchData}/>
        </div>
    </nav> );
}

export default Header;