import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Register({accountAPI, setLogon}) {
    const email = useRef();
    const password = useRef();
    const username = useRef();
    const gender = useRef();    
    const birth = useRef();
    const [error, setError] = useState(false);

    const navigate = useNavigate();
    const checkEmail = (email)=>{
        const emailRegExp = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
        if(!emailRegExp.test(email)){
            alert("이메일 형식이 올바르지 않습니다.");
            email.current.value= "";
            return false;
        }
        return true;
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        accountAPI.register(email.current.value,password.current.value,username.current.value,gender.current.value,birth.current.value)
            .then(recv =>{
                console.log(recv);
                if(recv.result){
                    setLogon(recv.message.email);
                    localStorage.setItem("token", recv.token);
                    console.log(localStorage.token); 
                    navigate("/");
                    setError(false);
                }else{
                    setError(true);
                }
                
            })
    }


    return (   <>
    <h2>Register</h2>
    <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3 mt-3">
            <input type="text" className="form-control" id="floatingInput" placeholder="Enter email" ref={email} required />
            <label htmlFor="floatingInput">Email address</label>
        </div>        
        <div className="form-floating mt-3 mb-3">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Enter password" ref={password} required />
            <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating mt-3 mb-3">
            <input type="text" className="form-control" id="floatingName" placeholder="Enter username" ref={username}  required />
            <label htmlFor="floatingName">Name</label>
        </div>
        <div className="form-floating mt-3 mb-3">
            <select className="form-select" id="floatingSelect" ref={gender} aria-label="Floating label select example">
                <option value="male" defaultValue>남성</option>
                <option value="female">여성</option>
            </select>
            <label htmlFor="floatingSelect">성별</label>
        </div>
        <div className="form-floating mt-3 mb-3">
            <input type="date" className="form-control" id="floatingBirth" required ref={birth} />
            <label htmlFor="floatingBirth">Birth</label>
        </div>
        <button type="submit" className="btn btn-dark " style={{width:"100%"}}>Submit</button>
    </form>
    </>);
}

export default Register;