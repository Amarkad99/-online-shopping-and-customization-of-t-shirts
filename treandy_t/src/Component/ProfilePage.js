import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import "../common.css"

import Button from 'react-bootstrap/Button';


import { useSelector } from "react-redux";

export default function Profile()
{ 
   let navigate=useNavigate();
  const data=sessionStorage.getItem('auth')
     const {email,password}=JSON.parse(data);
      console.log(data);


    let [fname,setFname]=useState("")
    let [lname,setLname]=useState("")
    let [gender,setGender]=useState("")
    let [mobileno,setMobileNo]=useState("")
    let [address,setAddress]=useState("")
    let [street,setStreet]=useState("")
    let [city,setCity]=useState("")
    let [pincode,setPincode]=useState("")


    


    const params=useParams();

    useEffect(()=>{
        
        getUserDetails();
    },[])

    const getUserDetails=async()=>{
        console.warn("param=",params)
        let result=await fetch(`http://localhost:8080/user/profile/${email}`);
        result = await result.json();
       console.warn("Result=",result);

       setFname(result.first_name);
       setMobileNo(result.mobile_number);
       setLname(result.last_name);
       setGender(result.gender);
       setAddress(result.address_line)
       setStreet(result.street);
       setCity(result.city);
       setPincode(result.pincode);
    }
    

    
     function FirstName(event)
     {
        setFname(event.target.value)
     }

     function LastName(event)
     {
        setLname(event.target.value)
     }

     function MobileNo(event)
     {
        setMobileNo(event.target.value)
     }
     function Address(event)
     {
        setAddress(event.target.value)
     }
     function Street(event)
     {
        setAddress(event.target.value)
     }
     function City(event)
     {
        setAddress(event.target.value)
     }
     function PinCode(event)
     {
        setAddress(event.target.value)
     }


     function Gender(event)
     {
        setGender(event.target.value)
     }
        function Update(event)
        {

            console.log(event.target.value)
            
            fetch('http://localhost:8080/user/edit', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body:JSON.stringify({
                    first_name:fname,last_name:lname,gender:gender, email_id:email,mobile_number:mobileno,address_line:address,street:street,city:city,pincode:pincode,})
                })
              .then(response => response.json())
              .then(data =>{
                setFname(data.first_name);
                setMobileNo(data.mobile_number);
                setLname(data.last_name);
                setGender(data.gender);
                setAddress(data.address_line)
                setStreet(data.street);
                setCity(data.city);
                setPincode(data.pincode);
              });
               


        }

    return(
           <div>

<ul class="nav nav-tabs" id="myTab" role="tablist">
<li class="nav-item">
    <a class="nav-link " id="home-tab" data-toggle="tab" href="http://localhost:3000/" role="tab" aria-controls="home" aria-selected="true">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" id="profile-tab"  data-toggle="tab" role="tab" href="http://localhost:3000/profile" aria-controls="profile" aria-selected="false">Profile</a>
  </li>
  <li class="nav-item">
        <a class="nav-link" id="profile-tab" data-toggle="tab" href="http://localhost:3000/customize" role="tab" aria-controls="profile" aria-selected="false">Customise</a> 
</li>
  <li class="nav-item">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="http://localhost:3000/Cart1" role="tab" aria-controls="contact" aria-selected="false">Cart</a>
  </li>    
<li class="nav-item">
        <a class="nav-link" id="profile-tab" data-toggle="tab" href="http://localhost:3000/myOrder" role="tab" aria-controls="profile" aria-selected="false">Orders</a> 
</li>
<li class="nav-item">
        <a class="nav-link" id="profile-tab" data-toggle="tab" href="http://localhost:3000/signup" role="tab" aria-controls="profile" aria-selected="false">Create Account</a> 
</li>
<li class="nav-item">
        <a class="nav-link" id="profile-tab" data-toggle="tab" href="http://localhost:3000/login" role="tab" aria-controls="profile" aria-selected="false">Login</a> 
</li>
<li class="nav-item">
        <a class="nav-link" id="profile-tab" data-toggle="tab" href="http://localhost:3000/signout" role="tab" aria-controls="profile" aria-selected="false">Logout</a> 
</li>


  <li>

  <form class="d-flex" role="search">
        <input class="form-control me-1" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"></div>
</div>

<img className="bg6"></img>
        <div className="profileblock">
        

                           
        <center><h1 className= "text-uppercase">Profile</h1></center> 
        <form method="" action="">
    <div class="form-group">
       <b> <label for="First Name">First Name:</label></b>
        <input type="text" defaultValue={fname} class="form-control" id="firstName" name="firstName" onBlur={FirstName} />
    </div>
    <div class="form-group">
       <b><label for="Last Name">Last Name:</label></b> 
        <input type="text" defaultValue={lname} class="form-control" id="lastName" name="lastName" onBlur={LastName}  />
    </div>
    <div class="form-group">
       <b> <label for="Gender">Gender:</label></b>
        <input type="text" defaultValue={gender} class="form-control" id="gender" name="gender" onBlur={Gender} />
    </div>
    <div class="form-group">
       <b> <label for="Mobile No">Mobile No:</label></b>
        <input type="text" defaultValue={mobileno} class="form-control" id="mobileNo" name="mobileNo"  onBlur={MobileNo}/>
    </div>
    <div class="form-group">
        <b><label for="Address">Address Line:</label></b>
        <input type="text" defaultValue={address} class="form-control" id="address" name="address" onBlur={Address}/>
    </div>
    <div class="form-group">
       <b> <label for="Street">Street:</label></b>
        <input type="text" defaultValue={street} class="form-control" id="street" name="city" onBlur={Street}/>
    </div>
    <div class="form-group">
        <b><label for="City">City:</label></b>
        <input type="text" defaultValue={city} class="form-control" id="city" name="city" onBlur={City}/>
    </div>
    <div class="form-group">
       <b> <label for="Pin Code">Pin Code:</label></b>
        <input type="text" defaultValue={pincode} class="form-control" id="pinCode" name="pinCode" onBlur={PinCode}/>
    </div><br></br>
    <center><div class="d-flex justify-content-center">
                  <button type="button"
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={Update}>Update</button>
                </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

             </center>
    </form>
     </div>
     </div>  
        
    )
}

