import { Link } from "react-router-dom";


function Header() {
    return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <div className="container-fluid">
        <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="nav-link active" to={"/"}>Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={"/login"}>Login</Link>
            </li>
        </ul>
        </div>
    </nav>  
    );
}

export default Header;