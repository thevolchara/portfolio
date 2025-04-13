import { useState } from "react";
import "./HamburgerMenu.css";
import {Link} from "react-router";

const HamburgerMenu = () => {
    const startPath = "/portfolio/project";
    const links = [
        {path:`${startPath}/shov`,header:"''Шов+Шов''"},
        {path:`${startPath}/site`, header:"''Сайт-визитка''"},
        {path:`${startPath}/psycho`, header:"''ЯПсихолог''"},
        {path:`${startPath}/together`, header:"''ВМесте''"},
        {path:`${startPath}/baza`, header:"''БАЗА''"}
    ];
    const [isOpen, setIsOpen] = useState(false); // State to track menu visibility

    // Open the menu
    const openMenu = () => {
        setIsOpen(true);
    };

    // Close the menu
    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className="hamburger-container">
            {/* Hamburger Icon */}
            <div className={`hamburger-icon ${isOpen ? "open" : ""}`} onClick={openMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Navigation Menu */}
            <nav className={`nav-menu ${isOpen ? "active" : ""}`}>
                {/* Close Button Inside Menu */}
                <button className="close-button" onClick={closeMenu}>
                    &times; {/* Unicode for "X" symbol */}
                </button>

                {/* Menu Links */}
                <ul>
                    <ul>
                        {links.map((link) => (
                            <li onClick={closeMenu}><Link to={link.path}>{link.header}</Link></li>
                        ))}
                    </ul>
                </ul>
            </nav>
        </div>
    );
};

export default HamburgerMenu;