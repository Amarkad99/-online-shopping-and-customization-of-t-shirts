import React from 'react';
  import "./Login.css"
  import Button from 'react-bootstrap/Button';
  
  import 'bootstrap/dist/css/bootstrap.min.css';
  
class Login extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
     
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["username"] = "";
        input["password"] = "";
        input["confirm_password"] = "";
        this.setState({input:input});
  
        alert('submitted');
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
   
      if (!input["username"]) {
        isValid = false;
        errors["username"] = "Please enter your username.";
      }
  
      if (typeof input["username"] !== "undefined") {
        const re = /^\S*$/;                                             
        if(input["username"].length < 6 || !re.test(input["username"])){      // 6 length
            isValid = false;
            errors["username"] = "Please enter valid username.";
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
            <h2><b><i>SING UP</i></b></h2> 
            
        </center>
        
        
          
        <label for="Firstname">FullName</label><br></br>

             <input 
              type="text" 
              name="Firstname" 
              value={this.state.input.Firstname}
              onChange={this.handleChange}
              placeholder="Enter Firstname" 
              required
              id="Firstname" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           

             <label for="Lastname"></label>&nbsp;&nbsp;
             <input 
              type="text" 
              name="Lastname" 
              value={this.state.input.Lastname}
              onChange={this.handleChange}
              placeholder="Enter Lastname" 
              required
              id="Lastname" /><br></br><br></br>

          <div >
            <label for="username">Username:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input 
              type="text" 
              name="username" 
              value={this.state.input.username}
              onChange={this.handleChange}
              placeholder="Enter username" 
              id="username" /><br></br><br></br>
  
              <div className="text-danger">{this.state.errors.username}</div>
          </div>
  
        
  
          <div class="Input">
            <label for="password">Password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input 
              type="password" 
              name="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              placeholder="Enter password" 
              id="password" /><br></br><br></br>
  
              <div className="text-danger">{this.state.errors.password}</div>
          </div>
  
          <div class="Input">
            <label for="password">Confirm Password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input 
              type="password" 
              name="confirm_password" 
              value={this.state.input.confirm_password}
              onChange={this.handleChange}
              placeholder="Enter confirm password" 
              id="confirm_password" /><br></br><br></br>
  
              <div className="text-danger">{this.state.errors.confirm_password}</div>
          </div>


          <label for="Q1">Who is your favourite actor?:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
             <input
             type="text" 
              placeholder="Enter answer" 
              required
              id="Q1" /><br></br><br></br>
<label for="Q2">What is your mothername?:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
             <input
             type="text" 
              placeholder="Enter answer" 
              required
              id="Q2" /><br></br><br></br>

<label for="Q3">What is your childwood nickname?:&nbsp;&nbsp;&nbsp;</label>
             <input
             type="text" 
              placeholder="Enter answer" 
              required
              id="Q3" /><br></br><br></br>
              
         

             <label for="Emailid">Emailid :&nbsp;&nbsp;&nbsp;</label>
             <input 
              type="email" 
              name="Emailid" 
              value={this.state.input.Emailid}
              onChange={this.handleChange}
              placeholder="Enter Emailid" 
              required
              id="Emailid" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;



             <label for="Mobileno">Mobileno :   &nbsp;&nbsp;&nbsp;</label>
             <input 
              type="number" 
              name="Mobileno" 
              placeholder="Enter Mobileno" 
              required
              id="Mobileno" /><br></br><br></br>
              

              
             <label for="Adress">Adress 1St Line :&nbsp;&nbsp;&nbsp;</label>
             <textarea
              name="Adress" 
              placeholder="Enter Adress" 
              required
              id="Adress"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              

              
             <label for="Street">Street :&nbsp;&nbsp;&nbsp;</label>
             <input
             type="text" 
              placeholder="Enter Street" 
              required
              id="Street" /><br></br><br></br>
              
              
              
             <label for="City">City :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
             <input
             type="text"
              name="City" 
              placeholder="Enter City" 
              required
              id="City" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              

             
             <label for="Pincode">Pincode :&nbsp;&nbsp;&nbsp;</label>
             <input
             type="number"
              name="Pincode" 
              placeholder="Enter Pincode" 
              required
              id="Pincode" /><br></br><br></br>
              



              <div>
             <label for="Gender">Gender : &nbsp;&nbsp;</label>  
             Male &nbsp;&nbsp;<input type="radio"   name="Gender" id="male" />&nbsp;&nbsp;
             Female &nbsp;&nbsp;<input type="radio"   name="Gender" id="Female" />
             </div><br></br>

             
             
             <center><Button variant="primary" onClick={this.handleSubmit}>Submit</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
             <input class="btn btn-primary" type="reset" value="Reset"/>

             </center>
             
       
             
      </div>
    );
  }
}
  
export default Login;