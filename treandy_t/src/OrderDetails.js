import React, { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

 
export default function MyOrder()
{    let navigate=useNavigate();
    let [order,setOrder]=useState([]);
    let[res,setRes]=useState([]);
    const data=sessionStorage.getItem('auth')
     const {email,password,first_name}=JSON.parse(data);
      console.log(email);


    useEffect(()=>{
      getUserDetails();
  },[])

  const getUserDetails=async()=>{
      
      let result=await fetch(`http://localhost:8080/order/orderdetails/${email}`);
      result = await result.json();
     console.warn("Result=",result);

     setRes(result);

  }
  
  
    return(
      <div>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
    <a class="nav-link " id="home-tab" data-toggle="tab" href="http://localhost:3000/" role="tab" aria-controls="home" aria-selected="true">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " id="profile-tab"  data-toggle="tab" role="tab" href="http://localhost:3000/profile" aria-controls="profile" aria-selected="false">Profile</a>
  </li>
  <li class="nav-item">
        <a class="nav-link" id="profile-tab" data-toggle="tab" href="http://localhost:3000/customize" role="tab" aria-controls="profile" aria-selected="false">Customise</a> 
</li>
  <li class="nav-item">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="http://localhost:3000/Cart1" role="tab" aria-controls="contact" aria-selected="false">Cart</a>
  </li>    
<li class="nav-item">
        <a class="nav-link active" id="profile-tab" data-toggle="tab" href="http://localhost:3000/myOrder" role="tab" aria-controls="profile" aria-selected="false">Orders</a> 
</li>
<li class="nav-item">
        <a class="nav-link" id="profile-tab" data-toggle="tab" href="http://localhost:3000/signup" role="tab" aria-controls="profile" aria-selected="false">Create Account</a> 
</li>
<li class="nav-item">
        <a class="nav-link" id="profile-tab" data-toggle="tab" href="http://localhost:3000/login" role="tab" aria-controls="profile" aria-selected="false">Login</a> 
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
        <div className="bg6">
        <div class="container">
             <center><h1 className= "text-uppercase">Your Orders</h1></center>
             <div className="tablebg">
             <table  class="table table-striped">
        <thead>
          <tr class="danger">
            <th>Product</th>
            <th>Order Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
       
  {
            res.map(
             result=>
            <tr>
          
            {/* <td>{result.Sleev}&nbsp;&nbsp;{result.color}&nbsp;&nbsp;{result.neck_type}&nbsp;&nbsp;{result.Size}</td> */}
            <td>{result.sleev}&nbsp;&nbsp;{result.neck_type}&nbsp;{result.size}&nbsp;{result.color}
            </td>
            <td>{result.orderdate}</td>
            <td>{result.price * result.product_quantity}</ td>
            <td>{result.status}</td>
           
          </tr>
             )}
       
        </tbody>
      </table>
     </div>
        
            
        </div></div></div>
        
    )
}