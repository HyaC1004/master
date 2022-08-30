
import { Link, useNavigate } from "react-router-dom";


function Nav(props) {
    const {logon, setLogon} = props;
    const navigate = useNavigate();

    const logoutHandle = () => {
        localStorage.removeItem("token");
        setLogon(null);
        navigate("/");
    }
    return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
        <div className="container-fluid ">      
            <Link to="/" className="navbar-brand" >적어!</Link>
            { logon && <span className="navbar-text"># {logon }님</span> }
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">            
                {logon?
                <ul className="navbar-nav">
                    <li>
                    <Link to="/history" className="nav-link" >소비내역</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/report">REPORT</Link>
                    </li>
                </ul>:<ul className="navbar-nav"></ul>}
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