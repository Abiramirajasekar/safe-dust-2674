import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route  
} from 'react-router-dom';

import Login from './Components/Login/Login';
import './App.css';

import Home from './Components/Home/Home';

import Pricing from './Components/Pricing/Pricing';
import Contact from './Components/Contact/Contact';

const LoginPage = () => (
  <Login />
);

const HomePage = () => (
  <Home />
);

const PricingPage = () => (
  <Pricing />
);
const ContactPage = () => (
  <Contact />
);



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
		   <Route path="/pricing" component={PricingPage} />
       <Route path="/contact" component={ContactPage} />

        </div>
      </Router>
    );
  }
}

export default App;
