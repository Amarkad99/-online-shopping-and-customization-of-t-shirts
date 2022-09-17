<<<<<<< HEAD:treandy_t/src/Orderhistory.js
import React from "react";
import './box.css'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Orderhistory()
{



    return(<div> 
      <Nvabar1></Nvabar1>
      <center><h1>My Orders</h1></center>  
 <table class="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">Product id</th>
      <th scope="col">Product Name</th>
      <th scope="col">Product Desc</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Polo Tshirt</td>
      <td>collor</td>
      <td>Purchased</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

      
    </div>)
}

export function Nvabar1()
{




  
  return(<div>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="http://localhost:3000" role="tab" aria-controls="home" aria-selected="true">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab"  data-toggle="tab" role="tab" href="http://localhost:3000/profile" aria-controls="profile" aria-selected="false">profile</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="http://localhost:3000/login" role="tab" aria-controls="contact" aria-selected="false">Login</a>
  </li>

      <li class="nav-item">
        <a class="nav-link" id="profile-tab" data-toggle="tab" href="http://localhost:3000/signup" role="tab" aria-controls="profile" aria-selected="false">signup</a> 
</li>
<li>
<a class="nav-link" id="profile-tab" data-toggle="tab" href="http://localhost:3000/payment" role="tab" aria-controls="profile" aria-selected="false">Payment</a>
      </li>


  <li>

  <form class="d-flex" role="search">
        <input class="form-control me-1" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"></div>
</div>
  </div>)
=======
import React from "react";
import '../box.css'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Orderhistory()
{



    return(<div> 
      <Nvabar1></Nvabar1>
      <center><h1>My Orders</h1></center>  
 <table class="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">Product id</th>
      <th scope="col">Product Name</th>
      <th scope="col">Product Desc</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Polo Tshirt</td>
      <td>collor</td>
      <td>Purchased</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

      
    </div>)
}

export function Nvabar1()
{




  
  return(<div>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Cart</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Logout</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"></div>
</div>
  </div>)
>>>>>>> 95ce4f32014b92db108bf86e64c4cde63fb966ca:treandy_t/src/Components/Orderhistory.js
}