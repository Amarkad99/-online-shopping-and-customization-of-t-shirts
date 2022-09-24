import { toBeVisible } from "@testing-library/jest-dom/dist/matchers";
import { Component } from "react";
import Display from "./Display";
import Settings from "./Settings";
import "./common.css"
import Button from 'react-bootstrap/Button';
 import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate } from "react-router-dom";

class Customize extends Component{

   
    state = {
        tshirtColor: 'white',
        upperText: 'Here Upper Text',
        lowerText: 'Here Lower Text',
        url: '',
        textSize: 30,
        textColor: '',
        message:'',
        data:''
    }

   


    handleTshirtColor = (e)=>{
        this.setState({tshirtColor: e.target.id});
    }

    handleUpperText = (e) =>{
        this.setState({upperText: e.target.value})
    }

    handleLowerText = (e) =>{
        this.setState({lowerText: e.target.value})
    }

    handleImageUpload = (e) =>{

        const reader = new FileReader();
        reader.onload = () =>{
          if(reader.readyState === 2){
            this.setState({url: reader.result})
          }
        }
        reader.readAsDataURL(e.target.files[0])
        
    }
    

    handleTextSize = (e) =>{
        this.setState({textSize: e.target.value})
    }

    formatText(){
        const size = this.state.textSize;
        return parseInt(size);
    }

    handleTextColor = (e) =>{
        this.setState({textColor: e.target.value})
    }

    saveTshirtDetails = (e) =>{
        console.log("T-shirt Details");

        console.log("   T-shirt Color=",this.state.tshirtColor,
        "   Upper Text=",this.state.upperText,
        "   Lower Text=",this.state.lowerText,
            "   Url=",this.state.url,
            "   Text Size=",this.state.textSize,
            "   Text Color=",this.state.textColor);

            fetch('http://localhost:8080/customization/insert', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body:JSON.stringify({
                     t_shirt_color:this.state.tshirtColor,
                     front_upper_text:this.state.upperText,
                    // front_lower_text:this.state.lowerText,
                    // front_image_to_insert:this.state.url,
                     text_size:this.state.textSize,
                     text_color:this.state.textColor

                     
                    
                    /* id:this.state.textSize,
                     name:this.state.tshirtColor,
                     cost:this.state.textSize*/
                    })                    
                }).then(response => response.json())
                .then(data =>{
                     if(data.msg === "succsess")
                     {
                       this.setState({massage:"Customization Details Added Sussesfully..."})
                       Navigate("/payment") 
                     }
                     else{
                      this.setState({massage:"Your Order And Payment is Done"})
                     }
                } );
            /*  
            let pid=this.state.textSize;
            let pname=this.state.tshirtColor;
            let pcost=this.state.textSize
          //  axios.post(`http://localhost:8080/jpaex/add/${pid}/${pname}/${pcost}`)
           */ 
    }

    render(){
        return(
          <div >
             <div>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
    <a class="nav-link " id="home-tab" data-toggle="tab" href="http://localhost:3000/" role="tab" aria-controls="home" aria-selected="true">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " id="profile-tab"  data-toggle="tab" role="tab" href="http://localhost:3000/profile" aria-controls="profile" aria-selected="false">Profile</a>
  </li>
  <li class="nav-item">
        <a class="nav-link active" id="profile-tab" data-toggle="tab" href="http://localhost:3000/customize" role="tab" aria-controls="profile" aria-selected="false">Customise</a> 
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
                </ul>
                 <div class="tab-content" id="myTabContent">
                      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
                     <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
                      <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"></div>
                 </div>
            </div>
            <div className="bg6">              
                <div className="container py-5">
                   <center><h3 className="custh3"><b>Customise Your T-Shirt</b></h3></center> <br /><br />   
                     <div className="row">
                        <div className="col-lg-8">
                            <Display display={this.state}
                             textFormat={this.formatText()}
                            ></Display>

                        </div>
                    <div className="col-lg-4">
                     
                    <Settings color={this.handleTshirtColor}
                              upperText={this.handleUpperText}
                              lowerText={this.handleLowerText}
                              uploadImage={this.handleImageUpload}
                              textSize={this.handleTextSize}
                              textColor={this.handleTextColor}
                              saveDetails={this.saveTshirtDetails}
                    ></Settings>
                    
                    <h3 text_color="blue">{this.state.massage}</h3>
                </div>
                </div>
              </div>
            </div>
        </div>
            
        )    
    }
} 
export default Customize