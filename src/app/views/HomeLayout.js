import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import { Header } from '../components/Header/Header';
import SmartHeader from '../containers/SmartHeader/SmartHeader';
import SmartHomePage from '../containers/SmartHomePage/SmartHomePage';

export const HomeLayout = (props) => {

    return (
        <section className="page page-full home-layout">
            <SmartHeader />
            <main className="page-content">
                <Switch>
                    <Route name="root" exact path='/' component={SmartHomePage} />
                </Switch>
            </main>
        </section>
    );
}
