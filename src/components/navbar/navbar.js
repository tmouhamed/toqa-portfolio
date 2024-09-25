import React, {useEffect} from "react";
import {useState, useEffect} from "react";
import { Link } from 'react-scroll';
import './navbar.css';
import logo from '../../assets/logo.png';

export const Navbar = () => {
    const {navActive, setNavActive} = useState(false);
    const toggleNav = () => {
        setNavActive(!navActive);
    }
    const closeNav = () => {
        setNavActive(false);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeNav();
            }
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);
    return (
        <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
            <img src={logo} alt={ "logo"}/>
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Projects</Link>
                <Link className="desktopMenuListItem">Contact Me</Link>
            </div>
            </nav>
        )
}