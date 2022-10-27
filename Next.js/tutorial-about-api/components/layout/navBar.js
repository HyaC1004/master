import { useSession } from "next-auth/react";
import Link from "next/link";
import { signOut } from "next-auth/react"
import { useRouter } from "next/router";

/*
    상단에 고정시킬 네비게이션 바 
*/
export default function NavBar() {
    const router = useRouter();
    const {data,status} = useSession();
    // react component 내에서 conosle.log 는 브라우저 콘솔에 출력
    // console.log("  data - ",data);
    // console.log("  status - ",status);

    return (
    <nav style={{ 
        width:"100%", 
        justifyContent:"flex-start", 
        paddingTop:"1rem", 
        paddingLeft:"2rem",
        flexDirection: "row", 
        gap: "2rem", 
        display: "flex" ,
        fontSize:"1.5rem"
    }}>
        <Link href="/"><a>HOME</a></Link>
        {
            status === "unauthenticated" && <Link href="/signin"><a>SIGN IN</a></Link>        
        }
        {
            status === "authenticated" && (<>
                <Link href="/profile"><a>PROFILE</a></Link>                
                <Link href="/comment"><a>COMMENT</a></Link>
                <a onClick={()=>signOut({
                    redirect:false
                }).then((data)=>{
                    console.log(data);
                    router.push("/signin");
                })} style={{
                    cursor:"pointer"
                }}>SIGN OUT</a>
                </>
            )
        }
    </nav>)

}
