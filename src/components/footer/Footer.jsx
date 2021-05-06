import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDiscord, faGithub} from '@fortawesome/free-brands-svg-icons'
import "./Footer.css";

function Footer() {

    const pjson = require('../../../package.json');

    return (
        <footer>
            <div className="footer-info">
                <img className="footer-logo" alt="Logo" src={process.env.PUBLIC_URL + "images/favicon.ico"}/>
                <p className="app-version">Version {pjson.version}</p>
            </div>
            <ul className="footer-section">
                <li>Accueil</li>
                <li>Liste des projets</li>
                <li>Se connecter</li>
            </ul>
            <ul className="footer-section">
                <li>Mentions Légales</li>
                <li>Protections des données</li>
                <li>Nous contacter</li>
            </ul>
            <div className="footer-section footer-social">
                <a href="https://discord.gg/5Fgy6kSe">
                    <FontAwesomeIcon icon={faDiscord} size={"2x"}/>
                </a>
                <a href="https://github.com/Illenhad/associsson">
                    <FontAwesomeIcon icon={faGithub} size={"2x"}/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;