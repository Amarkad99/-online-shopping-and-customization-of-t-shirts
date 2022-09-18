 import React, { useState } from "react";
 import "./Login.css"
<<<<<<< HEAD
//  import Tshirt from './image/Tshirt.png';
import Tshirt from './image/login.jpg'
import logo from './image/mylogo4.png'
//  import logo from './image/tredy_t_logo.jpg';
=======
 import Tshirt from './image/Tshirt.png';
>>>>>>> 95ce4f32014b92db108bf86e64c4cde63fb966ca

 import Button from 'react-bootstrap/Button';
 import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Nvabar1 } from "./Orderhistory";
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
      <Nvabar1></Nvabar1>
    <div class="box">   <a href='http://localhost:3000/Signup'>sign up</a>
      <center>
    
        <h2><b>SING IN</b></h2>      
        
        <form >
<<<<<<< HEAD
        <img className='mylogo' src={logo}  />
=======
           <h2>{msg}</h2>
>>>>>>> 95ce4f32014b92db108bf86e64c4cde63fb966ca
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
      {/* <img className='' src={Tshirt}  height={551} width={693}  /> */}
      <img className='' src={Tshirt}  height={551} width={608}  />
      </div>
    );
  }


