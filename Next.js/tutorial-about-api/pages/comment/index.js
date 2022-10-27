import { unstable_getServerSession } from "next-auth";
import { option } from "../api/auth/[...nextauth]";
import styles from '../../styles/Home.module.css'
import { useRef, useState } from "react";


export default function CommentIndexPage({user}) {
    const commentRef = useRef();
    const [alert, setAlert] = useState(null);
    // console.log(user);
    const submitHandle = async (evt) => {
        evt.preventDefault();
        const comment = commentRef.current.value;
        
        try{
            setAlert("요청 처리 진행중");
            const response = await fetch("/api/comment", {
                method: "post",
                body: JSON.stringify({ commentText: comment, email:user }),
                headers: {
                  "Content-type": "application/json"
                }
            });
            const data = await response.json();
            console.log(data);
            evt.target.reset();
            setAlert("요청 처리 완료");
            setTimeout(()=>{setAlert(null);},5000)      
            
        }catch(e){
            setAlert("요청 처리중에 문제가 발생하였습니다.");
        }
        
    }

    return (
        <>
        <div className={styles.container}>
            <h3>의견남기기</h3>
            <form onSubmit={submitHandle}>
                <p>                
                    <textarea disabled={!user} ref={commentRef} style={{resize:"none", width:"30rem", height:"18rem"}} />                
                </p>
                {user && <button>등록</button>}
            </form>
        </div>
        {alert &&
            <div style={{
                bottom: 0, left: 0, position: "absolute", width: "100vw",
                backgroundColor: "#208744", height: "2rem", color: "#9ABFE3",
                textAlign:"center", fontSize:"1.3rem"
            }}>
                {alert}
            </div>
        }
        </>
    )
}

export async function getServerSideProps(context) {
    const session = await unstable_getServerSession(context.req, context.res, option);
    // console.log(session);
    if(!session) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }
    }
    return {
        props: {
            user: session?.user.email ?? null
        }
    }
}