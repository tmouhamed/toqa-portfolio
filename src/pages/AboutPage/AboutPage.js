import React from "react";
import './AboutPage.css'
import arrow from '../../assets/down-arrow.png'

 export const  AboutPage = () => {
     return (
         <section id={"about"} className="about_page">
             <h1 className="about_inner_title">About</h1>
            <p className={"about_inner_text"}>Welcome to my portfolio! I’m a dedicated software engineer currently
                 studying the Software Engineering AI track at Centennial College, building on my background in computer
                 science.With a passion for creating innovative solutions and a keen interest in artificial intelligence,
                 I strive to merge technical expertise with real-world applications. As a proud parent of two,
                 I balance my professional aspirations with family life, constantly inspired by the challenges
                 and joys that come with both roles. I invite you to explore my projects and learn more about
                 my journey in the ever-evolving tech landscape. and here some of my technical skills.
             </p>
             <img src={arrow} alt={"arrow"}/>
         </section>
     )
 }