import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate= useNavigate();

    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");

    const handleSubmit=(e)=> {
        e.preventDefault()
    const data= {username, password};

    console.log(data);

        // fetch("http://localhost:3000/user-signin", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(data)
        // })
        // .then(res=> {
        //     if(res.message === "Invalid username/password"){
        //         alert("Invalid username/ password")
        //         return;
        //     }
        //     if(res.message === "User signed in successfully"){
        //        alert("User signed in successfully!")
        //        navigate("/")
        //     }
        // })
    }

  return (
  
<div id="main-wrapper">
          <form id="registerForm" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" required placeholder="Enter Your Username" value={username} onChange={(e)=> setUsername(e.target.value)}/>
              </div>
      
              <div>
                <label htmlFor="loginPassword">Password</label>
                <input type="password" id="loginPassword" required placeholder="Enter Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
              </div>
              <div className="transfer-btn">
                  <button className="signin-btn" type="submit">Sign In</button>
              </div>
          </form>
</div>

  );
}

export default Login;