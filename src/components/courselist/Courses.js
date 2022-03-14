import React,{useEffect, useState} from 'react';
import axios from 'axios';
import '../courselist/Courses.css'

function Courses(props) {

    const [courseList,setCourseList]= useState([]);
    const token =localStorage.getItem('token');

    useEffect(()=>{
        axios.get("/api/application/courselist",
        {headers: {
            'Content-Type': 'application/json',
            'authorization': 'JWT '+ token
            }
        }).then(res=>{
            setCourseList(res.data);
        });
       console.log(courseList)
    },[])

    // let rows = []
    // if(courseList){
    //   for(var i=0; i<courseList.length;i++){
    //    rows.push(<tr><td>{courseList[i].name}</td></tr>)
    //    }
    // }


console.log(courseList)



    return (
  
        <div className='courselist'>
            <table className="cltable">
                <thead id='cltablehead'>
                <tr id='cltablerow'>
                <th>Courses Offered</th>
                
                </tr>
                </thead>
                {courseList.map((student,key)=>(
                      <tbody key ={key}>
                        <tr id='cltablerow'>
                            
                            <td>{student.name}</td> 
                            <td><button id='btn'>Edit</button></td>
                            <td ><button id ='btn' >Delete</button></td>
        
                        </tr>
                      </tbody>
                      ))}
            </table>
        </div>
   
    );
}

export default Courses;