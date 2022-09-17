import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import Button from 'react-bootstrap/Button';
import Tshirt from './image/changepass.png';

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

    const params=useParams(); 
     function Password1(event)
     {
        setpassword(event.target.value)
     }

        function setpass()
        {
            if((password===confirm_password) && (password.length >= 6) ){
              console.log("ok")
              setStatus(false)
            fetch('http://localhost:8080/forgot/edit1', {
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
               <div class="box">  
               <a href='http://localhost:3000/'>go to login</a>                   
              <center>
            
                <h2><b>Forgot Password</b></h2>      
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
              <img className='img' src={Tshirt} />
              </div>
            );
          }
        
          
