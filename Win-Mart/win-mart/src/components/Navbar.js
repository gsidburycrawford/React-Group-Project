import {
    // BrowserRouter as Router, // we are aliasing this module for a cleaner call
    // Route,
    Link
    // etc.
  } from 'react-router-dom';
import React, {Component} from 'react';



class Navbar extends Component {
    render(){
      return(
        
        <div>
                <header>
                    <h1>WinMart</h1>
                    <p className='hero'>Convenient Shopping with us</p>
                    
                    <nav id='nav'>
                        <ul>
                            
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/shopping'>Shopping</Link>
                            </li>
                            <li>
                                <Link to='/contactus'>Contact Us</Link>
                            </li>
                            
                        </ul>
                    </nav>
                    
                </header>
        </div>
      );
    }
  }

  export default Navbar;