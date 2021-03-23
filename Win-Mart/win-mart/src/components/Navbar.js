import {
<<<<<<< HEAD
    BrowserRouter as Router, // we are aliasing this module for a cleaner call
    Route,
=======
    // BrowserRouter as Router, // we are aliasing this module for a cleaner call
    // Route,
>>>>>>> 85869a7921667e4784e18579ae2ba8a43081a5a7
    Link
    // etc.
  } from 'react-router-dom';
import React, {Component} from 'react';
<<<<<<< HEAD
class Navbar extends Component {
    render(){
      return(
        // <div className="nav">
        //   {/* <img src={logo} className="App-logo" alt="logo" /> */}
        //   <Link to="/">Home</Link> | 
        //   <Link to="shopping">Shopping</Link> | 
        //   <Link to="contactus">ContactUs</Link>           
        // </div>
=======



class Navbar extends Component {
    render(){
      return(
        
>>>>>>> 85869a7921667e4784e18579ae2ba8a43081a5a7
        <div>
                <header>
                    <h1>WinMart</h1>
                    <p className='hero'>Convenient Shopping with us</p>
<<<<<<< HEAD
                    <nav id='nav'>
                        <ul>
=======
                    
                    <nav id='nav'>
                        <ul>
                            
>>>>>>> 85869a7921667e4784e18579ae2ba8a43081a5a7
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/shopping'>Shopping</Link>
                            </li>
                            <li>
                                <Link to='/contactus'>Contact Us</Link>
                            </li>
<<<<<<< HEAD
                        </ul>
                    </nav>
                    {/* <div id='restForm'></div> */}
=======
                            
                        </ul>
                    </nav>
                    
>>>>>>> 85869a7921667e4784e18579ae2ba8a43081a5a7
                </header>
        </div>
      );
    }
  }
<<<<<<< HEAD
=======

>>>>>>> 85869a7921667e4784e18579ae2ba8a43081a5a7
  export default Navbar;