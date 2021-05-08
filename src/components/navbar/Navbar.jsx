import React, {useState, useEffect} from 'react';
import {Link, useLocation} from "react-router-dom";
import './Navbar.css';

function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
                    <Link to="/login" className="navbar-items">
                        <li className={location.pathname === "/login" ? "selected" : ""}>Connexion</li>
                    </Link>
                </ul>
                <button onClick={toggleMenuSmallScreen}
                        className={(toggleMenu || windowWidth > 500) ? "navbar-btn active" : "navbar-btn"}>
                    <div className="btn-row"/>
                    <div className="btn-row"/>
                    <div className="btn-row"/>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;