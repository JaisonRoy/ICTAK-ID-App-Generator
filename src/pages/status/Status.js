import React from 'react';
import "./Status.css"
import { useEffect } from "react";
import axios from 'axios';

function Status(props) {
    
    useEffect(() => {
        axios.get('/api/application/postapplication'
        
          )
          .then(function (response) {
            console.log(response);
          })

        },[])
    
    return (
        <div className='statustable'>
            <table>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Email</th>
                    <th>Status</th>
                </tr>
               
            </table>
        </div>
    );
 
}

export default Status;