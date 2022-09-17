import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


import Button from 'react-bootstrap/Button';

import NavBar from "./NavBar";
import { useSelector } from "react-redux";


export default function Profile()
{ 
    const Emailid = useSelector((state)=>{return state.Emailid});
    console.log("Emailid",Emailid);


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
        let result=await fetch(`http://localhost:8080/user/profile/${Emailid}`);
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
                    first_name:fname,last_name:lname,gender:gender, email_id:Emailid,mobile_number:mobileno,address_line:address,street:street,city:city,pincode:pincode,})
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
            <div class="topnav">
  <a href="http://localhost:3000/home">Home</a>
  </div>
        <div className="box3">
        

                           
        <center><h1>Profile</h1></center> 
        <form method="" action="">
    <div class="form-group">
        <label for="First Name">First Name:</label>
        <input type="text" defaultValue={fname} class="form-control" id="firstName" name="firstName" onBlur={FirstName} />
    </div>
    <div class="form-group">
        <label for="Last Name">Last Name:</label>
        <input type="text" defaultValue={lname} class="form-control" id="lastName" name="lastName" onBlur={LastName}  />
    </div>
    <div class="form-group">
        <label for="Gender">Gender:</label>
        <input type="text" defaultValue={gender} class="form-control" id="gender" name="gender" onBlur={Gender} />
    </div>
    <div class="form-group">
        <label for="Mobile No">Mobile No:</label>
        <input type="text" defaultValue={mobileno} class="form-control" id="mobileNo" name="mobileNo"  onBlur={MobileNo}/>
    </div>
    <div class="form-group">
        <label for="Address">Address Line:</label>
        <input type="text" defaultValue={address} class="form-control" id="address" name="address" onBlur={Address}/>
    </div>
    <div class="form-group">
        <label for="Street">Street:</label>
        <input type="text" defaultValue={street} class="form-control" id="street" name="city" onBlur={Street}/>
    </div>
    <div class="form-group">
        <label for="City">City:</label>
        <input type="text" defaultValue={city} class="form-control" id="city" name="city" onBlur={City}/>
    </div>
    <div class="form-group">
        <label for="Pin Code">Pin Code:</label>
        <input type="text" defaultValue={pincode} class="form-control" id="pinCode" name="pinCode" onBlur={PinCode}/>
    </div><br></br>

   <center> <Button variant="flat" size="xl" onClick={Update}>
        Update
      </Button> &nbsp;&nbsp;&nbsp;&nbsp;

      </center>

      
  
    </form>
     </div>
     </div>  
        
    )
}

//<button type="submit" class="btn btn-default" onClick={profile}>Submit</button>
//<button  type="submit" class="btn btn-default" onClick={update}>Edit</button>