import React from 'react'

function Contact() {
  return (
    <div className="contact">
        <div className="header">
            <div className="contact-no">
                <p className="contact-title">Contacts</p>
                <p className="add-contact">1 contact -<span>Add contact</span></p>
            </div>
            <input type="text" placeholder='search for email, name, company'/>
        </div>
        <div className="contacts">
            <p>T</p>
            <div className="contacts-cont">
                <div className="single-contact">
                    <p>{"<"}</p>
                    <h4>themillamix@gmail.com</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact;