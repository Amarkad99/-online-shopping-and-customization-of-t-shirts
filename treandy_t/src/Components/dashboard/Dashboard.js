import { toBeVisible } from "@testing-library/jest-dom/dist/matchers";
import { Component } from "react";
import Display from "../design/Display";
import Settings from "../design/Settings";

class Dashboard extends Component{

    state = {
        tshirtColor: 'black',
        upperText: 'This is Upper Text',
        lowerText: 'This is Lower Text',
        url: '',
        textSize: 38,
        textColor: 'white'
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
                     front_lower_text:this.state.lowerText,
                     front_image_to_insert:this.state.url,
                     text_size:this.state.textSize,
                     text_color:this.state.textColor

                     
                    
                    /* id:this.state.textSize,
                     name:this.state.tshirtColor,
                     cost:this.state.textSize*/
                    })                    
                })
            /*  
            let pid=this.state.textSize;
            let pname=this.state.tshirtColor;
            let pcost=this.state.textSize
          //  axios.post(`http://localhost:8080/jpaex/add/${pid}/${pname}/${pcost}`)
           */ 
    }

    render(){
        return(
            <div className="container py-5">
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
                    
                </div>
                </div>
            </div>
        )    
    }
} 

export default Dashboard