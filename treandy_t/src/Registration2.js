import React from 'react';
  import "./Login.css"
  import Button from 'react-bootstrap/Button';
  
  import 'bootstrap/dist/css/bootstrap.min.css';
  
class Registration2 extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
      gender:" ",
      question:" "
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onChangeSelect = this.onChangeSelect.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }

onChangeValue(event) {
  this.setState({gender:event.target.value});
console.log()
}

onChangeSelect(event){
  this.setState({question:event.target.value});
  console.log(event.target.value)
}

  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
        let input = {};
        input["password"] = "";
        input["Firstname"] = "";
        input["Lastname"] = "";
        input["Emailid"] = "";
        input["Mobileno"] = "";
        input["Answer"] = "";
        input["Question"] = "";
        input["Adress"] = "";
        input["Street"] = "";
        input["City"] = "";
        input["Pincode"] = "";
        input["gender"] = "";
        this.setState({input:input});
        console.log(input["username"])
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body:JSON.stringify({

                    password:this.state.input.password,
                    first_name:this.state.input.Firstname,
                    last_name:this.state.input.Lastname,
                    email_id:this.state.input.Emailid,
                    mobile_number:this.state.input.Mobileno,
                    security_question:this.state.question,
                    security_answer:this.state.input.Answer,
                    address_line:this.state.input.Adress,
                    street:this.state.input.Street,
                    city:this.state.input.City,
                    pincode:this.state.input.Pincode,
                    gender:this.state.gender})
                };
        fetch('http://localhost:8080/user/register', requestOptions)
        .then(response => response.json())
        .then(data =>{
             if(data.result === "OK")
             {
               console.log("ok");
             }
        } );
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
   
      if (!input["Emailid"]) {
        isValid = false;
        errors["Emailid"] = "Please enter your EmailId.";
      }

  
      if (typeof input["Emailid"] !== "undefined") {
        const re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;                                             
        if( !re.test(input["Emailid"])){      // 6 length
            isValid = false;
            errors["Emailid"] = "Please enter valid EmailId";
        }
      }
  
  
  
      
      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      }
  
      if (!input["confirm_password"]) {
        isValid = false;
        errors["confirm_password"] = "Please enter your confirm password.";
      }
  
      if (typeof input["password"] !== "undefined") {
        if(input["password"].length < 6){                            // pass length 6
            isValid = false;
            errors["password"] = "Please add at least 6 charachter.";
        }
      }
  
      if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
          
        if (input["password"] != input["confirm_password"]) {    // both
          isValid = false; 
          errors["password"] = "Passwords don't match.";
        }
      }
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (
      
      <div class="box2">  
      <form>
      <div>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
    
    <li class="nav-item">
      <a class="nav-link" id="profile-tab" data-toggle="tab" href="http://localhost:3000" role="tab" aria-controls="Go to Login" aria-selected="false">Go To login</a>
    </li>
    
  </ul>
  <div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"></div>
  </div>
    </div>
       
        
        <center>
        <h2 class="text-uppercase text-center mb-5">Create an account</h2>
            
        </center>
        
        
        <label for="Firstname">Firstname:</label>
             <input  class="form-control form-control-lg"
              type="text" 
              name="Firstname" 
              value={this.state.input.Firstname}
              onChange={this.handleChange}
              placeholder="Enter Firstname" 
              id="Firstname"
              required />

             <label for="Lastname">Lastname:</label>&nbsp;&nbsp;
             <input  class="form-control form-control-lg"
              type="text" 
              name="Lastname" 
              value={this.state.input.Lastname}
              onChange={this.handleChange}
              placeholder="Enter Lastname" 
              id="Lastname" required/>

          
            <label for="username"> EmailId:</label>
            <input  class="form-control form-control-lg"
              type="email" 
              name="Emailid" 
              value={this.state.input.Emailid}
              onChange={this.handleChange}
              placeholder="Enter Emailid" 
              
              id="Emailid" required/>
  
              <div className="text-danger">{this.state.errors.Emailid}</div>
        
  
        
  
          <div class="Input">
            <label for="password">Password:</label>
            <input  class="form-control form-control-lg"
              type="password" 
              name="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              placeholder="Enter password" 
              id="password" required />
  
              <div className="text-danger">{this.state.errors.password}</div>
          </div>
  
          <div class="Input">
            <label for="password">Confirm Password:</label>
            <input  class="form-control form-control-lg"
              type="password" 
              name="confirm_password" 
              value={this.state.input.confirm_password}
              onChange={this.handleChange}
              placeholder="Enter confirm password" 
              id="confirm_password" required />
  
              <div className="text-danger">{this.state.errors.confirm_password} </div>
          </div>
           
          <label for="password">Select Security Question:</label>
          <select  value={this.state.question}  onChange={this.onChangeSelect}
              class="form-control form-control-lg">
    <option value="Who is your favourite actor">Who is your favourite actor?</option>
    <option value="What is your mother name">What is your mother name?</option>
    <option value="What is your childhood nickname">What is your childhood nickname?</option>
    
</select>

<div class="Input" >
            <label for="password">Answer:</label><br></br>
            <input type="text" class="form-control form-control-lg"
            name="Answer"
            placeholder="Enter Your Answer" 
            value={this.state.input.Answer}
            onChange={this.handleChange} required></input>
</div>
              
      


             <label for="Mobileno">Mobileno :</label>
             <input  class="form-control form-control-lg"
              type="number" 
              value={this.state.input.Mobileno}
              name="Mobileno" 
              placeholder="Enter Mobileno" 
              onChange={this.handleChange}
              id="Mobileno" 
              required/>
              

              
             <label for="Adress">Adress 1St Line :</label>
             <textarea class="form-control form-control-lg"
              name="Adress" 
              value={this.state.input.Adress}
              onChange={this.handleChange}
              placeholder="Enter Adress" 
              
              id="Adress"
              required/>
              

              
             <label for="Street">Street :</label>
             <input   class="form-control form-control-lg"
             type="text" 
             name="Street" 
             value={this.state.input.Street}
             onChange={this.handleChange}
              placeholder="Enter Street" 
              id="Street" 
              required="true"/>
             
              
              
             <label for="City">City :</label>
             <input   class="form-control form-control-lg"
             type="text"
              name="City" 
              value={this.state.input.City}
              onChange={this.handleChange}
              placeholder="Enter City" 
              id="City" 
              required/>
              

             
             <label for="Pincode">Pincode :</label>
             <input   class="form-control form-control-lg"
             type="number"
             value={this.state.input.Pincode}
             onChange={this.handleChange}
              name="Pincode" 
              placeholder="Enter Pincode" 
              required /><br></br>
             
              <div onChange={this.onChangeValue}>
             <label for="Gender">Gender : </label>  
             Male &nbsp;&nbsp;<input type="radio"   name="Gender" id="male" 
             value="male" class="form-check-input"
              />
             
             Female &nbsp;&nbsp;<input type="radio"   name="Gender" id="Female" 
              value="female" class="form-check-input"
              />
            
             </div><br></br>

             
             
             <center><div class="d-flex justify-content-center">
                  <button type="button"
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={this.handleSubmit}>Register</button>
                </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
             

             </center>
             
       
             </form> 
      </div>
    );
  }
}
  
export default Registration2;