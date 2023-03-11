import React from 'react';
import {Link, useLocation} from "react-router-dom";

function Menu() {
const location= useLocation();

  return (
    <div className="menu">
        <div className="nav">
            <ul>
                <li><Link to="/user?transfer">Transfer</Link></li>
                <li><Link to="/user?contact">Contact</Link></li>
                <li><Link to="/user?upgrade">Upgrade</Link></li>
                <li className="user-name">Joseph Abojel <span></span></li>
            </ul>
        </div>
        {/* <div className="account-menu">
                    <div className="account-email">
                        <p>blessedboyempire@gmail.com</p>
                        <h4>Account</h4>
                    </div>
                    <hr />
                    <ul>
                        <li>Help</li>
                        <li>Company</li>
                        <li>Log out</li>
                    </ul>
  </div> */}
    </div>
  )
}

export default Menu;