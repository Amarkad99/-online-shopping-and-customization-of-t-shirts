import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Signout(){
    let navigate=useNavigate()
    useEffect(()=>{
        sessionStorage.clear()
        navigate("/")
        
    },[])
}