import React from 'react'
import './ContactPage.css'
import data from '../../assets/data'
export const ContactPage = () => {
    return (
        <section className="contact_page">
            <div>
                <p className="sub_title">Get In Touch!</p>
                <h2 className="sub_title">Contact Me</h2>
                <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a</p>
                {data?.contacts?.map((item, index) => (
                    <a> <img src={item.icon}/></a>
                ))}
            </div>
        </section>
    )
}