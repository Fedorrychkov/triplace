import React, { Fragment } from 'react';
import './header.scss';

export const Header = () => (
    <Fragment>
        <header className="header">
            <div className="header__container container">
                header
            </div>
        </header>
        <div className="header__slide-menu">
            <nav className="header-nav">
                <ul className="header-nav__list">
                    <li className="header-nav__item"></li>
                </ul>
            </nav>
        </div>
   </Fragment>
)