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
            <form 
                className={formContainer} 
                name="contact"
                action="/thanks/"
                method="post" 
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            >
            <input type="hidden" name="form-name" value="contact" />
            <div className={row}>
            <p style={{display:"none"}}>
                <label>
                    Don’t fill this out: <input name="bot-field" />
                </label>
            </p>
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