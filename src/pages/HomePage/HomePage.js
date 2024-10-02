import React from "react"
import './HomePage.css'
import resume from '../../assets/chat.png'
import profilePhoto from '../../assets/profilePhoto.png'

/* My name: Toqa Mouhamed
StudentID: 301479591
date: OCT 1st, 2024
Github: https://github.com/tmouhamed/toqa-portfolio
Live Portfolio: https://toqa-portfolio-408312dc8622.herokuapp.com/  */

const HomePage = () => {
    return (
        <section id="home" className="hero_section">
            <div className="hero_section_left">
                <span className='hello'>Hello,</span>
                <span className="intro_title">I'm Toqa <span className="intro_name"> Mouhamed</span> <br />Software Engineer</span>
                <p className="intro_body">I’m currently a student at Centennial College. My passion for technology and creativity drives me to explore innovative solutions. Through this portfolio, I invite you to discover my projects and insights as I combine my academic journey with hands-on experience.
                    Join me as I explore the exciting intersection of AI and design!</p>
                <a href={"https://drive.google.com/file/d/1P9bU-aIld8zMTTCe2KPpIMl5bQfPJWu4/view?usp=drive_link"} target="_blank" rel="noreferrer" >
                    <button className='btn'><img className='btn_img' src={resume} alt='chat'/> <span className='btn_text'>My Resume</span></button>
                </a>
            </div>
                <div className="hero_section_right">
                    <img src={profilePhoto} alt="profile" className="profile_photo" />
                </div>
        </section>
    )
}
export default HomePage;