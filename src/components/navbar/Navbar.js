import React from 'react';
import { Link } from 'react-router-dom';
import  { useState } from 'react';
import './Navbar.css';

const Navbar = ({color}) => {
    
    const handleClick = (event) => {
        event.preventDefault();
        localStorage.setItem("name", "");
        redirect()
    }

    const redirect = () => {
        window.location = "/"
    }
    const RenderMenu = () => {
        if(localStorage.getItem("name") !== ""){ 
            return(
                <>
                    <ul>
                    <li><Link className="link" to="/home">Home</Link></li>
                    <li><Link className="link" to="/contact">Contact </Link></li>
                    <li><button onClick={handleClick}>Logout</button></li>
                    <li className="username">{localStorage.getItem("name")}</li> 
                    </ul>
                    </>
                )
            }else{
                return(
                    <>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact </Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">signup</Link></li>  
                   </ul>
                    </>
                )
            }
        }
        const [open, setOpen] = useState(false);
       
        return (
            <nav className="navbar">
                              
            <a href="#0" className="toggle-button" onClick={() => setOpen(!open)}>  
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>
                
                <div className={`navbar-links ${open ? 'active' : ''}`}>
                    <RenderMenu />
               
            </div>
        </nav>
    
                )
    }
export default Navbar