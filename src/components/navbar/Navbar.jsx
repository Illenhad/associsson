import React, {useState, useEffect} from 'react';
import './Navbar.css';

import LogiquePopup from '../PopupLogin_SignUp/LogiquePopup.js';
import Popup from '../PopupLogin_SignUp/Popup.js';

function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const {revele,toggle} = LogiquePopup();   

    const toggleMenuSmallScreen = () => {
        setToggleMenu(!toggleMenu);
    }

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
        <React.Fragment>
        <nav>
            <img className="navbar-logo" alt="Logo" src={process.env.PUBLIC_URL + "images/favicon.ico"}/>
            <ul className={(toggleMenu || windowWidth > 500) ? "navbar active" : "navbar"}>
                <li className="navbar-items">Page 1</li>
                <li className="navbar-items">Page 2</li>
                <li className="navbar-items"onClick={toggle}>Log in</li>
            </ul>
            <button onClick={toggleMenuSmallScreen} className={(toggleMenu || windowWidth > 500) ? "navbar-btn active" : "navbar-btn"}>
                <div className="btn-row"/>
                <div className="btn-row"/>
                <div className="btn-row"/>
            </button>
        </nav>
        <Popup
          revele={revele}
          cache={toggle}
        />
        </React.Fragment>
    );
}

export default Navbar;