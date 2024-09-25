import React, {useState, useEffect} from "react";
import { Link } from 'react-scroll';
import './navbar.css';
import logo from '../../assets/logo.png';

export const Navbar = () => {
    const [navActive, setNavActive] = useState(false);

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

    useEffect(() => {
        if(window.innerWidth <= 1200) {
            closeNav();
        }
    }, [])
    return (
        // eslint-disable-next-line no-template-curly-in-string
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <img src={logo} alt={ "logo"} className="navbarLogo"/>
            <Link className={`navHamburger ${navActive ? "active" : ""}`} onClick = {toggleNav} >
                <span className="navHamburger_list"></span>
                <span className="navHamburger_list"></span>
                <span className="navHamburger_list"></span>
                <span className="navHamburger_list"></span>
            </Link>
            <div className={`navbarItems ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link onClick={closeNav}
                              activeClass="navbarActive"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                              to={"heroSection"}
                              className="navbarItem">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeNav}
                              activeClass="navbarActive"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                              to={"portfolio"}
                              className="navbarItem">
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeNav}
                              activeClass="navbarActive"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                              to={"About"}
                              className="navbarItem">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeNav}
                              activeClass="navbarActive"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                              to={"skills"}
                              className="navbarItem">
                            Skills
                        </Link>
                    </li>
                </ul>
            </div>
            <Link onClick={closeNav}
                  activeClass="navbarActive"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to={"contact"}
                  className="btn btn-outline-primary">
                Contact
            </Link>
        </nav>
    )
}