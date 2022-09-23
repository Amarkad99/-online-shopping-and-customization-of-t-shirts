import React, { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';

 
export default function MyOrder()
{    
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
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="http://localhost:3000" role="tab" aria-controls="home" aria-selected="true">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab"  data-toggle="tab" role="tab" href="http://localhost:3000/" aria-controls="profile" aria-selected="false">profile</a>
  </li>
  <li class="nav-item">
        <a class="nav-link" id="profile-tab" data-toggle="tab" href="http://localhost:3000/MyOrder" role="tab" aria-controls="profile" aria-selected="false">MyOrder</a> 
</li>


  <li>
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
              res => 
            <tr>
          
            {/* <td>{result.Sleev}&nbsp;&nbsp;{result.color}&nbsp;&nbsp;{result.neck_type}&nbsp;&nbsp;{result.Size}</td> */}
            <td>{res.sleev}&nbsp;&nbsp;{res.neck_type}&nbsp;{res.size}&nbsp;{res.color}
            </td>
            <td>{res.orderdate}</td>
            <td>{res.total_price }</ td>
            <td>{res.status}</td>
           
          </tr>
)}
       
        </tbody>
      </table>
     </div>
        
            
        </div></div></div>
        
    )
}