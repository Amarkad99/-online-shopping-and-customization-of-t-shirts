 import React, { useState } from "react";
 import "./Login.css"
 import Tshirt from './image/Tshirt.png';
 import logo from './image/tredy_t_logo.jpg';

 import Button from 'react-bootstrap/Button';
 import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
 export default function Login(){
  let [status,setStatus] = useState(false)
  let [email,setEmail] = useState("")
  let [password,setPassword] = useState("")
  let [msg,setMsg] = useState("")
    let navigate = useNavigate() 

    function check_login()
    {
      setPassword([email,password])
    axios.get(`http://localhost:8080/Login/login/${email}/${password}`,email,password)
    .then((result)=>
    {
      console.log(result);
      if(result.data !== ""){
        alert("Login Suceessfull");
        sessionStorage.setItem('auth',JSON.stringify(result.data));
        navigate("/")
      }
      else{
        if(email==="Trendy_t@123gmail.com" && password==="Trendy_t"){
          let pass={"email":"Trendy_t@123gmail.com","password":"Trendy_t"}
          sessionStorage.setItem('auth',JSON.stringify(pass));
          navigate("/ownerDashboard")
        }
        else if(email==="Eparsel@123gmail.com" && password==="123456"){
          let pass={"email":"Eparsel@123gmail.com","password":"123456"}
          sessionStorage.setItem('auth',JSON.stringify(pass));
          navigate("/home")

        }
        else{
        setMsg("Invalid Login");
        navigate("/login")
      }
    }
    }).then(
      navigate("/login")
    ) 
  }

   
return(
      

    <div>
      <div>

        <ul class="nav nav-tabs" id="myTab" role="tablist">

        
        <li class="nav-item">
    <a class="nav-link " id="home-tab" data-toggle="tab" href="http://localhost:3000/" role="tab" aria-controls="home" aria-selected="true">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab"  data-toggle="tab" role="tab" href="http://localhost:3000/profile" aria-controls="profile" aria-selected="false">Profile</a>
  </li>
  <li class="nav-item">
        <a class="nav-link" id="profile-tab" data-toggle="tab" href="http://localhost:3000/customize" role="tab" aria-controls="profile" aria-selected="false">Customise</a> 
</li>
  <li class="nav-item">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="http://localhost:3000/Cart1" role="tab" aria-controls="contact" aria-selected="false">Cart</a>
  </li>    
<li class="nav-item">
        <a class="nav-link" id="profile-tab" data-toggle="tab" href="http://localhost:3000/myOrder" role="tab" aria-controls="profile" aria-selected="false">Ordrs</a> 
</li>
<li class="nav-item">
        <a class="nav-link" id="profile-tab" data-toggle="tab" href="http://localhost:3000/signup" role="tab" aria-controls="profile" aria-selected="false">Create Account</a> 
</li>
<li class="nav-item">
        <a class="nav-link active" id="profile-tab" data-toggle="tab" href="http://localhost:3000/login" role="tab" aria-controls="profile" aria-selected="false">Login</a> 
</li>
<li class="nav-item">
        <a class="nav-link" id="profile-tab" data-toggle="tab" href="http://localhost:3000/signout" role="tab" aria-controls="profile" aria-selected="false">Logout</a> 
</li>
        </ul>
        <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"></div>
        </div>



      </div>
      <div class="box">  
        <center>
      
        
          <h2><b className= "text-uppercase">SIGN IN</b></h2>      
          
          {status && <div classs="container p-5">
    <div class="alert alert-success" role="alert">
    <h4 className="alert-heading">{msg}</h4>
    </div>
  </div>}
          <form > 
            <div class="Input">
              <label for="username">EmailId:</label><br></br>
              <input   class="form-control" 
                type="email" 
                name="email" 
                placeholder="Enter EmailId" 
                id="EmailId" 
                onBlur={(e)=>{setEmail(e.target.value)}}
                required/>
    
                <div className="text-danger"></div>
            </div><br></br>
    
          
    
            <div class="Input">
              <label for="password">Password:</label><br></br>
              <input 
                type="password" 
                name="password" 
                class="form-control" 
                placeholder="Enter password" 
                id="password" 
                onBlur={(e)=>{setPassword(e.target.value)}}
                required/>
    
                <div className="text-danger"></div>
            </div><br></br>
    
            
              
            <Button variant="primary" onClick={check_login}>Login</Button>{' '}
          </form>
          
          <a href='http://localhost:3000/Question' >Forgot Password?</a><br></br>
          <a href='http://localhost:3000/Signup'>sign up</a>  
          </center>
      </div>
      <img className="girlimg" src="https://img.freepik.com/premium-vector/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg?w=2000"></img>
    </div>
    );
  }


