 import React, { useState } from "react";
 import "./Login.css"
 import Tshirt from './image/Tshirt.png';

 import Button from 'react-bootstrap/Button';
 import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
 export default function Login(){
  let [Emailid,setEmailid] = useState("")
  let [password,setPassword] = useState("")
  let [msg,setMsg] = useState("")
  const dispatch= useDispatch()
    let navigate = useNavigate() 

    function check_login()
    {
      console.log({Emailid})
      console.log("hi")
        fetch('http://localhost:8080/Login/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body:JSON.stringify({
            email_id:Emailid,
            password:password})
          })
        .then(response => response.json())
        .then(data =>{
          
             if(data.msg === "OK")
             {
              console.log("hi2")
              dispatch({type:"save",payload:{Emailid:Emailid,password:password}})
              navigate("/home") 
             }
             else{
              setMsg("Not Ok")
             }

        } );
                
        
        
        
    }

   
return(


    <div>
    <div class="box">   <a href='http://localhost:3000/Signup'>sign up</a>
      <center>
    
        <h2><b>SING IN</b></h2>      
        
        <form >
           <h2>{msg}</h2>
          <div class="Input">
            <label for="username">EmailId:</label><br></br>
            <input   class="form-control" 
              type="email" 
              name="EmailId" 
              placeholder="Enter EmailId" 
              id="EmailId" 
              onBlur={(e)=>{setEmailid(e.target.value)}}
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
        
        <a href=''>Forgot Password?</a>
        </center>
      </div>
      <img className='img' src={Tshirt} />
      </div>
    );
  }

