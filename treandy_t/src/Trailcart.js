
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import React from "react";
import "./common.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

 export default function Cart1(item)
{ 
  let navigate=useNavigate();
  let arr;
   let data = sessionStorage.getItem('data')
  const [{productid,price,material}]=data;
  
  let [Quantity,setquantity]=useState(1);
    let l=JSON.parse(data);
    l.map((ele)=>{console.log(ele.productid)})

    useEffect(()=>{
    let d=sessionStorage.getItem('auth');
    if(d === null){
      navigate("/login")
      alert("Please Login First")
    }
     
    
    },[])
    function refreshPage(){
      window.location.reload();
  } 
    
 

return(<div>
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
    <a class="nav-link active" id="contact-tab" data-toggle="tab" href="http://localhost:3000/Cart1" role="tab" aria-controls="contact" aria-selected="false">Cart</a>
  </li>    
<li class="nav-item">
        <a class="nav-link" id="profile-tab" data-toggle="tab" href="http://localhost:3000/myOrder" role="tab" aria-controls="profile" aria-selected="false">Orders</a> 
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
</div>
         <div className="bg6">
        <div class="container">
             <center><h1 className= "text-uppercase">Cart</h1></center>
             <div className="tablebg">
             <table  class="table table-striped">
        <thead>
          <tr class="">
            
            <th><center>Items</center></th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {
            l.map(
              (result ,index) => {
               return(
            <tr >
            <td><center>{result.neck_type}&nbsp;{result.neck_type}&nbsp;{result.size}&nbsp;{result.material}&nbsp;{result.sleeve}</center></td>
            <td>{result.quantity}</td>
            <td>{result.price * Quantity} &#8377;</td> 
            <td><button class="btn" onClick={()=>{arr = l.filter((it)=>{return it !==result})
                                          sessionStorage.setItem('data',JSON.stringify(arr))
               }} onDoubleClick={refreshPage}><i class="fa fa-trash" ></i></button></td>
        
         
          </tr>
      
              )  }  )

          }
         <p>
              Total Amount :  {
               
                  l.map(item => item.price).reduce((total, value) => total + value, 0) 
                  
                } &#8377;
                
              </p>
              <Button variant="primary" href="http://localhost:3000/payment">Checkout</Button>{' '}
              
              
         
        </tbody>
      </table>
     
      </div>
</div></div></div>

)



}
