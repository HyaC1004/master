import Head from 'next/head'
import Image from 'next/image'
import { useRef } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const emailRef = useRef();

  const submitHandle = async (evt) => {
    evt.preventDefault();
    const email = emailRef.current.value;
    const response = await fetch("/api/subscribe", {
      method: "post",
      body: JSON.stringify({ email: email }),
      headers: {
        "Content-type": "application/json"
      }
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className={styles.main}>
      <h1>Hello, NEXT.js WORLD</h1>
      <form onSubmit={submitHandle}>
        <p>
          정기 알림/뉴스레터를 받고자 한다면 이메일 주소를 등록해주세요.
        </p>
        <input type="email" style={{ width: "100%", padding: "0.5rem" }} ref={emailRef} />
      </form>
    </div>
  )
}
