import * as React from 'react'
import { navigate } from gatsby
import { 
    row,
    longMessage,
    sectionIntro,
    formContainer,
    contactFormContainer,
 } from "./contactForm.module.css"

 function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

function ContactForm() {

    const [state, setState] = React.useState({})

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
      }

    const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
        }),
    })
        .then(() => navigate(form.getAttribute('action')))
        .catch((error) => alert(error))
    }

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
                onSubmit={handleSubmit}
            >
            <input type="hidden" name="form-name" value="contact" />
            <div className={row}>
            <p hidden>
                <label>
                    Don’t fill this out: <input name="bot-field" onChange={handleChange} />
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