import React from 'react'
import './ContactPage.css'
import {Contactform} from "../../components/contactform/contactform";
import data from '../../assets/data'
export const ContactPage = () => {
    return (
        <div id="contact" className="contact_page">
            <section className="contact_section">
                <p className="contact_sub_title">Get In Touch!</p>
                <h1 className="contact_heading">Contact Me</h1>
                <p>I’d love to hear from you! Whether you have a question, want to collaborate,
                    or just want to say hello, feel free to reach out. You can contact me through my accounts.
                    or fill out the form below, and I’ll get back to you as soon as possible.
                    Looking forward to connecting!
                </p>
                <Contactform />
                <div className="contact_links">
                    {data?.contacts?.map((item) => (
                        <a key={item.id} href={item.link} target="_blank" rel="noreferrer"><img className="link_img" src={item.icon} alt={item.name}/></a>
                    ))}
                </div>
            </section>
        </div>
    )
}