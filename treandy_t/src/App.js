import React from "react";
//import { Link, Outlet } from "react-router-dom"

import { BrowserRouter,Route, Routes } from 'react-router-dom';

import Tshirt_Details from "./Tshirt_Details";
 import Orderhistory from "./Orderhistory";
 import Create from "./CreateDesign";
 import ShippingDetails from "./ShippingDetails";
 import Report from "./Report";
 import Payment from "./Payment"


import Profile from "./Component/ProfilePage";
import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';
//import { Button } from 'react-bootstrap';
//import '../scss/custom.scss';
// import Payment from "./Payment";

import ButtonDesign from "./Component/ButtonDesign";
import MyOrder from "./Component/OrderDetails";
import Redymade from "./Component/Redymade";
import DeliveryDetails from "./Component/DeliveryDetails";
import Home from "./Component/Home";
import Login from "./Login";
import store from "./store/reducer";
import { Provider } from 'react-redux';
import Registration2 from "./Registration2";
import Homepage from "./hw";
import HomePage from "./homepage2";
import Dashboard from "./Customize";
import Login1 from "./Login1";
import Changepassword from "./Login2";
import Customize from "./Customize";
import Product from "./Shivani";

function App() {
  return (
   <div>
    
    {/*
    <Profile></Profile>
    <CreateDesign></CreateDesign>
    <MyOrder></MyOrder>
     <Redymade></Redymade>
     <DeliveryDetails></DeliveryDetails>
     <Create>  </Create>
  */}

    <ButtonDesign></ButtonDesign>
    <BrowserRouter>
    <Provider store={store}>
              <Routes>
              <Route path="/" element={<Login></Login>}  /> 
              <Route path="Signup" element={<Registration2 />} />
              <Route path="home" element={<HomePage/>} />
              <Route path="/Question" element={<Login1></Login1>}  />
              <Route path="/Changepassword" element={<Changepassword></Changepassword>}  /> 
              <Route path="profile" element={<Profile></Profile>} />
              <Route path="payment" element={<Payment></Payment>} />
              <Route path="Customize" element={<Customize></Customize>} />
              <Route path="Shivani" element={<Product></Product>} />
                  
      
                  
                 
              </Routes>
              </Provider>
    </BrowserRouter>
    
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
