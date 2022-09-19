// import EventTest from './Practice21Jul';
// import {ShowInput} from './Practice21Jul'
 //import {ShowList} from './22July/PracticeList' 
// import {ShoppingCart} from './22July/ShoppingCart'
//import Test from './22July/Test'
//import Tru from './22July/Tru'

import React from 'react'
import ShoppingCart from './Trendy-T/ShoppingCart'
//import Trial from './Trendy-T/Trial'
import HomePage from './Trendy-T/HomePage'
import OwnerDashBoard from './Trendy-T/OwnerDashBoard'
import ProductDashboard from'./Trendy-T/ProductDashboard'
import ProductDetails from './Trendy-T/ProductDetails'
//import {BrowserRouter as BRouter } from 'react-router-dom'
//import { Link } from "react-router-dom";
import Security from './Trendy-T/Security'
import Security2 from './Trendy-T/Security2'
import Diliverydashboard from './Trendy-T/Diliverydashboard'
import Login from './Trendy-T/Login'
import Readymade from './Trendy-T/Readymade'
import Registration2 from './Trendy-T/Registration2'


import {BrowserRouter,Routes,Route} from "react-router-dom";
function AppVersion2()
{
    return ( 
        <div>
             <BrowserRouter>
              <Routes>
                <Route path="/home" element={<HomePage></HomePage>} />
                <Route path="/pDash" element={<ProductDashboard></ProductDashboard>} />
                <Route path="pDetails" element={<ProductDetails></ProductDetails>} />
                <Route path="shoppingCart" element={<ShoppingCart></ShoppingCart>} />

                <Route path="security" element={<Security></Security>} />
                <Route path="security2" element={<Security2></Security2>} />
                <Route path="deliverydash" element={<Diliverydashboard></Diliverydashboard>} />
                <Route path="login" element={<Login></Login>} />
                <Route path="readymade" element={<Readymade></Readymade>} />
                <Route path="registration2" element={<Registration2></Registration2>} />



              </Routes>
            </BrowserRouter>

            
        {/*  <ProductDetails></ProductDetails> 
        <HomePage></HomePage>
        <ProductDashboard></ProductDashboard>
        <ShoppingCart></ShoppingCart>
        <OwnerDashBoard></OwnerDashBoard>
        <Trial></Trial>
        <EventTest></EventTest>
            <ShowInput></ShowInput>
            <ShowList></ShowList>
            <ShoppingCart></ShoppingCart>
            <Test></Test>
            <ShowList></ShowList>
            <Tru></Tru>
            <HomePage></HomePage> 
          <Tru></Tru> */}
        
        </div>
            
        
      
      
    )
}
export default AppVersion2;