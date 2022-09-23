import React,{useState, useEffect} from "react";
import './common.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Payment()
{
  let[data,setData]=useState("");
  let[status,setStatus]=  useState(false);

   let data1 = sessionStorage.getItem('data')
   let l=JSON.parse(data1);
   let totalprice= l.map(item => item.price).reduce((total, value) => total + value, 0) 
    console.log(data1)
  // const [{price}]=data;
  
  //useEffect(()=>{
//     const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body:JSON.stringify({
//           l
             
//       })
//       };
//     fetch('http://localhost:8080/user/register', requestOptions)
//     .then(response => response.json())
//     .then(data =>{
    

    
//     } );
   
// },[])













  function handler(event)
  {
setStatus(true)
console.log(event.target.value)
 setData(event.target.value);
return(<div>

<p>you have entered {data}</p>
  
</div>)
  }




return(
  <div>
<div>
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="http://localhost:3000" role="tab" aria-controls="home" aria-selected="true">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab"  data-toggle="tab" role="tab" href="http://localhost:3000/profile" aria-controls="profile" aria-selected="false">profile</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="http://localhost:3000/login" role="tab" aria-controls="contact" aria-selected="false">Login</a>
  </li>

      <li class="nav-item">
        <a class="nav-link" id="profile-tab" data-toggle="tab" href="http://localhost:3000/signup" role="tab" aria-controls="profile" aria-selected="false">signup</a> 
</li>
<li>
<a class="nav-link" id="profile-tab" data-toggle="tab" href="http://localhost:3000/payment" role="tab" aria-controls="profile" aria-selected="false">Payment</a>
      </li>


  <li>

  <form class="d-flex" role="search">
        <input class="form-control me-1" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"></div>
  <img className="bg6"></img>
</div>

<div  className="Box3">
<center>
  <fieldset > 
<h1> Payment</h1>
<br></br>
Amount <input value={totalprice}  ></input>
<br></br>
<br></br>
<br></br> <Button type="submit" onClick={handler} >Pay </Button>{' '}<br></br>
<br></br>
{status &&<p>Transaction Successful {" "} </p>}
</fieldset> 

</center>

</div>
</div>
</div>)


    
}