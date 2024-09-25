import React from "react";
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

class Navbar extends React.Component {
    render() {
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
}

export default Navbar;