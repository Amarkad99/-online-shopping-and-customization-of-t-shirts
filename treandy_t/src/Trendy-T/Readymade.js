import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tshirt from './Tshirt.png';
import "./Readymade.css"
export default class Readymade extends Component{
  constructor()
  {
    super()
    this.state={msg:" "}
    this.handler = this.handler.bind(this);
  }

  componentDidMount(){
    //ajax.
  }

handler(){
this.setState=({msg:"first search"})
console.log("first search")
}
  

render(){
  return(
    <div>
 <div>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="Go to Login" aria-selected="false">Go To login</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="Customize" aria-selected="false">Go To login</a>
    </li>

    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          filter
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Color</a>
          <a class="dropdown-item" href="#">Size</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">price</a>
        </div>
      </li>
<li>
<nav class="navbar navbar-light bg-light justify-content-between">
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.handler}>Search</button>
  </form>
</nav>
</li>
    
  </ul>
  <div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"></div>
  </div>
  
    </div >
    <div>
    <a href="">
  <img src={Tshirt} alt="Paris"/><br></br>
  <span>description:</span><br></br>
  <span>price:&#8377;</span><br></br>
</a>

<a href="">
  <img src={Tshirt} alt="Paris"/><br></br>
  <span>description:</span><br></br>
  <span>price:&#8377;</span><br></br>
</a>
<a href="">
  <img src={Tshirt} alt="Paris"/><br></br>
  <span>description:</span><br></br>
  <span>price:&#8377;</span><br></br>
</a>
<a href="">
  <img src={Tshirt} alt="Paris"/><br></br>
  <span>description:</span><br></br>
  <span>price:&#8377;</span><br></br>
</a>
</div>
    
    {/* <img className='tshirt' src={Tshirt} />
    <img className='tshirt' src={Tshirt} />
    <img className='tshirt' src={Tshirt} /> */}
    </div>
  )
}
}
