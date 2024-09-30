import React from "react"
import './landingPage.css'
import {Link} from "react-scroll"
import chat from '../../assets/chat.png'
import profilePhoto from '../../assets/profilePhoto.png'

const LandingPage = () => {
    return (
        <section id="about" className="heroSection">
            <div className="heroSection-left">
                <span className='hello'>Hello,</span>
                <span className="introTitle">I'm Toqa <span className="introName"> Mouhamed</span> <br />Software Engineer</span>
                <p className="introBody">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                <Link>
                    <button className='btn'>
                        <img className='btnImg' src={chat} alt='chat'/>
                        <span className='btnText'>Get in Touch</span>
                    </button>
                </Link>
            </div>
                <div className="heroSection-right">
                    <img src={profilePhoto} alt="profile" className="profilePhoto" />
                </div>
        </section>
    )
}
export default LandingPage;