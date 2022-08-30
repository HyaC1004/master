import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({accountAPI, setLogon, logon}) {
    const email = useRef();
    const password = useRef();
    const navigate = useNavigate();
    //const [error, setError] = useState(false);
    useEffect(()=>{

    },[]);

    const handleLogin = (event) =>{
        event.preventDefault();
        accountAPI.auth(email.current.value, password.current.value)
            .then(recv =>{
                //console.log(recv);
                if(recv.result){
                    setLogon(recv.rst.email);
                    localStorage.setItem("token", recv.token);
                    //console.log(localStorage.token); 
                    navigate("/");
                    //setError(false);
                }else{
                    //setError(true);
                }
                
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
        <button type="submit" className="btn btn-dark " style={{width:"100%"}}>Submit</button>
    </form>
    </>);
}

export default Login;