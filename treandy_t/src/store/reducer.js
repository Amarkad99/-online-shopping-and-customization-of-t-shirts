import {createStore} from "redux";
//import { configureStore } from '@reduxjs/toolkit'
const counterReducer = (state={Emailid:"",password:"" ,items:[] },action)=>{

    if(action.type==="save")
    {     console.log("here")
        return {
            Emailid:action.payload.Emailid,
            password:action.payload.password,
        };
    }

    if(action.type==="add"){
        console.log("here2")
        return {
            Emailid:action.payload.Emailid,
            items:action.payload.cart
        };
    }
    
    return state;

} 

const store = createStore(counterReducer);
/*
const store = configureStore({
    counterReducer,
  })
*/
export default store;