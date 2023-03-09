import React from 'react'
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
        <div className="logo">
            <div>
                <p><img src="/images/honor.png" alt="logo"/></p>
                <h3>Transfer</h3>
            </div>
        </div>
        <ul>       
            <div>
                <li><Link to="#">About</Link></li>
                <li><Link to="#">Features</Link></li>
                <li className="active"><Link to="/">Join</Link></li>
             </div>
        </ul>
    </nav>
  )
}

export default Navigation;