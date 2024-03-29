import React from "react";
//import { Link, Outlet } from "react-router-dom"

import { BrowserRouter,Route, Routes } from 'react-router-dom';

import Tshirt_Details from "./Tshirt_Details";
 import Orderhistory from "./Orderhistory";
 import Create from "./CreateDesign";
 import ShippingDetails from "./ShippingDetails";
 import Report from "./Report";
 import Payment from "./Payment"
 import { makeStyles, CssBaseline, createTheme, ThemeProvider } from '@material-ui/core';

import Profile from "./Component/ProfilePage";
import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';
//import { Button } from 'react-bootstrap';
//import '../scss/custom.scss';
// import Payment from "./Payment";

import ButtonDesign from "./Component/ButtonDesign";

import Redymade from "./Component/Redymade";
import DeliveryDetails from "./Component/DeliveryDetails";
import Home from "./Component/Home";
import Login from "./Login";
import store from "./store/reducer";
import { Provider } from 'react-redux';
import Registration2 from "./Registration2";
import HomePage from "./homepage2";
import Login1 from "./Login1";
import Changepassword from "./Login2";
import Customize from "./Customize";
import Cart1 from "./Trailcart";
import MyOrder from "./OrderDetails";
import Signout from "./Signout";
import SideMenu  from "./Components/SideMenu";
import ProductTable from "./ProjectComponents/ProductTable"
import DeliveryDashboard from "./ProjectComponents/DeliveryDashboard";
import DeliveryTable from "./ProjectComponents/DeliveryTable";
import OrderTable from "./Components/OrderTable"
import UserProductForm from "./ProjectComponents/UserProductForm"
import OrderHistory  from "./OwnerDashBoard/OrderHistory"
 

const theme = createTheme({
  palette: {
    primary: {
      main: "#333996",
      light: '#3c44b126'
    },
    secondary: {
      main: "#f83245",
      light: '#f8324526'
    },
    background: {
      default: "#f4f5fd"
    },
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  },
  props:{
    MuiIconButton:{
      disableRipple:true
    }
  }
})


const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})

function App() {
  const classes = useStyles();

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
              <Route path="/login" element={<Login></Login>}  /> 
              <Route path="signout" element={<Signout></Signout>}  /> 
              <Route path="/myOrder" element={<MyOrder></MyOrder>}  /> 
              <Route path="/Cart1" element={<Cart1></Cart1>}  /> 
              <Route path="Signup" element={<Registration2 />} />
              <Route path="/" element={<HomePage/>} />
              <Route path="/Question" element={<Login1></Login1>}  />
              <Route path="/Changepassword" element={<Changepassword></Changepassword>}  /> 
                  <Route path="delivery/details" element={<DeliveryDetails></DeliveryDetails>}></Route>
                  <Route path="profile" element={<Profile></Profile>} />
                  <Route path="order/details" element={<MyOrder></MyOrder>} />
                  <Route path="create/design" element={<Create></Create>} />
                  <Route path="order/history" element={<Orderhistory></Orderhistory>} />
                  <Route path="payment" element={<Payment></Payment>} />
                  <Route path="customize" element={<Customize></Customize>} />
                  <Route path="report" element={<Report></Report>} />
                  <Route path="shipping/details" element={<ShippingDetails></ShippingDetails>} />
                  <Route path="tshirt/details" element={<Tshirt_Details></Tshirt_Details>}/>
                  <Route path="user/product" element={<UserProductForm></UserProductForm>}
                   />
                 
                 
                  
              </Routes>
              </Provider>
    </BrowserRouter>

    <ThemeProvider theme={theme}>
      <div>
           
    <BrowserRouter>
    <Routes>
    <Route path="/ownerDashboard" element={<Provider store={store}><SideMenu></SideMenu></Provider>}>
    <Route path="productTable" element={<ProductTable></ProductTable>}/>
    <Route path="orderTable" element={<OrderTable></OrderTable>}/>
    <Route path="orderHistory" element={<OrderHistory></OrderHistory>}/>
    </Route>    
    </Routes></BrowserRouter>
  
      </div>
      <CssBaseline />
    </ThemeProvider>

    <ThemeProvider theme={theme}>
      <div>
           
    <BrowserRouter>
    <Routes>
    <Route path="/deliveryDashboard" element={<Provider store={store}><DeliveryDashboard></DeliveryDashboard></Provider>}>
    <Route path="deliveryTable" element={<DeliveryTable></DeliveryTable>}/>
    <Route path="deliveryHistory" element={<DeliveryTable></DeliveryTable>}/>
     
    </Route>    
    </Routes></BrowserRouter>
  
      </div>
      <CssBaseline />
    </ThemeProvider>
    
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
