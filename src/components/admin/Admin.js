import React from 'react';
import { Link } from 'react-router-dom';
import "./Admin.css"

function Admin(props) {
    return (
        <div>
            
            <nav className="adheader">
               
                <div className='adsidenav'>

                <img src='https://ictkerala.org/wp-content/uploads/2019/01/cropped-ict-ico.png' alt="Hlogo" id='adheaderlogo'></img>

                    <Link className="link" to="/admin"><br/>Home</Link>
                    <Link className="link" to="/BmList">Batch Managers</Link>
                    <Link className="link" to="/CourseList">Course List</Link>
                    <Link className="link" to="/">Logout</Link>
    
                </div>
            </nav>
     
        </div>
    );
}

export default Admin;
