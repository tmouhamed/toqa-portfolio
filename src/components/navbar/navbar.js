import React, {useState, useEffect} from "react";
import { Link } from 'react-scroll';
import './navbar.css';
import logo from '../../assets/logo.png';

export const Navbar = () => {

    return (
        <nav className="navbar">
            <img src={logo} alt={ "logo"} className="navbar_logo"/>
            <div className="desktop_menu">
                <Link className="desktop_menu_item" activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
                <Link className="desktop_menu_item" activeClass={"active"} to="skills" spy={true} smooth={true} offset={-50}>Skills</Link>
                <Link className="desktop_menu_item" activeClass={"active"} to="projects" spy={true} smooth={true} offset={-50}>Projects</Link>
                <Link className="desktop_menu_item" activeClass={"active"} to="contact" spy={true} smooth={true} offset={-50}>Contact</Link>
            </div>
            <button className="desktop_menu_btn" onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>Contact Me</button>
        </nav>
    )
}