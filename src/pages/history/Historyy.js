import React,{useEffect, useState} from 'react';
import axios from 'axios';
import '../history/History.css'

function Historyy(props) {

    const [studentDetails,setStudentDetails] = useState({ username: "",coursetype:"", email: "",  phoneno: "" , batch: "", startingdate: "", endingdate: "" })
    const [filename,setFileName] = useState("")   ;
    const token =localStorage.getItem('token');

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
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Course</th>
                        <th>Image</th>
                        <th>Batch</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                
                   
                      <tbody>
                        <tr>
                            <td>{studentDetails.name}</td>
                            <td>{studentDetails.email}</td>
                            <td>{studentDetails.course}</td>
                            <td><img src={studentDetails.photo} alt='profilepic'></img></td>
                            <td>{studentDetails.batch}</td>
                            <td>{studentDetails.startDate.substring(0, 10)}</td>
                            <td>{studentDetails.endDate.substring(0, 10)}</td>
                            <td>{studentDetails.isApproved}</td> 
                            
                        </tr>
                      </tbody>
                   
            </table>
        </div>
    );
}

export default Historyy;