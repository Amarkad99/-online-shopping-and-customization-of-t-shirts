import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import NavBar from "./NavBar";
export default function DeliveryDetails()
{
    let[list,setList]=useState("")


    function Details()
    {
      var str=  <table  class="table table-striped">
        <thead>
          <tr class="danger">
            <th>Id</th>
            <th>Name</th>
            <th>Mobile No</th>
            <th>Address</th>
            <th>Amount</th>
            <th>Select Status</th>
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
             <center><h1>Delivery Details</h1></center>
             

            <center> <Button  variant="flat" size="xl" onClick={Details}>
        Show_Order_Details
      </Button></center>

      {list}
            
        </div>
        
    )
}