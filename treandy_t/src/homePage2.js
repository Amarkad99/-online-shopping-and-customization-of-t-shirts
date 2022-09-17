import React from "react";

import { Nvabar1 } from "./Orderhistory";

import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './Footer.js'


 import a5 from './Pictures/h5.jpg'
 import a6 from './Pictures/h6.jpg'

import Productlist from "./Productlist";

export default function HomePage()
{






    return(<div>

<Nvabar1></Nvabar1>
<Bigimage></Bigimage>

<Productlist></Productlist>

{/* <section>




<div class="slider-heading">

<center><h3>ReadyMade Tshirt<span>Available</span></h3></center>
</div>



<div class="product-box">
<a href="#">

  <strong>Polo Tshirt</strong>


  <img src={dtshirt} className="heart"  alt="polo t shirt"></img>


            <div class="buy-price">
        
             <p> 340$  discount 20% if you order today</p>


               
               <a href="#" class="buy-btn">Buy</a>
            </div>

            
</a>



</div>







<div class="product-box">
<a href="#">

  <strong>Round-Neck Tshirt</strong>
  

  <img src={s1} className="heart"  alt="polo t shirt"></img>

   


              


            <div class="buy-price">
             

             <p> 540$  discount 20% if you order today</p>

            
               
               <a href="#" class="buy-btn">Buy</a>
            </div>




</a>





</div>





<div class="product-box">
<a href="#">

  <strong>Ladies Tshirt</strong>


  <img src={w1} className="heart"  alt="polo t shirt"></img>




              

         

            <div class="buy-price">
   

             <p> 240$  discount 20% if you order today</p>

               
               <a href="#" class="buy-btn">Buy</a>
            </div>




</a>



</div>

</section> */}




 

          {/* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={a5}  alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={a6}  alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={a5}  alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> */}

{/* 
          <div class="row">
  <div class="col-md-4">
    <div class="thumbnail">
     
        <img src={dg}  alt="Lights" style="width:100%"/>
        <div class="caption">
          <p>Lorem ipsum...</p>
        </div>
   
    </div>
  </div>
  <div class="col-md-4">
    <div class="thumbnail">

        <img src={dg} alt="Nature" style="width:100%"/>
        <div class="caption">
          <p>Lorem ipsum...</p>
        </div>
   
    </div>
  </div>
  <div class="col-md-4">
    <div class="thumbnail">
     
        <img src={dg} alt="Fjords" style="width:100%"/>
        <div class="caption">
          <p>Lorem ipsum...</p>
        </div>
   
    </div>
  </div>
</div> */}
<Footer></Footer>
</div>





    )
}

function Bigimage()
{




  return(<div>

        <img src={a5}   className="" height={600} width={700} alt="loading"></img> 
  <img src={a6}   className="" height={600} width={500} alt="loading"></img> 
  </div>)
}