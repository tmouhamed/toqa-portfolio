import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
import './contactform.css'

export const Contactform = () => {
    const form = useRef()
    return(
        <form className="contact_form" ref={form}>
            <input type="text" className="form_name" placeholder="Your Name" name="your_name"/>
            <input type="email" className="form_email" placeholder="Your Email" name="your_email"/>
            <textarea className="form_message" rows="5" placeholder="Your Message" name="your_message"/>
            <button type="submit" value="send" className="form_btn">Submit</button>
        </form>
        )
}