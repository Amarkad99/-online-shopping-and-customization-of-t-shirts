 import React, { useState } from "react";
 import "./common.css"
 import Tshirt from './image/question.png';

 import Button from 'react-bootstrap/Button';
 import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
 export default function Question(){

  let [Question,setQuestion] = useState("")
  let [Answer,setAnswer] = useState("")
  let [Emailid,setEmailid] = useState("")
  let [msg,setMsg] = useState("")
  let [status,setStatus] = useState(false)
    let navigate = useNavigate() 


    function onChangeSelect(event){
      setQuestion(event.target.value);
      console.log(event.target.value)
    }
    function check_login()
    {
      console.log({Emailid})
      console.log({Answer})
      console.log("hi")
        fetch('http://localhost:8080/forgot/login2', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body:JSON.stringify({
            email_id:Emailid,
            security_answer:Answer,
            security_question:Question})
          })
        .then(response => response.json())
        .then(data =>{
          console.log(data.msg)
             if(data.msg === "OK")
             {
              console.log("hi2")
              navigate("/Changepassword") 
             }
             else{
              setStatus(true)
              setMsg(" Question or Answer is incorrect")
             }

        } );  
    }
return(
    <div>
      <diV>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link " id="home-tab" data-toggle="tab" href="http://localhost:3000/" role="tab" aria-controls="home" aria-selected="true">Login</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="http://localhost:3000/signup" role="tab" aria-controls="contact" aria-selected="false">Signup</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="http://localhost:3000/Question" role="tab" aria-controls="home" aria-selected="true">Security Question</a>
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
      
  {status && <h4 className="text-danger">{msg}</h4>}
	
        <br></br>
      <h2><b className= "text-uppercase">SECURITY QUESTIONS</b></h2>  
      <br></br>
      <br></br>
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
          </div>
    <br></br>
           
       
        <form >
       
          <div class="Input">
            <label for="username">Question:</label><br></br>
           
              <select class="form-control" onChange={onChangeSelect}>
              <option value="Who is your favourite actor">Who is your favourite actor?</option>
    <option value="What is your mother name">What is your mother name?</option>
    <option value="What is your childhood nickname">What is your childhood nickname?</option>
          </select>
              <div className="text-danger"></div>
          </div><br></br>
  
        
  
          <div class="Input">
            <label for="Answer">Answer:</label><br></br>
            <input 
              type="text" 
              name="Answer" 
              class="form-control" 
              placeholder="Enter Answer" 
              id="Answer" 
              onBlur={(e)=>{setAnswer(e.target.value)}}
              required/>
  
              <div className="text-danger"></div>
          </div><br></br>
  
         
             
          <Button variant="primary" onClick={check_login}>Reset</Button>{' '}
        </form>
        
        </center>
      </div>
      <img className="girlimg" src="https://img.freepik.com/premium-vector/boy-girl-create-account-social-media-vector-young-man-woman-using-smartphone-create-account-website-communication-chatting-with-friends-characters-flat-cartoon-illustration_87720-6016.jpg?w=2000"></img>
      </div>
    );
  }


