import React, { useState } from 'react';
import "./Status.css"
import { useEffect } from "react";
import axios from 'axios';


function Status(props) {

    const token =localStorage.getItem('token');

    const [studentDetails,setStudentDetails] = useState({name:'', photo:'',isApproved:false })
    
    useEffect(() => {
        axios.get('/api/application/applicationstatus', 
        {headers: {
            'Content-Type': 'application/json',
            'authorization': 'JWT '+ token
            }
        })
        .then(function (res) {
            setStudentDetails(res.data);           
        })

        },[])
    
    return (
        <div className='statustable'>
            <table >
                <thead className='tablehead'>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Email</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{studentDetails.name}</td>
                        <td><img src={studentDetails.photo} alt='profilepic'></img></td>
                        <td>{studentDetails.email}</td>
                        <td>{studentDetails.isApproved}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
 
}

export default Status;