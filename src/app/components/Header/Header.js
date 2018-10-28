import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/img/logo-big.png';
import './header.scss';

export const Header = (props) => {

    const { navIsOpen, updateHeader } = props;


    window.onhashchange = () => {
        if (document.location.hash !== '#navopen' && navIsOpen === true) {
            updateHeader(false);
        }
    }

    const openNavigation = () => {
        updateHeader(!navIsOpen);
    }
    
    const closeNavigation = () => {
        document.location.hash = '';
        updateHeader(!navIsOpen);
    }

    return (
        <Fragment>
            <header className="header">
                <div className="header__container container">
                    <Link to="/"><h1 className="header__logo"> <img src={logo} alt="Triplace - logo" /> <span>Triplace</span></h1></Link>
                    <a href="#navopen" className="header__burger" onClick={openNavigation}> <span className="burger"></span> </a>
                </div>
            </header>
            <div className={`header__slide-menu ${navIsOpen ? 'open' : ''}`}>
                <div className="header__slide-overflow" onClick={closeNavigation}></div>
                <nav className={`header-nav ${navIsOpen ? 'open' : ''}`}>
                    <ul className="header-nav__list">
                        <li className="header-nav__item"></li>
                    </ul>
                </nav>
            </div>
        </Fragment>
   );
}