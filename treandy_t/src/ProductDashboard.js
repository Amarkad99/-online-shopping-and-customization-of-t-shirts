import React from 'react'

import NavBarCart from './NavBarProductDash';
import './CSS_ProductDash.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from 'react-bootstrap/Table';
import ModalBox from './ModalBox'

export default function ShoppingCart()
{
    return(
        <div>
            <NavBarCart></NavBarCart>
          {/** 
            <h2 >  <img className='' src={} height={50} width={50} />  <b className='title'><i >SHOPPING CART</i></b></h2>
*/}
             <h2 >  <b className='title'><i >Product DashBoard</i></b></h2>

     {/**/} 
            
         

            <Table striped bordered hover className='tablePosition'>
      <thead>
        <tr>
          <th>Serial Number</th>
          <th>Product Image</th>
          <th>Product ID</th>
          <th>Product Description</th>
          <th>Product Quantity</th>
          <th>Strage Location</th>
          <th>Edit Button</th>
          <th>Delete Button</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td></td>
          <td>Rs. 840</td>
          <td>Otto</td>
          <td>Otto</td>
          <td><Button type="submit">Edit</Button></td>
          <td><Button type="submit">Delete</Button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td></td>
          <td>Rs. 300</td>
          <td>Otto</td>
          <td>Otto</td>
          <td><Button type="submit">Edit</Button></td>
          <td><Button type="submit">Delete</Button></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Otto</td>
          <td>Otto</td>
          <td>10% Instant Discount up to INR 300 on Federal Bank Cards. Minimum purchase value INR 1000 Here's how
5% Instant Discount up to INR 250 on HSBC Cashback Card Credit Card</td>
          <td >Rs. 510</td>
          <td>Otto</td>
         
          <td><Button type="submit">Edit</Button></td>
          <td><Button type="submit">Delete</Button></td>
        </tr>
        <tr>
          <td>4</td>
          <td>Jacob</td>
          <td>. 1236</td>
          <td>Rs. 350</td>
          <td>Otto</td>
          <td>Otto</td>
          <td><Button type="submit">Edit</Button></td>
          <td><Button type="submit">Delete</Button></td>
        </tr>
        <tr>
          <td>5</td>
          <td>s. Please check 'EMI options' above for more details. Here's how
Get GST invoice and save up to 28% on business purchases. Sign up for free Here's how</td>
          <td>9654</td>
          <td>Rs. 350</td>
          <td>Otto</td>
          <td>Otto</td>
          <td><Button type="submit">Edit</Button></td>
          <td><Button type="submit">Delete</Button></td>
        </tr>

      </tbody>

      
    </Table>



    <div className='addButton'>
            <Button  type="submit">Add Product</Button>{' '}
      </div>
      <div  className='subButton'>
            <Button type="submit" >Save</Button>
      </div>

        </div>
    )
}
