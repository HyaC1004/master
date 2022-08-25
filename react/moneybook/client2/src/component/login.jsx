import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import authApi from "../api/authApi";

function Login() {
    const email = useRef();
    const password = useRef();


    const navigate = useNavigate();
    const handleSubmit = (event) =>{
        event.preventDefault();
        authApi
            .login(email.current.value,password.current.value)
            .then(ret =>{
                console.log(ret.result);
                return ret.result===true ? navigate("/") : navigate("/login");
            })
    }
    return (   
    <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3 mt-3">
            <input type="text" className="form-control" placeholder="Enter ID" ref={email} />
        </div>
        
        <div className="form-floating mt-3 mb-3">
            <input type="text" className="form-control" placeholder="Enter password" ref={password} />
        </div>
        <button type="submit" className="btn btn-primary " style={{width:"100%"}}>Submit</button>
    </form>
  );
}

export default Login;