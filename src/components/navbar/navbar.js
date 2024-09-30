import React, {useState, useEffect} from "react";
import { Link } from 'react-scroll';
import './navbar.css';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu.png';

export const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);


    /* Name: Toqa Mouhamed
    Student ID: 301479592 */
    return (
        <nav className="navbar">
            <img src={logo} alt={"logo"} className="navbar_logo"/>
            <div className="desktop_menu">
                <Link className="desktop_menu_item" activeClass='active' to="about" spy={true} smooth={true}
                      offset={-100} duration={500}>Home</Link>
                <Link className="desktop_menu_item" activeClass='active' to="skills" spy={true} smooth={true}
                      offset={-50}>Skills</Link>
                <Link className="desktop_menu_item" activeClass='active' to="projects" spy={true} smooth={true}
                      offset={-50}>Projects</Link>
                <Link aclassName="desktop_menu_item" ctiveClass='active' to="contact" spy={true} smooth={true}
                      offset={-50}>Contact</Link>
            </div>
            <button className="desktop_menu_btn" onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}> Contact Me
            </button>

            {/*<img src={menu} alt={"menu"} className="onClick={()=>setShowMenu(showMenu)}" onClick={() => setShowMenu(!showMenu)} />*/}
            {/*<div className="mob_menu" style={{display: showMenu ? 'flex': 'none'}}>*/}
            {/*    <Link*/}
            {/*        className="mob_menu_item"*/}
            {/*        activeClass='active'*/}
            {/*        to="about" spy={true}*/}
            {/*        smooth={true}*/}
            {/*        offset={-100}*/}
            {/*        duration={500}*/}
            {/*        onClick={()=>setShowMenu(showMenu)}>*/}
            {/*        Home*/}
            {/*    </Link>*/}
            {/*    <Link*/}
            {/*    className="mob_menu_item"*/}
            {/*    activeClass='active'*/}
            {/*    to="skills"*/}
            {/*    spy={true}*/}
            {/*    smooth={true}*/}
            {/*          offset={-50} onClick={()=>setShowMenu(false)}>Skills</Link>*/}
            {/*    <Link className="mob_menu_item" activeClass='active' to="projects" spy={true} smooth={true}*/}
            {/*          offset={-50} onClick={()=>setShowMenu(false)}>Projects</Link>*/}
            {/*    <Link aclassName="mob_menu_item" ctiveClass='active' to="contact" spy={true} smooth={true}*/}
            {/*          offset={-50} onClick={()=>setShowMenu(false)}>Contact</Link>*/}
            {/*    <Link aclassName="mob_menu_item" ctiveClass='active' to="contact" spy={true} smooth={true}*/}
            {/*          offset={-50} onClick={()=>setShowMenu(false)}>Contact</Link>*/}
            {/*</div>*/}
        </nav>
    )
}