import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { validateLogin } from '../validateForm';
import './Login.css';


const Login = ({setToken}) => {
    
    const [formValues, setFormValues] = useState({ username: "", password: "" });
   
    const [errorValues, setErrorValues] = useState({});
   
    const navigate = useNavigate();
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    }
   
    const handleSubmit = (event) => {
        event.preventDefault();
        let validationErrors = validateLogin(formValues);
        setErrorValues(validationErrors);
        if(Object.keys(validationErrors).length === 0)
            userLogin();
    }

    const userLogin = async () => {
        const uname = formValues.username;
        const password = formValues.password;
        const response = await fetch("/api/user/login", {
            method: 'post',
            body: JSON.stringify({ uname, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const body = await response.json();
        
        if (body.uname === uname) {
            setToken(body);
            navigate("/article-list", { replace: true });
        } else {
            alert("Login Unsuccessful!");
        }
    };

    return (
        <div className="signup">
            <div className='sign'>
            <form onSubmit={handleSubmit} className="content">
                <h1 id="say-hello">LOGIN</h1><br />
                <div className="email">
                <p>Email</p>
                <input className="fld" type="text" name="username" placeholder="Enter Your Email ID" id="email" required="" value={formValues.username} onChange={handleChange} />
                <p className="errorText">{errorValues.username}</p>
                </div>
                <div className="password">
                <p>Password</p>
                <input className="fld" type="password" name="password" placeholder="Enter Your Password" id="password" required="" value={formValues.password} onChange={handleChange} />
                <p className="errorText">{errorValues.password}</p>
                </div>
                <br />
                <button className="button">Login</button>
                <div className="redirect">
                <Link to="/signup" className="signupLink">Not a member? Register</Link>
                </div>
            </form>
            </div>
        </div>
    );
};

export default Login;