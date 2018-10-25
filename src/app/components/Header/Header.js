import React, { Fragment } from 'react';

import logo from '../../../assets/img/logo-big.png';
import './header.scss';

export const Header = (props) => {

    const { navIsOpen, updateHeader } = props;

    const openNavigation = () => {
        updateHeader(!navIsOpen);
    }

    const closeNavigation = () => {
        updateHeader(!navIsOpen);
    }

    return (
        <Fragment>
                <header className="header">
                    <div className="header__container container">
                        <h1 className="header__logo"> <img src={logo} alt="Triplace - logo" /> <span>Triplace</span></h1>
                        <div className="header__burger" onClick={openNavigation}> <span className="burger"></span> </div>
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