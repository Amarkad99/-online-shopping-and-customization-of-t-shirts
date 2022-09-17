 import React, { useState } from "react";
 import "./Login.css"
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
  const dispatch= useDispatch()
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
              dispatch({type:"save",payload:{Emailid:Emailid}})
              navigate("/Changepassword") 
             }
             else{
              setMsg(" Question or Answer is incorrect")
             }

        } );  
    }
return(
    <div>
    <div class="box">   
      <center>
        <br></br>
      <h2><b>SECURITY QUESTIONS</b></h2>  
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
           <h2>{msg}</h2>
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
        
<h5 className="text-danger">{msg}</h5>
        </center>
      </div>
      <img className='img' src={Tshirt} />
      </div>
    );
  }


