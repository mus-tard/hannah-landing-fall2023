import * as React from 'react'
import { 
    row,
    longMessage,
    sectionIntro,
    formContainer,
    contactFormContainer,
 } from "./contactForm.module.css"

function ContactForm() {
    return (
        <div className={contactFormContainer}>
            <div className={sectionIntro}>
                <h2  id="quote">Contact us</h2>
                <p>Use this form, email, or give us a call if you have any questions.</p>
                <p>Free Quotes: We will visit your home, complete a preliminary walkthrough, and provide an estimate.</p>
                <ul>
                    <li>Phone: 705-559-7764</li>
                    <li>Email: timothyryanhannah@gmail.com</li>
                </ul>
            </div>
            <form className={formContainer} action="/" name="contact" method="POST" data-netlify="true">
            <input type="hidden" action="/" name="contact" value="contact" />
            <div className={row}>
                <p>
                    <label>Your Name: <input autocomplete="name" type="text" name="name" /></label>
                </p>
                <p>
                    <label>Your Phone Number: <input type="tel" name="phone" /></label>
                </p>

            </div>
            <div className={row}>
                <p>
                    <label>Your Email: <input type="email" name="email" /></label>
                </p>
                <p>
                    <label>Your Street Address:  <textarea></textarea></label>
                </p>

            </div>
            
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