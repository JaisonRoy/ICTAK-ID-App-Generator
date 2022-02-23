import React from 'react';
import './Application.css'

function Application(props) {
    return (
        <div className='application'>           
				<form className='applicationform'>

					<label id='title'>Application  </label><br></br>
					
                    <label>Name:</label> 
                    <input  placeholder='Name'/> <br></br>
                    <label>Course type:</label>    
                        <select name="coursetype" id="coursetype">
                        <option value="">Select Course type</option>
                        <option value="">CERTIFIED SPECIALIST IN FULL STACK DEVELOPMENT</option>
                        <option value="">CERTIFIED SPECIALIST IN DATA SCIENCE & ANALYTICS</option>
                        <option value="">ROBOTIC PROCESS AUTOMATION</option>
                        <option value="">CERTIFIED CYBER SECURITY ANALYST</option>
                        </select> <br></br>
                    <label>Email:</label>
                    <input  placeholder='Email'/><br></br>
                    <label>Select Image:</label>
                    <input type='file' placeholder='image'/> <br></br>
                    <label>Phone No:</label>
                    <input  placeholder='Phone No'/> <br></br>
                    <label>Batch:</label>
                    <input  placeholder='Batch'/> <br></br>
                    <label>Course Starting date:</label>
                    <input  placeholder='Course Starting date'/> <br></br>
                    <label>Course Ending Date:</label>
                    <input  placeholder='Course Ending Date'/> <br></br>

					<button className='submitbutton'>Submit</button>

				</form>		
        </div>
    );
}

export default Application;