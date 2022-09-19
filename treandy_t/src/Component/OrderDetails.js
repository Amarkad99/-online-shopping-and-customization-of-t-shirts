import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import NavBar from "./NavBar";
 
export default function MyOrder()
{
    let[list,setList]=useState("")


    function Details()
    {
      var str=  <table  class="table table-striped">
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
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
            <td>John</td>
            <td>Doe</td>
          </tr>
          <tr>
            <td>Mary</td>
            <td>Moe</td>
            <td>mary@example.com</td>
          </tr>
          <tr>
            <td>July</td>
            <td>Dooley</td>
            <td>july@example.com</td>
          </tr>
        </tbody>
      </table>
      setList(str)
    }


    return(
        
        <div class="container">
            <NavBar></NavBar>
             <center><h1>Order Details</h1></center>
             <a href="">Home_Page</a>    <a href="">Logout</a> <br/> <br/>

            <center> <Button  variant="flat" size="xl" onClick={Details}>
        Show_Order_Details
      </Button></center>

      {list}
            
        </div>
        
    )
}