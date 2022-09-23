import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import Button from 'react-bootstrap/Button';
import "./common.css"
import { useSelector } from "react-redux";
import { useState } from "react";


export default function Changepassword()
 { 
    let navigate=useNavigate();
    const Emailid = useSelector((state)=>{return state.Emailid});
    console.log("Emailid",Emailid);
    let [password,setpassword]=useState("")
    let [confirm_password,setConfirm_password]=useState("")
    let [msg,setMsg]=useState("")
    let [status,setStatus]=useState(true)
    let [status1,setStatus2]=useState(false)

    const params=useParams(); 
     function Password1(event)
     {
        setpassword(event.target.value)
     }

        function setpass()
        {
            if((password===confirm_password) && (password.length >= 6) ){
              console.log("ok")
              setStatus(true)
              setMsg("PASSWORD CHANGE SUCCSESSFULLY!!")
            fetch('http://localhost:8080/user/edit1', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body:JSON.stringify({
                    email_id:Emailid, password:password})
                })
              .then(response => response.json())
              .then(data =>{
                  if(data.password === data.confirm_password)
                  {
                     setpassword(data.password);
                      navigate("/")
                  }
                 
              });
            }
            else{
                setMsg("Password Missmatch or Must be more than 6 character")
            }
        }
      
            return (
              <div >
                      <diV>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link " id="home-tab" data-toggle="tab" href="http://localhost:3000" role="tab" aria-controls="home" aria-selected="true">Login</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="http://localhost:3000/login/signup" role="tab" aria-controls="contact" aria-selected="false">Signup</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="http://localhost:3000/Question" role="tab" aria-controls="contact" aria-selected="false">Security Question</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" id="contact-tab " data-toggle="tab" href="http://localhost:3000/changepassword" role="tab" aria-controls="contact" aria-selected="false">Changepassword</a>
  </li>

  <li>

  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"></div>
</div>

      </diV>

               <div class="box">  
              
                             
              <center>
            
                <h2><b className= "text-uppercase">Forgot Password</b></h2>      
                <br></br>
                <form >
                   
                  <div class="Input">
                    <label for="password">Enter New Password:</label><br></br>
                    <input 
                      type="password" 
                      name="password" 
                     
                      onBlur={(e)=>{setpassword(e.target.value)}}
                      class="form-control" 
                      placeholder="Enter password" 
                      id="password" 
                      required/>
          
                     
                  </div><br></br>
                {status &&  <h5 className="text-danger">{msg}</h5>}
                  <div >
                    <label for="password">Confirm Password:</label><br></br>
                    <input 
                      type="password" 
                      name="confirm_password" 
                     
                      onBlur={(e)=>{setConfirm_password(e.target.value)}}
                      class="form-control" 
                      placeholder="Enter confirm password" 
                      id="confirm_password" 
                      required/>
          
                      <div className="text-danger"></div>
                  </div><br></br>
                     
                  <Button variant="primary" onClick={setpass}>Submit</Button>{' '}
                </form>
                
              
                </center>
                </div>
                <img className="girlimg" src=" https://img.freepik.com/premium-vector/forgot-password-illustration_65141-418.jpg"></img>
              </div>
            );
          }
        
          
