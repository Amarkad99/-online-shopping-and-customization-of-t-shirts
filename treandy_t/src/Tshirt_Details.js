import React from "react";
import './box.css'
import  './D3.css'

import Button from 'react-bootstrap/Button';
import yelloshirt from './yello.png'
import blueshirt from './blue.png'
import './image2.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nvabar1 } from "./Orderhistory";
export default function TshirtDetails()
{








    return(<div>
<Nvabar1></Nvabar1>

<img src={yelloshirt} className="ytshirt" height={180} width={180} alt="loading"></img>
<Button className="btn1">Select image</Button>
<img src={blueshirt} className="btshirt" height={180} width={180} alt="loading"></img>
<Button className="btn2">Select image</Button>
<center >
    <h1>Fill Details</h1>
    <div class="form-group col-md-4">
    <label for="inputAddress">color of Tshirt {" "}</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="color of tshirt"/>
  </div>
  <div class="form-group col-md-4">
    <label for="inputAddress">Color {" "}</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="variety  of color"/>
  </div>
  <div class="form-group col-md-4">
    <label for="inputAddress">Sleeve Type {" "}</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="sleeve"/>
  </div>
  <div class="form-group col-md-4">
    <label for="inputAddress">Brand {" "}</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="brand name"/>
  </div>
 

  <div class="form-group col-md-4">
    <label for="inputAddress">Material {" "}</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="t shirt cloth material"/>
  </div>
  <div class="form-group col-md-4">
    <label for="inputAddress">Price {" "}</label>
    <input type="number" class="form-control" id="inputAddress" placeholder="Price of t shirt.."/>
  </div>
  <div >
<lable className="blue">size Available  :{"                "}</lable>
<label for="vehicle1">S</label>
 <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"></input>

  <label for="vehicle1"> M</label>&nbsp;
<input type="checkbox" id="vehicle2" name="vehicle2" value="Car"></input>

<label for="vehicle1"> L</label>&nbsp;
<input type="checkbox" id="vehicle2" name="vehicle2" value="Car"></input>

<label for="vehicle1"> XL</label>&nbsp;
<input type="checkbox" id="vehicle2" name="vehicle2" value="Car"></input>

<div class="form-group col-md-4">
<textarea name="ta" rows="2" cols="50" placeholder="Additional Details"></textarea>
  </div>
  {/* <Button type="submit" className="add">Add </Button>
  <Button type="submit" >Save </Button> */}
  </div>
  <Button type="submit" className="add">Add </Button>
  <Button type="submit" >Save </Button>
</center>
    </div>)
}