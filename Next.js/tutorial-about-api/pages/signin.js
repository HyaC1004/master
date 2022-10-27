import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import styles from '../styles/Home.module.css'

export default function SignInPage() {
    const router = useRouter();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error,setError] = useState();
    const {data,status} = useSession();


    const clickHandle = async() => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const result = await signIn("credentials", {
            redirect: false,
            email, password
        });
        console.log(result.ok);
        if(result.ok){
            router.push("/profile")
        }else{
            setError(result.error);
        }
    }

    if (status === "loading") {
        return (<p>데이터 확인중..</p>);
    }
    if (status === "authenticated") {
        return (<p> {data.user.email}님은 이미 로그인 되어있습니다. </p>)
    }

    return (
        <div className={styles.main}>
            <h3>Sign In</h3>
            <div style={{display:"flex",height:"2rem", justifyContent:"center", marginBottom:20}}>
            <input type="email" ref={emailRef} placeholder={"login email"} /></div>
            <div style={{display:"flex",height:"2rem", justifyContent:"center", marginBottom:20}}>
            <input type="password" ref={passwordRef} placeholder={"login password"} /></div>
            <button onClick={clickHandle}>Sign In</button>
            {error && <p style={{color:"red"}}>{error}</p>}
        </div>
    )
}