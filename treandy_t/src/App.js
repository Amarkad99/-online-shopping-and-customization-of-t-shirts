import React from "react";
//import { Link, Outlet } from "react-router-dom"
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import Tshirt_Details from "./Components/Tshirt_Details";
import Orderhistory from "./Components/Orderhistory";
import CreateDesign from "./Components/CreateDesign";
import ShippingDetails from "./Components/ShippingDetails";
import Report from "./Components/Report";
import Payment from "./Components/Payment"
import Profile from "./Components/ProfilePage";
import ButtonDesign from "./Components/ButtonDesign";
import OrderDetails from "./Components/OrderDetails";
//import Redymade from "./Components/Redymade";
import DeliveryDetails from "./Components/DeliveryDetails";
//import HomePage from "./Components/HomePage";
import OwnerDashBoard from "./Components/OwnerDashBoard";
import ProductDashboard from "./Components/ProductDashboard";
import ProductDetails from "./Components/ProductDetails";
import ShoppingCart from "./Components/ShoppingCart";
import Dashboard from "./Components/dashboard/Dashboard";
import Login from "./Login";
import store from "./store/reducer";
import { Provider } from 'react-redux';
import Registration2 from "./Registration2";


/*
import ButtonDesign from "./Component/ButtonDesign";
import MyOrder from "./Component/OrderDetails";
import Redymade from "./Component/Redymade";
import DeliveryDetails from "./Component/DeliveryDetails";
import Home from "./Component/Home";

*/


function App() {
  return (
   <div>
  
    <ButtonDesign></ButtonDesign>
    <BrowserRouter>
    
    <HeaderComponent></HeaderComponent>
    <Provider store={store}>
              <Routes>
             
              
              <Route path="/" element={<Login></Login>}  /> 
              <Route path="Signup" element={<Registration2 />} />
                   
                  
                  <Route path="/" element={<Login></Login>}  /> 
                  <Route path="delivery/details" element={<DeliveryDetails></DeliveryDetails>}></Route>
                  <Route path="profile" element={<Profile></Profile>} />
                  <Route path="order/details" element={<OrderDetails></OrderDetails>} />
                  <Route path="create/design" element={<CreateDesign></CreateDesign>} />
                  <Route path="order/history" element={<Orderhistory></Orderhistory>} />
                  <Route path="payment" element={<Payment></Payment>} />
                  <Route path="report" element={<Report></Report>} />
                  <Route path="shipping/details" element={<ShippingDetails></ShippingDetails>} />
                  <Route path="tshirt/details" element={<Tshirt_Details></Tshirt_Details>} />
                  <Route path="owner/dashboard" element={<OwnerDashBoard></OwnerDashBoard>} />
                  <Route path="product/dashboard" element={<ProductDashboard></ProductDashboard>} />
                  <Route path="product/details" element={<ProductDetails></ProductDetails>} />
                  <Route path="shopping/cart" element={<ShoppingCart></ShoppingCart>} />
                  <Route path="dashboard" element={<Dashboard></Dashboard>} />

                  
              </Routes>
              
              </Provider>
            
    </BrowserRouter>
    
   </div>

   
  ); 
}

export default App;
