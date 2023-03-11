import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function PersonalDetails() {
const location= useLocation();
const navigate= useNavigate();

  return (
    <div className="personal-details">
        <div className="container" style={{borderLeft: location.search === "?details&personal" ? "1px solid gray": "none"}}>
            {location.search === "?details&personal" && (<div className="details-container">
                <h2>Personal details</h2>
                <div className="details-avatar">
                    <p className="main-avatar"></p>
                    <p><button className="details-upload-btn">Upload avatar</button><button className="details-delete-btn">Delete avatar</button></p>      
                </div>
                <div className="main-details">
                    <div className="names one">
                        <p>First Name</p>
                        <h4>Joseph Abojei</h4>
                    </div>
                    <div className="surname one">
                        <p>Surname</p>
                        <h4></h4>
                    </div>
                    <div className="email one">
                        <p>Email Address</p>
                        <h4>blessedboyempire@gmail.com</h4>
                    </div>
                </div>
                <p className="details-save-btn"><button>Save changes</button></p>

            </div> )}
           {location.search === "?details&secuirity" && ( <div className="secuirity">
                <h1>Password and secuirity</h1>
                <div className="authentication">
                   <p className="auth"></p>
                   <div className="auth-info auth">
                      <h3>Two-factor authentication</h3>
                      <p>Use your phone to add an extra layer of secuirity to your account</p>
                   </div>
                   <p className="auth-btn"><button>Turn on</button></p>
                </div>
                <div className="change-password">
                    <h3>Change your password</h3>
                    <p className="password-info">Need a little (password) change? We got you. Just hit the button below and we'll send an email to blessedboyempire@gmail.com with a link to change your password</p>
                   <p><button>Send email</button></p>                
                </div>
            </div>
           )}

            <div className="details-menu">
                <p className="personal-btn" onClick={()=> navigate("/user?details&personal")}>{location.search === "?details&personal" && <span>{"<"}</span>} personal details</p>
                <hr />
                <p className="personal-btn" onClick={()=> navigate("/user?details&secuirity")}>{location.search === "?details&secuirity" && <span>{"<"}</span>} password and secuirity</p>
                <p className="upgrade-btn"><button>Upgrade</button></p>
                <p className='log-out'><button>Log out</button></p>
            </div>
        </div>

    </div>
  )
}

export default PersonalDetails;