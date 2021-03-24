import {
    // BrowserRouter as Router, // we are aliasing this module for a cleaner call
    // Route,
    Link
    // etc.
  } from 'react-router-dom';
import React, {Component} from 'react';
<<<<<<< HEAD
=======
import Logo from '../images/logo3.png';
import '../App.css';
>>>>>>> 82dd031225548ca8c730b953707a4eaeed89fe60

class Navbar extends Component {
    render(){
      return(
        
        <div>
                <header>
                <img src={ Logo } className="d-block mx-auto img-fluid " />
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