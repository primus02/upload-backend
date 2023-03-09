import React from 'react'

function Footer() {
  return (
    <div className="footer">
         <div className="invite">
            <div>
            <p className="avatar"><img src="/images/avatar.jpg" alt="friends"/></p>
            <button>Invite friends</button>
            </div>
         </div>
         <div className="progress">
            <p>Current speed 55%</p>
         </div>
    </div>
  )
}

export default Footer;