import React from "react";
import "./header.css";
import { UilHome, UilChatBubbleUser, UilBooks, UilUser, UilApps, UilTimes } from "@iconscout/react-unicons";

const Header = () => {
    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">
                    Johnny
                </a>

                <div className="nav__menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <UilHome className="nav__icon" size="20" color="#61" />
                                Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <UilUser className="nav__icon" size="20" color="#61" />
                                About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#projects" className="nav__link">
                                <UilBooks className="nav__icon" size="20" color="#61" />
                                Projects
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <UilChatBubbleUser className="nav__icon" size="20" color="#61" />
                                Contact
                            </a>
                        </li>
                    </ul>
                    <UilTimes className="nav__icon" size="20" />
                </div>
                <div className="nav__toggle">
                    <UilApps className="nav__icon" size="20" />
                </div>
            </nav>
        </header>
    );
};

export default Header;
