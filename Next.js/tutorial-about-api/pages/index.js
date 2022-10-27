import Head from 'next/head'
import Image from 'next/image'
import { useRef } from 'react'
import styles from '../styles/Home.module.css'

export async function getStaticProps(ctx) {
  console.log("      -",process.env.MONGO_URI);
  return {
    props: {}
  }
}

export default function Home() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const ageRef = useRef();

  const submitHandle = async (evt) => {
    evt.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const age = ageRef.current.value;

    const response = await fetch("/api/user", {
      method: "post",
      body: JSON.stringify({ email: email, password:password, age: age }),
      headers: {
        "Content-type": "application/json"
      }
    });
    const data = await response.json();
    evt.target.reset();
    console.log(data);
  }

  return (
    <div className={styles.main}>
      <h1>Hello, NEXT.js WORLD</h1>
      <form onSubmit={submitHandle}>
        <p>
          정기 알림/뉴스레터를 받고자 한다면 이메일 주소를 등록해주세요.
        </p>
        <div style={{display:"flex",height:"2rem", justifyContent:"center", marginBottom:20}}>
          <p style={{ width: "20%", lineHeight:"0rem"}}>이메일: </p>
          <input type="email" style={{ width: "70%", padding: "0.5rem" }} ref={emailRef} />
        </div>
        <div style={{display:"flex",height:"2rem",justifyContent:"center", marginBottom:20}}>
         <p style={{ width: "20%", lineHeight:"0rem"}}>비밀번호: </p>
          <input type="password" style={{ width: "70%", padding: "0.5rem" }} ref={passwordRef} />
        </div>
        <div style={{display:"flex",height:"2rem",justifyContent:"center", marginBottom:20}}>
          <p style={{ width: "20%", lineHeight:"0rem"}}>나이: </p>
         <input type="Number" style={{ width: "70%", padding: "0.5rem" }} ref={ageRef} /> 
        </div>
        <div style={{textAlign:"center"}}>   
         <button type='submit' style={{width:"30%", padding:"0.5rem"}}>등록</button>   
        </div>
        
      </form>
    </div>
  )
}
