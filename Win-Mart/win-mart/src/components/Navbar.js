import {
    BrowserRouter as Router, // we are aliasing this module for a cleaner call
    Route,
    Link
    // etc.
  } from 'react-router-dom';
import React, {Component} from 'react';
class Navbar extends Component {
    render(){
      return(
        <div className="nav">
          <Link to="/">Home</Link> | 
          <Link to="shopping">Shopping</Link> | 
          <Link to="contactus">ContactUs</Link>           
        </div>
      );
    }
  }
  export default Navbar;