import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const ProtectedRoute = () => {

    const {user, isLoggedIn} = useSelector((state)=> state.auth);
    const navigate = useNavigate();

    useEffect(()=>{
        if(!user){
            navigate("/auth")
        }
    },[user])

  return isLoggedIn ? <>{children}</>: ""
}

export default ProtectedRoute