import React,{useState} from 'react';
import { useNavigate } from 'react-router';
import './Application.css'
import {Validateapplication} from '../validateForm'

function Application(props) {

    const [applicationValues, setapplicationValues] = useState({ username: "",coursetype:"", email: "", photo: "", phoneno: "" , batch: "", startingdate: "", endingdate: ""});
    
    const [errorValues, setErrorValues] = useState({});

    const navigate =useNavigate;

    const handleChange = (event) => {
       
        const { name, value } = event.target;
        setapplicationValues({ ...applicationValues, [name]: value });
        console.log(applicationValues)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = Validateapplication(applicationValues);
        console.log(validationErrors)
        setErrorValues(validationErrors);
        if(Object.keys(validationErrors).length === 0)
            ApplicationDetails();
    }
    
    const ApplicationDetails = async () => {
        const username = applicationValues.username;
        const coursetype = applicationValues.coursetype;
        const email = applicationValues.email;
        // const photo = applicationValues.photo;
        const phoneno = applicationValues.phoneno;
        const batch = applicationValues.batch;
        const startingdate = applicationValues.startingdate;
        const endingdate = applicationValues.endingdate;
        
        const response = await fetch("/api/user/application", {
            method: 'post',
            body: JSON.stringify({ username,coursetype, email,phoneno,batch,startingdate,endingdate }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const body = await response.json();
            
        if (body.status === "Success") {
            alert("Application applyed Successfully");
            navigate("/status", { replace: true });
        } else {
            alert("Application applyed Unsuccessful!");
        }
    };



    return (
      <div className='applicationbody'>
          <img src='https://www.ajce.in/cse/images/ict_academy.png' className='applicationimage' alt='ictk'></img> 
        <div className='application'>  
                
				<form onSubmit={handleSubmit} className='applicationform'>

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


                    <label>Course type:</label>    
                        <select name="coursetype" id="coursetype"  value={applicationValues.coursetype} onChange={handleChange}>
                        <option value=""> select Course Type</option>
                        <option > FULL STACK DEVELOPMENT </option>                       
                        <option > SOFTWARE TESTING </option>
                        <option > CYBER SECURITY ANALYST </option>
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
                    <input type='file' placeholder='photo' name="photo"  value={applicationValues.photo} onChange={handleChange}/>
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
                    <input  placeholder='Course Starting date' name="startingdate"  value={applicationValues.startingdate} onChange={handleChange}/> 
                    </div>
                    <p className="applicationerrorText">{errorValues.startingdate} </p><br></br>
                    </div>



                    <div className='row'>
                    <div className='col-25'>	
                    <label>Course Ending Date:</label>
                    </div>
                    <div className='col-75'>
                    <input  placeholder='Course Ending Date' name="endingdate"  value={applicationValues.endingdate} onChange={handleChange}/> 
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