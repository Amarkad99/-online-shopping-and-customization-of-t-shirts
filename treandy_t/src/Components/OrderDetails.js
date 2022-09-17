<<<<<<< HEAD
import { useState,useEffect } from 'react';
=======
import React, { useEffect, useState } from "react"
>>>>>>> developer
import Button from 'react-bootstrap/Button';
import NavBar from "./NavBar";
 
export default function MyOrder()
{
<<<<<<< HEAD
    let[list,setList]=useState("")



    function Details()
    {

      useEffect(()=>{
        
        getUserDetails();
    },[])

    const getUserDetails=async()=>{
       // console.warn("param=",params)
        let result=await fetch(`http://localhost:8080/user/findall`,{
         method: 'GET',
         headers:{'Content-Type':'application/json'},
         body:JSON.stringify({
          email_id:Emailid,first_name:fname,last_name:lname,grnder:gender
         }) 
        })
        result = await result.json();
       console.warn("Result=",result);
    }
     


      var str=  <table  class="table table-striped">
=======
    let[res,setResult]=useState([]);

    useEffect(()=>{
        
      getUserDetails();
  },[])

  const getUserDetails=async()=>{
      
      let result=await fetch("http://localhost:8080/jpaex/showall");
      result = await result.json();
     console.warn("Result=",result);

     setResult(result);

  }
  
    return(
        
        <div class="container">
            <NavBar></NavBar>
             <center><h1>Order Details</h1></center>
             <table  class="table table-striped">
>>>>>>> developer
        <thead>
          <tr class="danger">
            <th>Order Id</th>
            <th>Product Id</th>
            <th>Product Quantity</th>
            <th>Status</th>
            <th>Total Price</th>
            <th>Order Date</th>
          </tr>
        </thead>
        <tbody>
<<<<<<< HEAD
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
            <td>John</td>
            <td>Doe</td>
          </tr>
         
        </tbody>
      </table>
      setList(str)
    }
  

    return(
        
        <div class="container">
            <NavBar></NavBar>
             <center><h1>Order Details</h1></center>
             

            <center> <Button  variant="flat" size="xl" onClick={Details}>
        Show_Order_Details
      </Button></center>

      {list}
=======
          {
            res.map(
              result => 
            <tr>
            <td>{result.order_id}</td>
            <td>{result.product_id}</ td>
            <td>{result.product_quantity}</td>
            <td>{result.status}</td>
            <td>{result.total_price}</ td>
            <td>{result.order_date}</td>

            

          </tr>
            )

          }
         
        </tbody>
      </table>

         {/*  <td>{result.id}</td>
            <td>{result.name}</td>
            <td>{result.cost}</td> <center> <Button  variant="flat" size="xl" onClick={Details}>
        Show_Order_Details
      </Button></center>

      {list} */ } 
>>>>>>> developer
            
        </div>
        
    )
<<<<<<< HEAD
    }
=======
}
>>>>>>> developer
