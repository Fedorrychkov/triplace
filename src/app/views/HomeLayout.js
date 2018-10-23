import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from '../components/Header/Header';
import { HomePage } from '../pages/HomePage';

export const HomeLayout = () => (
    <section className="page page-full home-layout">
        <Header />
        <main className="page-content">
            <Switch>
                <Route name="root" exact path='/' component={HomePage}/>
            </Switch>
        </main>
    </section>
);
