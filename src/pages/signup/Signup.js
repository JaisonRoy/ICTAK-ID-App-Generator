import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { validateSignup } from '../validateForm';
import { Link } from 'react-router-dom';
import './Signup.css';



const Signup = () => {

    const [formValues, setFormValues] = useState({ username: "", email: "", password: "", retypePsw: "" });
    
    const [errorValues, setErrorValues] = useState({});
    
    const navigate = useNavigate();
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        let validationErrors = validateSignup(formValues);
        setErrorValues(validationErrors);
        if(Object.keys(validationErrors).length === 0)
            signupDetails();
    }

    const signupDetails = async () => {
        const uname = formValues.username;
        const email = formValues.email;
        const password = formValues.password;
        const response = await fetch("/api/user/signup", {
            method: 'post',
            body: JSON.stringify({ uname, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const body = await response.json();
            
        if (body.status === "Success") {
            alert("Signup Successful");
            navigate("/login", { replace: true });
        } else {
            alert("Signup Unsuccessful!");
        }
    };

    return (
        <div className="signup">
            <div className= "box">
            <form onSubmit={handleSubmit} className="content">
                <h1 id="say-hello">SIGN UP</h1><br />
                <div className="name">
                <p>Name</p>
                <input className="fld" type="text" id="name" name="username" placeholder="Enter Your Name" required="" value={formValues.username} onChange={handleChange} />
                <p className="errorText">{errorValues.username}</p>
                </div>
                <div className="email">
                <p>Email</p>
                <input className="fld"  type="email" id="email" name="email" placeholder="Enter Your Email Address" required="" value={formValues.email} onChange={handleChange} />
                <p className="errorText">{errorValues.email}</p>
                </div>
                <div className="password">
                <p>Password</p>
                <input className="fld" type="password" id="password" name="password" placeholder="Enter Your Password" required="" value={formValues.password} onChange={handleChange} />
                <p className="errorText">{errorValues.password}</p>
                </div>
                <div className="cpassword">
                <p>Confirm Password</p>
                <input className="fld" type="password" id="cpassword" name="retypePsw" placeholder="Confirm Your Password" required="" value={formValues.retypePsw} onChange={handleChange} />
                <br /><br /></div>
                <button className="button" type="submit" >Sign up</button>
                <div className="redirect">
                <Link to="/login">Already registered? Login</Link>
                </div>
            </form>
            </div>
        </div>
    );
};

export default Signup;