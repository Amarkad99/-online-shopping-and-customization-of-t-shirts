import React, { useEffect, useState } from "react";

import "./common.css"
import 'bootstrap/dist/css/bootstrap.min.css';
 import {Card} from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import * as productservice from "./services/ProductServices"


    const HomePage=()=> {
    
   
    //  const data=sessionStorage.getItem('auth')
    //  const {email,password,first_name}=JSON.parse(data);
    //   console.log(data);

    let[images,setImages]=useState([])
    let[list, SetList]=useState([]);
    let[cart,setCart]=useState("")
   
    useEffect(()=>{
        
      getUserDetails();
  },[])

  const getUserDetails=async()=>{
    
      let result=await fetch(`http://localhost:8080/product/getall`);
      result = await result.json();
      setImages(result)
      console.log(result);
  }
    const renderCard =(card,index)=>{
      //document.getElementById("img1").setAttribute("src",card.image_front)
      console.log(card.image_front)
      return(
             <div> 
          <form >
                    <Card style={{ width: '16rem'}} key={card.productid} className="fit">
        <Card.Img variant="top" id="img1" src={card.image_front} />
        <Card.Body>
          <Card.Title>Price : &#8377;{card.price}</Card.Title>
          <Card.Text>
          color:{productservice.getColorByID(card.color)}&nbsp;<br></br>
          neck:{productservice.getNeckTypeByID(card.neck_type)}&nbsp; size:{productservice.getSizeByID(card.size)}&nbsp;
          Material:{productservice.getMaterialByID(card.material)}&nbsp;&nbsp;
          Quantity:<select onChange={(ele)=>{
          let val=card.quantity+ele.target.value
          card.price=card.price*val
          card.quantity=ele.target.value
          }}>
           
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          
         
          </Card.Text>
          <Button variant="primary" onClick={
                       ()=>{ let new_item=card;
                        if(sessionStorage.getItem('data')===null){
                        sessionStorage.setItem('data','[]');
                       }
                       let old_item=JSON.parse(sessionStorage.getItem('data'));
                       old_item.push(new_item);
                       sessionStorage.setItem('data',JSON.stringify(old_item))
                         }}>add to cart</Button>
        </Card.Body>
      </Card></form></div>
      );
    };

    return(
    


    <div>
      
      <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="http://localhost:3000/" role="tab" aria-controls="home" aria-selected="true">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab"  data-toggle="tab" role="tab" href="http://localhost:3000/profile" aria-controls="profile" aria-selected="false">Profile</a>
  </li>
  <li class="nav-item">
        <a class="nav-link" id="profile-tab" data-toggle="tab" href="http://localhost:3000/customize" role="tab" aria-controls="profile" aria-selected="false">Customise</a> 
</li>
  <li class="nav-item">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="http://localhost:3000/Cart1" role="tab" aria-controls="contact" aria-selected="false">Cart</a>
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


  <li>

  <form class="d-flex" role="search">
        <input class="form-control me-1" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
  </li>
  <li><center></center></li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"></div>
</div>
<div className="bgcolor">
      <Bigimage></Bigimage>
<div className="grid">
    {images.map(renderCard)}
   
    </div>
    </div>
    <footer className="mt-auto py-10 bg-dark">
        <div className="container d-flex justify-content-center">
          <center>
          <span className="text-muted">Copyright &copy; Website 2021  TrendyT</span>

          </center>
          </div>
         <div className="foot">


<div class="container text-center text-md-start mt-5">
    
      <div class="row mt-3">
    
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
       
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>About Us
          </h6>
          <p>
          Trendy-t is a lifestyle fashion brand that makes creative, distinctive fashion for the trendy, contemporary Indian.
           Trendy-t was created on the principle of creating impact through innovation, honesty and thoughtfulness.
          </p>
        </div>
       

       
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <p  class="text-reset">Customize Tshirt</p>
          </p>
          <p>
          <p  class="text-reset"> Readymade Tshirt</p>
          
          </p>
          <p>
          <p  class="text-reset"> Top Tshirt</p>
     
          </p>
          <p>
            <a href="#!" class="text-reset"></a>
          </p>
        </div>
   

    
        {/* <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
       
          <h6 class="text-uppercase fw-bold mb-4">
        
          </h6>
          <p>
            <a href="#!" class="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Help</a>
          </p>
        </div> */}
      
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
       
          <h6 class="text-uppercase fw-bold mb-4">Contact Us</h6>
          <p><i class="fas fa-home me-3"></i> IET Pune ,Maharashtra,India</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            Trendy_t@gmail.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 91 2048 5588</p>
          <p><i class="fas fa-print me-3"></i> + 91 2048 5589</p>
        </div>
       
      </div>
   
    </div>   
       
      
        </div>
      
      </footer>
</div>

    )
}

function Bigimage()
{

  return(<div><div>

<img src='https://www.beyoung.in/api//cache/catalog/products/banner_desktop/custom_t_shirts_banner_desktop_view_3d_10_9_2022_1920x475.jpg' className="homepageimage3" alt=""></img>
  </div>
  </div>)
}

export default  HomePage;