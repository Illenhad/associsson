import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDiscord, faGithub} from '@fortawesome/free-brands-svg-icons'
import "./Footer.css";

function Footer() {

    const pjson = require('../../../package.json');

    return (
        <footer>
            <div className="footer-container">
                <div className="footer-section footer-info">
                    <img className="footer-logo" alt="Logo" src={process.env.PUBLIC_URL + "images/meta/favicon.ico"}/>
                    <p className="app-version">Version {pjson.version}</p>
                </div>
                <ul className="footer-section">
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/projects">Liste des projets</Link>
                    </li>
                    <li>
                        <Link to="/login">Se connecter</Link>
                    </li>
                </ul>
                <ul className="footer-section">
                    <li><Link to="/legal">Mentions Légales</Link></li>
                    <li><Link to="/protection-data">Protections des données</Link></li>
                    <li><Link to="/contact">Nous contacter</Link></li>
                </ul>
                <div className="footer-section footer-social">
                    <a href="https://discord.gg/5Fgy6kSe">
                        <FontAwesomeIcon icon={faDiscord} size={"2x"}/>
                    </a>
                    <a href="https://github.com/Illenhad/associsson">
                        <FontAwesomeIcon icon={faGithub} size={"2x"}/>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;