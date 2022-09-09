
import Profile from "./Component/ProfilePage";
import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';
//import { Button } from 'react-bootstrap';
//import '../scss/custom.scss';

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
}

export default App;
