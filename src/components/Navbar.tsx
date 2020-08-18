import { Link } from 'gatsby';

import React, { useState } from 'react';
import homeIcon from '../img/homeIcon.svg';
import searchIcon from '../img/searchIcon.svg';

// eslint-disable-next-line react/display-name
const Navbar = () => {
    const [active, setActive] = useState(false);
    const [navBarActiveClass, setNavBarActiveClass] = useState('');

    const toggleHamburger = () => {
        // toggle the active boolean in the state
        setActive(!active);
        setNavBarActiveClass(active ? 'is-active' : '');
    };

    return (
        <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
            <div className="container">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item" title="Logo">
                        <img src={homeIcon} alt="Home Logo" style={{ width: '88px' }} />
                    </Link>
                    {/* Hamburger menu */}
                    <div
                        className={`navbar-burger burger ${navBarActiveClass}`}
                        data-target="navMenu"
                        onClick={() => toggleHamburger()}
                    >
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
                <div id="navMenu" className={`navbar-menu ${navBarActiveClass}`}>
                    {/* <div className="navbar-start has-text-centered">
                            <Link className="navbar-item" to="/about">
                                About
                            </Link>
                            <Link className="navbar-item" to="/products">
                                Products
                            </Link>
                            <Link className="navbar-item" to="/blog">
                                Blog
                            </Link>
                            <Link className="navbar-item" to="/contact">
                                Contact
                            </Link>
                            <Link className="navbar-item" to="/contact/examples">
                                Form Examples
                            </Link>
                        </div> */}
                    <div className="navbar-end has-text-centered">
                        <a
                            className="navbar-item"
                            href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="icon">
                                <img src={searchIcon} alt="Search Icon" />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
