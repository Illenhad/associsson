import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
        <nav>
            <Link to="/">
                <img className="navbar-logo" alt="Logo" src={process.env.PUBLIC_URL + "images/meta/favicon.ico"}/>
            </Link>
            <ul className={(toggleMenu || windowWidth > 500) ? "navbar active" : "navbar"}>
                <li className="navbar-items">
                    <Link to="/">Accueil</Link>
                </li>
                <li className="navbar-items">
                    <Link to="/projects">Projets</Link>
                </li>
                <li className="navbar-items">
                    <Link to="/login">Connexion</Link>
                </li>
            </ul>
            <button onClick={toggleMenuSmallScreen} className={(toggleMenu || windowWidth > 500) ? "navbar-btn active" : "navbar-btn"}>
                <div className="btn-row"/>
                <div className="btn-row"/>
                <div className="btn-row"/>
            </button>
        </nav>
    );
}

export default Navbar;