import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
import './contactform.css'

export const Contactform = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_7jqif8d', 'template_xnlfzou', form.current, {
                publicKey: 'UlQ6dfPqeuYVWZ1TX',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    e.target.reset();
                    alert('Your Message sent, Thanks for reaching out!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return(
        <form className="contact_form" ref={form} onSubmit={sendEmail}>
            <input type="text" className="form_name" placeholder="Your Name" name="your_name"/>
            <input type="email" className="form_email" placeholder="Your Email" name="your_email"/>
            <textarea className="form_message" rows="5" placeholder="Your Message" name="message"/>
            <button type="submit" value="send" className="form_btn" mouse>Submit</button>
        </form>
        )
}