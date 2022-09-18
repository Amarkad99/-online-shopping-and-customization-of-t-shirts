<<<<<<< HEAD:treandy_t/src/Payment.js
import React,{useState} from "react";
import './paymentbox.css'
import {Nvabar1} from './Orderhistory'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Payment()
{
  let[data,setData]=useState("");

  
  function handler(event)
  {

console.log(event.target.value)
 setData(event.target.value);
return(<div>

<p>you have entered {data}</p>
  
</div>)
  }




return(
<div>
<Nvabar1></Nvabar1>
<div  className="Box3"  >

<center>
  <fieldset > 
<h1> Payment</h1>
<br></br>
Amount <input type="number" onBlur={handler} ></input>
<br></br>
<br></br>
<br></br> <Button type="submit" >Pay </Button>{' '}<br></br>
<br></br>
<p>{data}{" "} </p>
</fieldset> 
</center>
</div>
</div>)


    
=======
import React,{useState} from "react";
import '../CssClass/paymentbox.css'
import {Nvabar1} from './Orderhistory'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Payment()
{
  let[data,setData]=useState("");

  
  function handler(event)
  {

console.log(event.target.value)
 setData(event.target.value);
return(<div>

<p>you have entered {data}</p>
  
</div>)
  }




return(<div  className="Box3"  >
   <Nvabar1></Nvabar1>
<center>
  <fieldset > 
<h1> Payment</h1>
<br></br>
Amount <input type="number" onBlur={handler} ></input>
<br></br>
<br></br>
<br></br> <Button type="submit" >Pay </Button>{' '}<br></br>
<br></br>
<p>you have paid {data}{" "} </p>
</fieldset> 
</center>

</div>)


    
>>>>>>> 95ce4f32014b92db108bf86e64c4cde63fb966ca:treandy_t/src/Components/Payment.js
}