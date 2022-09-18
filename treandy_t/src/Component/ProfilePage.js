import React, { useState } from "react"
import  "../CssClass/Box.css";
import Button from 'react-bootstrap/Button';
import Logo from './mylogo4.png';
import NavBar from "./NavBar";
import { Nvabar1 } from "../Orderhistory";
//import CreateDesign from "./Component/CreateDesign";

export default function Profile()
{
    let [fname,setFname]=useState("")
    let [lname,setLname]=useState("")
    let [gender,setGender]=useState("")
    let [email,setEmail]=useState("")
    let [mobileno,setMobileNo]=useState("")
    let [address,setAddress]=useState("")

     function FirstName(event)
     {
        setFname(event.target.value)
     }

     function LastName(event)
     {
        setLname(event.target.value)
     }
     function EmailId(event)
     {
        setEmail(event.target.value)
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
                


        }

    return(
             <div>
                <Nvabar1></Nvabar1>
        <div className="profileblock">
           
        <img src={Logo}  className="mylogoprofile" alt="Logo image" width="120" height="120"></img>                     
        <center><h1>Profile</h1></center> 
        <form method="" action="">
    <div class="form-group">
        <label for="First Name">First Name:</label>
        <input type="text" class="form-control" id="firstName" name="firstName" onBlur={FirstName} />
    </div>
    <div class="form-group">
        <label for="Last Name">Last Name:</label>
        <input type="text" class="form-control" id="lastName" name="lastName" onBlur={LastName}  />
    </div>
    <div class="form-group">
        <label for="Gender">Gender:</label>
        <input type="text" class="form-control" id="gender" name="gender" onBlur={Gender} />
    </div>
    <div class="form-group">
        <label for="Email Id">Email:</label>
        <input type="email" class="form-control" id="emailId" name="emailId" onBlur={EmailId} />
    </div>
    <div class="form-group">
        <label for="Mobile No">Mobile No:</label>
        <input type="text" class="form-control" id="mobileNo" name="mobileNo"  onBlur={MobileNo}/>
    </div>
    <div class="form-group">
        <label for="Address">Address Line:</label>
        <input type="text" class="form-control" id="address" name="address" onBlur={Address}/>
    </div>
    <div class="form-group">
        <label for="Street">Street:</label>
        <input type="text" class="form-control" id="street" name="city" onBlur={Street}/>
    </div>
    <div class="form-group">
        <label for="City">City:</label>
        <input type="text" class="form-control" id="city" name="city" onBlur={City}/>
    </div>
    <div class="form-group">
        <label for="Pin Code">Pin Code:</label>
        <input type="text" class="form-control" id="pinCode" name="pinCode" onBlur={PinCode}/>
    </div><br></br><br></br>

    <center><Button variant="flat" size="xl" onClick={Update}>
        Update
      </Button> </center>
  
    </form>
     </div>
     </div> 
    )
}

//<button type="submit" class="btn btn-default" onClick={profile}>Submit</button>
//<button  type="submit" class="btn btn-default" onClick={update}>Edit</button>