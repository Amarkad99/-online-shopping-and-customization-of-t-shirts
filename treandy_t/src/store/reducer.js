import {createStore} from "redux";
//import { configureStore } from '@reduxjs/toolkit'
const counterReducer = (state={Emailid:"",password:""},action)=>{

    if(action.type==="save")
    {     console.log("here")
        return {
            Emailid:action.payload.Emailid,
            password:action.payload.password,
            
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