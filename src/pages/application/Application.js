import React,{useState} from 'react';
import { useNavigate } from 'react-router';
import './Application.css'
import {Validateapplication} from '../validateForm';
import axios from 'axios';

function Application(props) {

    const [applicationValues, setapplicationValues] = useState({ username: "",coursetype:"", email: "",  phoneno: "" , batch: "", startingdate: "", endingdate: ""});
    const [filename,setFileName] = useState("")   ;
    const [errorValues, setErrorValues] = useState({});
    

    const token =localStorage.getItem('token');

    const navigate = useNavigate;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setapplicationValues({ ...applicationValues, [name]: value });
        
    }
    const dateChange = (event) => {
        const date = event.target.value;
        const myDate = new Date(date);
    }
   
    

    const handleChangeImage = (event) => {
        setFileName(event.target.files[0]);
    }
    

    
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();

        formData.append('username', applicationValues.username);
        formData.append('coursetype', applicationValues.coursetype);
        formData.append('email', applicationValues.email);
        formData.append('phoneno', applicationValues.phoneno);
        formData.append('batch', applicationValues.batch);
        formData.append('startingdate', applicationValues.startingdate);
        formData.append('endingdate', applicationValues.endingdate);
        formData.append('photo', filename);
 
        const validationErrors = Validateapplication(applicationValues,filename);
        setErrorValues(validationErrors);
        if(Object.keys(validationErrors).length === 0)
            ApplicationDetails(formData);
            console.log(formData)
    }
    
    const ApplicationDetails = async (formData) => {
       await axios.post("/api/application/postapplication", formData,
            {headers: {
                'Content-Type': 'application/json',
                'authorization': 'JWT '+ token
                }
            }).then(res=>{
                console.log(res.data);
                if (res.status) {
                        alert("Application submitted successfully");
                        navigate("/status", { replace: true });
                    } else {
                        alert("Application applied Unsuccessful!");
                    }})
            }


    return (
        <div className='applicationbody'>
            <img src='https://www.ajce.in/cse/images/ict_academy.png' className='applicationimage' alt='ictk'></img> 

            <div className='application'>  
                
			    <form onSubmit={(e)=>handleSubmit(e)} className='applicationform' encType='multipart/form-data'>
					<label id='applicationtitle'>Application  </label><br></br>

				    <div className='row'>
                        <div className='col-25'>	
                            <label>Name:</label> 
                        </div>
                        <div className='col-75'>
                            <input  placeholder='Name' name="username"  value={applicationValues.username} onChange={handleChange} /> 
                        </div>
                        <p className="applicationerrorText">{errorValues.username}</p><br></br>
                    </div>


                    <label htmlFor='coursetype'>Course type:</label>    
                    <select name="coursetype" id="coursetype"  value={applicationValues.coursetype} onChange={handleChange}>
                        <option value="" disabled> --Select Course Type--</option>
                        <option>Full Stack Development</option>                       
                        <option>Software Development</option>
                        <option>Cyber Security Analyst</option>
                        <option>Robotic Process Automation</option>
                        <option>Data Science and Analytics</option>
                        <option>Digital Marketing</option>
                    </select> 
                    <p className="applicationerrorText">{errorValues.coursetype}</p><br></br>

                    <div className='row'>
                        <div className='col-25'>	
                            <label>Email:</label>
                        </div>
                        <div className='col-75'>
                            <input  placeholder='Email' name="email"  value={applicationValues.email} onChange={handleChange}/> 
                        </div>
                        <p className="applicationerrorText">{errorValues.email}</p><br></br>
                    </div>              

                    <div className='row'>
                        <div className='col-25'>	
                            <label>Select Image:</label>
                        </div>
                        <div className='col-75'>
                            <input type='file' filename= 'photo' onChange={handleChangeImage}/>
                        </div>
                        <p className="applicationerrorText">{errorValues.photo}</p><br></br>
                    </div>
 
				    <div className='row'>
                        <div className='col-25'>	
                            <label>Phone No:</label>
                        </div>
                        <div className='col-75'>
                            <input  placeholder='Phone No' name="phoneno"  value={applicationValues.phoneno} onChange={handleChange}/>
                        </div>
                        <p className="applicationerrorText">{errorValues.phoneno}</p><br></br>
                    </div>

                    <div className='row'>
                        <div className='col-25'>	
                            <label>Batch:</label>
                        </div>
                        <div className='col-75'>
                            <input  placeholder='Batch' name="batch"  value={applicationValues.batch} onChange={handleChange}/> 
                        </div>
                        <p className="applicationerrorText">{errorValues.batch}</p><br></br>
                    </div>

                    <div className='row'>
                        <div className='col-25'>	
                            <label>Course Starting date:</label>
                        </div>
                        <div className='col-75'>
                            <input type='date' placeholder='Course Starting date' name="startingdate"  value={applicationValues.startingdate} onChange={(e)=>{handleChange(e); dateChange(e);}}/> 
                        </div>
                        <p className="applicationerrorText">{errorValues.startingdate} </p><br></br>
                    </div>

                    <div className='row'>
                        <div className='col-25'>	
                            <label>Course Ending Date:</label>
                        </div>
                        <div className='col-75'>
                            <input type='date' placeholder='Course Ending Date' name="endingdate"  value={applicationValues.endingdate} onChange={(e)=>{handleChange(e); dateChange(e);}}/> 
                        </div>
                        <p className="applicationerrorText">{errorValues.endingdate} </p><br></br>
                    </div>

					<button  className='submitbutton'>Submit</button>

				</form>		
            </div>
        </div>  
    );
}

export default Application;