import { unstable_getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import { useRef } from 'react';
import styles from '../styles/Home.module.css'
import { option } from './api/auth/[...nextauth]';


function ProfilePage(props) {
    const {data,status} = useSession();
    const currentPwRef = useRef();
    const changePwRef = useRef();

    const changeHandle = async(evt) =>{
        evt.preventDefault();

        const response = await fetch("/api/user/change", {
            method: "POST",
            body: JSON.stringify({currentPw:currentPwRef.current.value, changePw:changePwRef.current.value }),
            headers: {
                "Content-type": "application/json"
            }
        });
        console.log(response);
        evt.target.reset();
    }

    if (status === "loading") {
        return (<p>데이터 확인중..</p>);
    }
    if (status === "unauthenticated") {
        return (<p> 유효하지 않은 사용자입니다. </p>)
    }
    return (
    <div className={styles.main}>
        <h1>{props.logonUser}</h1>
        <h3>{data.user.email}({data.user.name})님 환영합니다</h3>
        <form onSubmit={changeHandle}>
            <p>
                <label>현재 비밀번호</label>
                <input type="password" ref={currentPwRef} />
            </p>
            <p>
                <label>새로운 비밀번호</label>
                <input type="password" ref={changePwRef}/>
            </p>
            <p>
                <button>적용하기</button>
            </p>
        </form>
    </div>  );
}
export async function getServerSideProps(context) {
    /*
        serverSideProps 의 context 는 staticProps 가진 것 + req, res
    */
    // console.log(" proifle - ", Object.keys(context));
    const session = await unstable_getServerSession(context.req, context.res, option);
    if(!session) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }
    }
    return {
        props: {logonUser: session.user.email}
    }
}
export default ProfilePage;