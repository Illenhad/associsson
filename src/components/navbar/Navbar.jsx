import React, {useState, useEffect} from 'react';
import {Link, useLocation} from "react-router-dom";
import './Navbar.css';
import LogiquePopup from '../PopupLogin_SignUp/LogiquePopup';
import Popup from '../PopupLogin_SignUp/Popup';


function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const {revele,toggle} = LogiquePopup();   

    const toggleMenuSmallScreen = () => {
        setToggleMenu(!toggleMenu);
    }

    let location = useLocation();

    useEffect(() => {
        const changeWidth = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth > 500) {
                setToggleMenu(false);
            }
        };

        window.addEventListener('resize', changeWidth);
        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    }, []);

    return (
        <nav>
            <div className="navbar-container">
                <Link to="/">
                    <img className="navbar-logo" alt="Logo" src={process.env.PUBLIC_URL + "images/meta/favicon.ico"}/>
                </Link>
                <ul
                    className={(toggleMenu || windowWidth > 500) ? "navbar active" : "navbar"}
                    onClick={toggleMenuSmallScreen}>
                    <Link to="/" className="navbar-items">
                        <li className={location.pathname === "/" ? "selected" : ""}>Accueil</li>
                    </Link>
                    <Link to="/projects" className="navbar-items">
                        <li className={location.pathname === "/projects" ? "selected" : ""}>Projets</li>
                    </Link>
                    <a onClick={toggle} className="navbar-items">
                        <li >Connexion</li>
                    </a>
                </ul>
                <button onClick={toggleMenuSmallScreen}
                        className={(toggleMenu || windowWidth > 500) ? "navbar-btn active" : "navbar-btn"}>
                    <div className="btn-row"/>
                    <div className="btn-row"/>
                    <div className="btn-row"/>
                </button>
            </div>
            <Popup
          revele={revele}
          cache={toggle}
        />
        </nav>
    );
}

export default Navbar;