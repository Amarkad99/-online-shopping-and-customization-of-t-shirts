import React from "react";
import Tshirt_Details from "./Tshirt_Details";
// import Orderhistory from "./Orderhistory";
// import Create from "./CreateDesign";
// import ShippingDetails from "./ShippingDetails";
// import Report from "./Report";

import Profile from "./Component/ProfilePage";
import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';
//import { Button } from 'react-bootstrap';
//import '../scss/custom.scss';
// import Payment from "./Payment";

import CreateDesign from "./Component/CreateDesign";
import MyOrder from "./Component/OrderDetails";
import Redymade from "./Component/Redymade";
import DeliveryDetails from "./Component/DeliveryDetails";

function App() {
  return (
   <div>
    {/*
    <Profile></Profile>
    <CreateDesign></CreateDesign>
    <MyOrder></MyOrder>
     <Redymade></Redymade>
  */}
    <CreateDesign></CreateDesign>
    <DeliveryDetails></DeliveryDetails>
     
   </div>

   
  );
  //  <Payment>  </Payment>
//  <Report>  </Report>
  //  <ShippingDetails>  </ShippingDetails>
//  <Create>  </Create>
 //<Orderhistory>  </Orderhistory> 
 // <Tshirt_Details></Tshirt_Details>

  
}

export default App;
