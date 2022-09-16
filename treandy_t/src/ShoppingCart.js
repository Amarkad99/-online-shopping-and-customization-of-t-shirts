import React from 'react'
import NavBarCart from './NavBarCart'
import Cart from './cart5.gif'
import './CSS_ShoppingCart.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from 'react-bootstrap/Table';


export default function ShoppingCart()
{
    return(
        <div>
            <NavBarCart></NavBarCart>
          
            <h2 >  <img className='cartImg' src={Cart} height={50} width={50} />  <b className='title'><i >SHOPPING CART</i></b></h2>



     {/**/} 
            
         

            <Table striped bordered hover className='tablePosition'>
      <thead>
        <tr>
          <th>Serial Number</th>
          <th></th>
          <th>T-shirt Details</th>
          <th>T-Shirt Cost</th>
          <th>Check Box</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td></td>
          <td>Rs. 840</td>
          <td><input type='checkbox' id='checkbox' defaultChecked='on'/></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td></td>
          <td>Rs. 300</td>
          <td><input type='checkbox' id='checkbox' defaultChecked='on'/></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Otto</td>
          <td>10% Instant Discount up to INR 300 on Federal Bank Cards. Minimum purchase value INR 1000 Here's how
5% Instant Discount up to INR 250 on HSBC Cashback Card Credit Card</td>
          <td >Rs. 510</td>
          <td><input type='checkbox' id='checkbox' defaultChecked='on'/></td>
        </tr>
        <tr>
          <td>4</td>
          <td>Jacob</td>
          <td>. Please check 'EMI options' above for more details. Here's how
Get GST invoice and save up to 28% on business purchases. Sign up for free Here's how</td>
          <td>Rs. 350</td>
          <td><input type='checkbox' id='checkbox' defaultChecked='on'/></td>
        </tr>
        <tr>
          <td>5</td>
          <td>s. Please check 'EMI options' above for more details. Here's how
Get GST invoice and save up to 28% on business purchases. Sign up for free Here's how</td>
          <td>10% Instant Discount up to INR 300 on Federal Bank Cards. Minimum purchase value INR 1000 Here's how
5% Instant Discount up to INR 250 on HSBC Cashback Card Credit Card Transactions. Minimum purchase value INR 1000 Here's how
No cost EMI available on select cards. Please check 'EMI options' above for more details. Here's how
Get GST invoice and save up to 28% on business purchases. Sign up for free Here's how</td>
          <td>Rs. 350</td>
          <td><input type='checkbox' id='checkbox' defaultChecked='on'/></td>
        </tr>

      </tbody>

      
    </Table>



    <div className='addButton'>
            <Button  type="submit">Add Product</Button>{' '}
      </div>
      <div  className='subButton'>
            <Button type="submit" >Place Order</Button>
      </div>




            <div className='finaldetail' >
               <b> Number Of Selected Products : <p id='selProduct'>  </p>                                  
                                 Total Cost : <p id='tCost'>       </p> 
                </b>                               
            </div>

        </div>
    )
}

