<<<<<<< HEAD:treandy_t/src/ShippingDetails.js
import React from "react";
import  './D3.css'
import tshirt from './pic2.jpg'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nvabar1 } from "./Orderhistory";
export default function ShippingDetails()
{





    return(<div >
      {/* <img src={tshirt} height={300} width={300} alt="loading"></img> */}
      <Nvabar1></Nvabar1>
<center className="deliverybox">
<h1 className="font">  Shipping Details </h1>

<form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">First Name {" "}</label>
      <input type="text" class="form-control" id="name" placeholder="First Name"/>
    </div>
   

    <div class="form-group col-md-6">
      <label for="inputEmail4">Last Name  {" "}</label>
      <input type="text" class="form-control" id="lname" placeholder="Last Name"/>
    </div>


  </div>
  <div class="form-group col-md-6">
    <label for="inputAddress">Address {" "}</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>


  <div class="form-row">
  

    
    <div class="form-group col-md-4">
      <label for="inputState">city</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>

      <label for="inputState">{"  "}State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div><br></br>

    <div class="form-group col-md-6">
      <label for="inputCity">Pin</label>
      <input type="text" class="form-control" id="inputCity"/>

      <label for="Mobile number">{"  "}Mobile no</label>
      <input type="number" class="form-control" id="mobileno"/>

    </div>


  </div>
  
  <div class="form-group">
  
  </div><br></br>
  <button type="submit" class="btn btn-primary">Next{"                              "}</button>{"                              "}
  <button type="submit" class="btn btn-primary">{"                  "}Cancel</button>

</form>



</center>



    </div>)
=======
import React from "react";
import  '../CssClass/D3.css'
import tshirt from '../Images/pic2.jpg'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function ShippingDetails()
{


    return(<div >
      <img src={tshirt} height={300} width={300} alt="loading"></img>
<center className="Box3">
<h1 className="font">  Shipping Details </h1>

<form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">First Name {" "}</label>
      <input type="text" class="form-control" id="name" placeholder="First Name"/>
    </div>
   

    <div class="form-group col-md-6">
      <label for="inputEmail4">Last Name  {" "}</label>
      <input type="text" class="form-control" id="lname" placeholder="Last Name"/>
    </div>


  </div>
  <div class="form-group col-md-6">
    <label for="inputAddress">Address {" "}</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>


  <div class="form-row">
  

    
    <div class="form-group col-md-4">
      <label for="inputState">city</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>

      <label for="inputState">{"  "}State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div><br></br>

    <div class="form-group col-md-6">
      <label for="inputCity">Pin</label>
      <input type="text" class="form-control" id="inputCity"/>

      <label for="Mobile number">{"  "}Mobile no</label>
      <input type="number" class="form-control" id="mobileno"/>

    </div>


  </div>
  
  <div class="form-group">
  
  </div><br></br>
  <button type="submit" class="btn btn-primary">Next{"                              "}</button>{"                              "}
  <button type="submit" class="btn btn-primary">{"                  "}Cancel</button>

</form>



</center>



    </div>)
>>>>>>> 95ce4f32014b92db108bf86e64c4cde63fb966ca:treandy_t/src/Components/ShippingDetails.js
}