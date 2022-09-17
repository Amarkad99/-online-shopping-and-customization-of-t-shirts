import React, { useState } from "react";
import Finalbar from "./Finalbar.css"
import "./Login.css"
import 'bootstrap/dist/css/bootstrap.min.css';

 import a5 from './image/homepage1.jpeg'
//  import Logo from './image/mylogo4.png'
 import a6 from './image/homepage2.jpeg'

import Productlist from "./productlist";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function HomePage()
{
    const Emailid = useSelector((state)=>{return state.Emailid});
    let[id,setId]=useState(Emailid)
    let navigate = useNavigate() 

    function handler(){

        navigate("/Profile") 
    }
    return(<div>


<div class="topnav">
{/* <img src={Logo}   className="logo" height={120} width={120} alt="loading"></img>  */}
<b> <center class="text-danger">WELCOME {id}</center></b>
  <a href="http://localhost:3000/Customize">Customize</a>
  <a href="#news" onClick={handler}>profile</a>
  <a href="#contact">Contact</a>
  <a href="#" class="split">Logout</a>
</div>
<Bigimage></Bigimage>
<Productlist></Productlist>

</div>

    )
}

function Bigimage()
{

  return(<div>

        <img src={a5}   className="" height={600} width={750} alt="loading"></img> 
  <img src={a6}   className="" height={600} width={750} alt="loading"></img> 
  </div>)
}