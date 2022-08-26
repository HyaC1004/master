
import { Link } from "react-router-dom";


function Nav(props) {
    const {logon, setLogon} = props;

    const logoutHandle = () => {
        localStorage.removeItem("token");
        setLogon(null);
    }
    return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark ">
        <div className="container-fluid ">      
            <Link to="/" className="navbar-brand" >가계부</Link>
            { logon && <span className="navbar-text"># {logon }님</span> }
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">            
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link to="/" className="nav-link" >소비습관</Link>
                    </li>
                    <li>
                    <Link to="/history" className="nav-link" >소비내역</Link>
                    </li>
                </ul>
                {logon?
                <button className="btn btn-secondary" onClick={logoutHandle}>Logout</button>:
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="nav-link">Register</Link>
                    </li>
                </ul>
                }
            </div>
        </div>
    </nav>  
    );
}

export default Nav;