import React, { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import NavBar from "./NavBar";
 
export default function MyOrder()
{
    let[res,setResult]=useState([]);

    useEffect(()=>{
        
      getUserDetails();
  },[])

  const getUserDetails=async()=>{
      
      let result=await fetch("http://localhost:8080/order/orderdetails");
      result = await result.json();
     console.warn("Result=",result);

     setResult(result);

  }
  
    return(
        
        <div class="container">
            <NavBar></NavBar>
             <center><h1>Order Details</h1></center>
             <table  class="table table-striped">
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
            
        </div>
        
    )
}