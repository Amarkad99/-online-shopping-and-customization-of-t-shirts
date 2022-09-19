import React from "react";
import './D2.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import dtshirt from './th2.jpg'
import dtshirt2 from './th2.jpg'
import './image1.css'
import './image2.css'
export default function Create()
{


    return(
    <div>
          <img src={dtshirt} className="heart" height={400} width={400} alt="loading"></img>
          <img src={dtshirt2}   className="heart2" height={400} width={300} alt="loading"></img>
    <div className="Box2">
         
<center>
    <h1>Create Design</h1>
    
    <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Choose color {" "}</label>
      <input type="color" class="form-control" id="name" placeholder="First Name"/>
    </div>
   
    <div class="form-group col-md-4">
      <label for="inputState">Size</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>

  
    </div><br></br>
 


  </div>
  <div class="form-group col-md-4">
    <label for="inputAddress">Select font {" "}</label>
    <input type="range" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>


  <div class="form-row">
      
    <div class="form-group col-md-4">
      <label for="inputState">Text-Back</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>

      <label for="inputState"> Text-Front</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
      </div>
<br></br>
{/* 
      <div class="form-group col-md-4">
      <label for="inputState">{"  "}Text-Front</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div><br></br> */}

    <div class="form-group col-md-4">
      <label for="inputState">{"  "}Type of T-Shirt</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>

    <div class="form-group col-md-4">
      <label for="inputState">{"  "}Sleeve/Half/Full
      </label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div><br></br>

  </div>
  
 

  <Button type="submit">Add Design</Button>{' '}

</form>


</center>





    


</div>  </div>)
}