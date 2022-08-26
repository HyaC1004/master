import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import authApi from "../api/authApi";

function Login() {
    const email = useRef();
    const password = useRef();


    const navigate = useNavigate();
    const handleLogin = (event) =>{
        event.preventDefault();
        authApi
            .login(email.current.value,password.current.value)
            .then(ret =>{
                console.log(ret.result, ret.token);
                return ret.result===true ? navigate("/") : alert("아이디나 비밀번호가 틀렸습니다.");
            })
    }
    return (<>
    <h2>Login</h2>
    <form onSubmit={handleLogin}>
        <div className="form-floating mb-3 mt-3">
            <input type="text" className="form-control" id="floatingInput" placeholder="Enter email" ref={email} required />
            <label htmlFor="floatingInput">Email address</label>
        </div>
        
        <div className="form-floating mt-3 mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Enter password" ref={password} required />
            <label htmlFor="floatingPassword">Password</label>
        </div>
        <button type="submit" className="btn btn-primary " style={{width:"100%"}}>Submit</button>
    </form>
    </>);
}

export default Login;