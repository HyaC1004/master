import {useNavigate} from "react-router-dom";
function Index() {


    const navigate = useNavigate();
    const moveLogin = (evt) =>{
        //evt.preventDefault();
        navigate("/login");
    }


    return (        
    <div className="card mt-5" >        
        <div className="card-body">
        <h4 className="card-title">John Doe</h4>
        <p className="card-text">Some example text.</p>
        <b onClick={moveLogin} className="btn btn-primary">See Profile</b>
        </div>
    </div>
    );
}

export default Index;