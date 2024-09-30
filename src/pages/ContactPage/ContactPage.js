import React from 'react'
import './ContactPage.css'
import {Contactform} from "../../components/contactform/contactform";
import data from '../../assets/data'
export const ContactPage = () => {
    return (
        <section className="contact_page">
            <p className="contact_sub_title">Get In Touch!</p>
            <h1 className="contact_heading">Contact Me</h1>
            <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a</p>
            <div>
                {data?.contacts?.map((item) => (
                    <a href={item.link} target="_blank" rel="noreferrer"><img className="links_icon" src={item.icon} alt={item.name}/></a>
                ))}
            </div>
            <Contactform />
        </section>
    )
}