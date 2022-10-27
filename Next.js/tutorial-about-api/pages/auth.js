
import { useState } from 'react'

export default function AuthPage() {
    const [datas, setDatas] = useState({ email: "", password: "", age: "" });

    function submitHandle(evt) {
        evt.preventDefault();
        // console.log(datas);
        // 유효성 검사를 여기서 한번 해줘도 됨.
        fetch("/api/user", {
            method: "post",
            body: JSON.stringify(datas),
            headers: {
                "Content-type": "application/json"
            }
        }).then(response => response.json())
            .then(data => {console.log(data)});
    }
    return (
        <div style={{
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", minHeight: "100vh"
        }}>
            <h1>Hello, NEXT.js WORLD</h1>
            <form style={{ width: "50%" }} onSubmit={submitHandle}>
                <p>
                    <label>사용자 이메일</label>
                    <input type="text" style={{ width: "100%", padding: "0.3rem", textAlign: "center" }}
                        value={datas.email} onChange={(evt) => setDatas({ ...datas, email: evt.target.value })} />
                </p>
                <p>
                    <label>사용자 비밀번호</label>
                    <input type="password" style={{ width: "100%", padding: "0.3rem", textAlign: "center" }}
                        value={datas.password} onChange={(evt) => setDatas({ ...datas, password: evt.target.value })} />
                </p>
                <p>
                    <label>사용자 나이</label>
                    <input type="number" style={{ width: "100%", padding: "0.3rem", textAlign: "center" }}
                        value={datas.age} onChange={(evt) => setDatas({ ...datas, age: evt.target.value })} />
                </p>
                <p>
                    <button style={{ width: "100%", padding: "0.2rem", textAlign: "center" }}>가입</button>
                </p>
            </form>
        </div>
    )
}
