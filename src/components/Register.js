import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Register() {
    const navigate= useNavigate();

    const [username, setUsername]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");

    const handleSubmit=(e)=> {
        e.preventDefault()
    const data= {username, email, password};

    console.log(data)

        fetch("http://localhost:3000/user-signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then(res=> {
            if(res.message === "Username already exists"){
                alert("Username already exists")
                return;
            }
            if(res.message === "Email already exists"){
                alert("Email already exists")
                return;
            }
            if(res.message === "User registered successfully"){
               alert("User signed up successfully!")
               navigate("/login")
            }
        })
    }

  return (
<div id="main-wrapper1">
          <p>Looks like you're new here!</p>
          <hr/>

          <form id="registerForm" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" >Username</label>
              <input type="text" id="username" required placeholder="Enter Your Username" value={username} onChange={(e)=> setUsername(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="emailAddress">Email Address</label>
              <input type="email" id="emailAddress" required placeholder="Enter Your Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="signupPassword" >Password</label>
              <input type="password" id="signupPassword" required placeholder="Enter Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            </div>
            <div className="transfer-btn">
				       <button type="submit" className="signup-btn">Sign Up</button>
			      </div>
          </form>
          <p >Already have an account? <Link to="/login">Log In</Link></p>
</div>

  );
}

export default Register;