import React from "react";
import './Design.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Security()
{
    // function handler(event)
    // {
    //     console.log(event.target.value)
    // }



return(<div className="box">
     <center >
    <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Cart</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Logout</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"></div>
</div>
 
   
    
<h1>Forgot Password</h1>
<br></br>
<h3>Enter new password-<input type="password" /></h3>
<h3>Confirm password-<input type="password" /></h3>
 <br></br>
{/* <h3>Answer:-<input type="text" onBlur={handler}></input> </h3> */}

  <input type="submit" name="Change Password" value="Change Password" />

</center>
  </div>)
}