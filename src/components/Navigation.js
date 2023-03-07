import React from 'react'

function Navigation() {
  return (
    <nav>
        <div className="logo">
            <div>
                <p><img src="images/honor.png" alt="logo"/></p>
                <h3>Transfer</h3>
            </div>
        </div>
        <ul>       
            <div>
                <li>About</li>
                <li>Features</li>
                <li className="active">Join</li>
             </div>
        </ul>
    </nav>
  )
}

export default Navigation;