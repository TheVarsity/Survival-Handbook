import { Link, StaticQuery, graphql } from 'gatsby';

import React, { useEffect, useState } from 'react';

import { HomeIcon, SearchIcon } from './Icons';

import Slide from 'react-reveal/Slide';

import Search from './Search';

import { BrowserView, MobileView } from 'react-device-detect';

// import searchIcon from '../img/searchIcon.svg';

// eslint-disable-next-line react/display-name
const Navbar = ({ isHomePage }: { isHomePage?: boolean }) => {
    // const [active, setActive] = useState(false);

    const [searchToggle, setSearchToggle] = useState(false);

    useEffect(() => {
        document.documentElement.className = isHomePage ? '' : 'has-navbar-fixed-top';
    }, [isHomePage]);

    return (
        <StaticQuery
            query={graphql`
                query SearchIndexQuery {
                    siteSearchIndex {
                        index
                    }
                }
            `}
            render={data => (
                <nav
                    className={`navbar is-transparent is-fixed ${isHomePage ? '' : 'is-fixed-top'}`}
                    role="navigation"
                    aria-label="main-navigation"
                >
                    <div className="container">
                        <div className="navbar-brand">
                            <Link to="/" className="navbar-item" title="Logo">
                                {/* <img src={homeIcon} alt="Home Logo" style={{ width: '88px' }} /> */}
                                <HomeIcon />
                            </Link>
                            <div className="navbar-end has-text-centered navbar-item is-relative">
                                <MobileView>
                                    <a
                                        className="navbar-item"
                                        onClick={() => {
                                            setSearchToggle(!searchToggle);
                                        }}
                                    >
                                        <SearchIcon />
                                    </a>
                                </MobileView>
                            </div>
                        </div>
                        <div id="navMenu" className={`navbar-menu is-active`}>
                            <div className="navbar-end has-text-centered navbar-item is-relative">
                                <Slide
                                    right
                                    when={searchToggle}
                                    style={{ display: searchToggle ? 'visible' : 'none' }}
                                >
                                    {' '}
                                    <Search
                                        searchIndex={data.siteSearchIndex.index}
                                        toggle={searchToggle}
                                    />
                                </Slide>

                                <BrowserView>
                                    <a
                                        className="navbar-item"
                                        onClick={() => {
                                            setSearchToggle(!searchToggle);
                                        }}
                                    >
                                        <SearchIcon />
                                    </a>
                                </BrowserView>
                            </div>
                        </div>
                    </div>
                    <style jsx>{`
                        .navbar-brand {
                            justify-content: space-between;
                        }
                    `}</style>
                </nav>
            )}
        />
    );
};

export default Navbar;
