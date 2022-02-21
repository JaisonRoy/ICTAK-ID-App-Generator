import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            
            <nav className="header">
               
                <div>

                    <Link className="link" to="/home">Home</Link>
                    <Link className="link" to="/application">Application</Link>
                    <Link className="link" to="/status">Status</Link>
                    <Link className="link" to="/logout">Logout</Link>
    
                </div>
            </nav>
     
        </div>
    );
}

export default Header;