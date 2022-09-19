import React from 'react';
  import "./Login.css"
  import Tshirt from './Tshirt.png';

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
      <div >
      <div class="box">   <a href='http://localhost:3000/Signup'>sign up</a>
      <center>
    
        <h2><b>SING IN</b></h2>      
        
        <form >
  
          <div class="Input">
            <label for="username">Username:</label><br></br>
            <input 
              type="text" 
              name="username" 
              value={this.state.input.username}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter username" 
              id="username" />
  
              <div className="text-danger">{this.state.errors.username}</div>
          </div><br></br>
  
        
  
          <div class="Input">
            <label for="password">Password:</label><br></br>
            <input 
              type="password" 
              name="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter password" 
              id="password" />
  
              <div className="text-danger">{this.state.errors.password}</div>
          </div><br></br>
  
          <div >
            <label for="password">Confirm Password:</label><br></br>
            <input 
              type="password" 
              name="confirm_password" 
              value={this.state.input.confirm_password}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter confirm password" 
              id="confirm_password" />
  
              <div className="text-danger">{this.state.errors.confirm_password}</div>
          </div><br></br>
             
          <Button variant="primary" onClick={this.handleSubmit}>Login</Button>{' '}
        </form>
        
        <a href=''>Forgot Password?</a>
        </center>
      </div>
      <img className='img' src={Tshirt} />
      </div>
    );
  }
}
  
export default Login;