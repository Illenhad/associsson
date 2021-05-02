import React, {useState, useEffect} from 'react';
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
            if (window.innerWidth > 500) { setToggleMenu(false); }
        };

        window.addEventListener('resize', changeWidth);
        return () => { window.removeEventListener('resize', changeWidth); }
    }, []);

    return (
        <nav>
            <ul className={(toggleMenu || windowWidth > 500) ? "navbar active" : "navbar"}>
                <li className="navbar-items">Page 1</li>
                <li className="navbar-items">Page 2</li>
                <li className="navbar-items">Page 3</li>
            </ul>
            <button onClick={toggleMenuSmallScreen} className="navbar-btn">BTN</button>
        </nav>
    );
}

export default Navbar;