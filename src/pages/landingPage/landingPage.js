import React from "react"
import './landingPage.css'
import {Link} from "react-scroll"
import resume from '../../assets/chat.png'
import profilePhoto from '../../assets/profilePhoto.png'

const LandingPage = () => {
    return (
        <section id="about" className="hero_section">
            <div className="hero_section_left">
                <span className='hello'>Hello,</span>
                <span className="intro_title">I'm Toqa <span className="intro_name"> Mouhamed</span> <br />Software Engineer</span>
                <p className="intro_body">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                <a href={"https://drive.google.com/file/d/1P9bU-aIld8zMTTCe2KPpIMl5bQfPJWu4/view?usp=drive_link"} target="_blank" rel="noreferrer" >
                    <button className='btn'>
                        <img className='btn_img' src={resume} alt='chat'/>
                        <span className='btn_text'>My Resume</span>
                    </button>
                </a>
            </div>
                <div className="hero_section_right">
                    <img src={profilePhoto} alt="profile" className="profile_photo" />
                </div>
        </section>
    )
}
export default LandingPage;