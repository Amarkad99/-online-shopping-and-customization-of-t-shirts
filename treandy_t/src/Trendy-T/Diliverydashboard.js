import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';



function Diliverydashboard() {
  let[status,setStatus]=useState(false)
  let[status1,setStatus1]=useState(false)
  let data1=[{id:1,"name":"amar","mobile":1234556,"Address":"abc","amount":10},{id:2,"name":"pavan","mobile":1234556,"Address":"axyzc","amount":10},{id:3,"name":"amar","mobile":1234556,"Address":"abc","amount":10}]
  let [order,setOrder]=useState("")
  let [history,setHistory]=useState("")
  
  
   function show_orders(){
    setStatus(true)
    setStatus1(false)

    // var promise = fetch("https://reqres.in/api/users?page=2", {
    //                    "method": "GET",
    //                  }).then(response => {
    //                       console.log("the first response ",response)
    //                 let x = response.json()         //asynchronous operation
    //                     console.log("after json",x)     //x is the Promise
    //                      return x
    //                 }).then(jsonobj => {
    //                    this.setState({
    //                      data1: jsonobj.data
    //                    } )}) 
                     
    //     promise.catch(err => { console.log(err); 
        //             });
   
  
        setOrder(data1.map((obj)=>{return <tr>
    <td>{obj.id}</td>
    <td>{obj.name}</td>
    <td>{obj.mobile}</td>
    <td>{obj.Address}</td>
    <td>{obj.amount}</td>
    <select><option name="no_delivered" value ="not_delivered"> Not Delivered</option>
            <option name="delivered" value ="delivered"> Delivered</option></select>
    
    </tr> }))}


function show_History(){
  setStatus1(true)
  setStatus(false)


  // var promise = fetch("https://reqres.in/api/users?page=2", {
  //                    "method": "GET",
  //                  }).then(response => {
  //                       console.log("the first response ",response)
  //                 let x = response.json()         //asynchronous operation
  //                     console.log("after json",x)     //x is the Promise
  //                      return x
  //                 }).then(jsonobj => {
  //                    this.setState({
  //                      data1: jsonobj.data
  //                    } )}) 
                   
  //     promise.catch(err => { console.log(err); 
      //             });
 

  setHistory(data1.map((obj)=>{return <tr>
  <td>{obj.id}</td>
  <td>{obj.name}</td>
  <td>{obj.mobile}</td>
  <td>{obj.Address}</td>
  <td>{obj.amount}</td>
  </tr> }))}

  return (

    <div class="card text-center">
       
                <div class="card-header">
                  <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item">
                      <a class="nav-link active" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#" onClick={show_History} >Order history</a>
                    </li>
                    
                    <li class="nav-item">
                      <a class="nav-link active" href="#">logout</a>
                    </li>
                    
                  </ul>

                </div>
                <div class="card-body">
                  <h5 class="card-title">This is For delivery Parterner</h5>
                  <a href="#" class="btn btn-primary" onClick={show_orders}>Order To be Deliver</a>
                </div>
                <div class="container">
           {status&& <center><h1>Delivery Details</h1></center>}

            {status && <table  class="table table-striped">  <thead><tr class="danger">
             
            <th>Id</th>
            <th>Name</th>
            <th>Mobile No</th>
            <th>Address</th>
            <th>Amount</th>
            <th>status</th></tr>
            </thead>
            <tbody>{order}</tbody>
           
          </table>}
{/* 
// this is for history */}
          {status1&& <center><h1>Order History</h1></center>}
           {status1 && <table  class="table table-striped">  <thead><tr class="danger">
              
              <th>Id</th>
              <th>Name</th> 
              <th>Mobile No</th>
              <th>OrderDate</th>
              <th>DeliverDate</th>
              <th>Amount</th></tr>
               </thead>
               <tbody>{history}</tbody>
             </table>}
              </div>
              </div>
             
            );
  }

export default Diliverydashboard;