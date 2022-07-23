import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './Login.css'

class Login extends Component {

   constructor(props){
      super(props);
      this.state = {
          user_name : '',
          password: '' ,
          errorMessage: ''            
      }; 
          
    }

    handleChange = event => {      
       this.setState({ [event.target.name]: event.target.value });      
    }

    handleSubmit = (e) => {
      e.preventDefault();        
   
      if ( this.state.user_name == "admin" &&  this.state.password == "admin" ) {
               this.props.history.push('pricing'); 
            } else {
               this.setState({errorMessage :"Invalid Username or Password"});
            } 
       
   }

  
  render() {
   
    return (
     <div>
            <div id='Unbo'>
                <img src="https://d9hhrg4mnvzow.cloudfront.net/unbounce.com/product-selector/7089096e-d22ffb13-logo-unbounce.svg" alt="logo" />
            </div>
            <div id='login'>
                <h1>Sign Into Your Unbounce Account</h1>
                <p id='need'>Need an Unbounce Account? <span>Create an account</span></p>
            </div>
            <div>    <span className="text-danger">{this.state.errorMessage}</span>
                <form onSubmit={this.handleSubmit}>
                    <label id='l1'>Username</label><br />
                    <input type='text' className='email'  name="user_name"  placeholder="User name"
            required="required"            
            onChange={this.handleChange} /><br />
                    <label id='l2' >Password</label><br />
                    <input type="password" className='pass' 
            placeholder="Password"
            required="required"
            name="password"
            onChange={this.handleChange} /><br /><br />
                   <button type="submit" className="submit">
         Sign in
         </button>
                   
                </form>
            </div>
        </div>
    );
  }
}

export default withRouter(Login);
