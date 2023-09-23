import * as React from 'react'
import { 
    longMessage,
    formContainer,
    contactFormContainer,
 } from "./contactForm.module.css"

function ContactForm() {
    return (
        <div className={contactFormContainer}>
            <form className={formContainer} name="contact" method="POST" data-netlify="true">
            <p>
                <label>Your Name: <input autocomplete="name" type="text" name="name" /></label>
            </p>
            <p>
                <label>Your Phone Number: <input type="tel" name="phone" /></label>
            </p>
            <p>
                <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
                <label>Your Street Address: </label> <textarea></textarea>
            </p>
            
            <p>
                <label>Message: <textarea className={longMessage} name="message"></textarea></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
            </form>
        </div>
    )
}

export default ContactForm