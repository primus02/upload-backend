import React from 'react'
import { useLocation } from 'react-router-dom';
import Contact from './Contact';
import Menu from './Menu';
import PersonalDetails from './PersonalDetails';
import Transfer from './Transfer';
import Upgrade from './Upgrade';
import Uploader from './Uploader';

function User() {
  const location= useLocation();
  console.log(location);

  return (
    <div className="user">
        <Menu />
        <div className="content">
        <Uploader />
        <div className="main-content">
            <div className="sec">
               <p className="cancel">X</p>
               {location.search === "?details&secuirity" && (<div className="sub-sec">
                   <p className="sub-cancel">x</p>
                    <ul>
                        <li className="portals">Portals</li>
                        <li>Transfers</li>
                        <li>Contacts</li>
                        <li>Branding</li>
                        <li>Upgrade</li>
                        <li className="sub-user">JOSEPH ABOJEI</li>
                    </ul>
               </div>)}
            </div>
            {location.search === "?transfer" && <Transfer />}
            {location.search === "?contact" && <Contact />}
            {location.search === "?upgrade" && <Upgrade />}
            {(location.search === "?details" || location.search === "?details&personal" || location.search === "?details&secuirity") && <PersonalDetails />}

        </div>
        </div>
    </div>
  )
}

export default User;