import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContextProvider } from "../../contexts/AuthContext";


function MePage() {
  const ctx = useContext(AuthContextProvider);
  const navigate= useNavigate();
  useEffect(()=>{
    if(!ctx.token) {
      navigate("/");
    }
  },[])  
    return (
    <>
      <S
    </>
    );
}

export default MePage;