import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SmartHeader from '../containers/SmartHeader/SmartHeader';
import SmartHomePage from '../containers/SmartHomePage/SmartHomePage';
import SmartPlacePage from '../containers/SmartPlacePage/SmartPlacePage';
import NotFound from '../pages/NotFound/NotFound';


export const HomeLayout = (props) => {

    return (
        <section className="page page-full home-layout">
            <SmartHeader />
            <main className="page-content">
                <Switch>
                    <Route name="root" exact path='/' component={SmartHomePage} />
                    <Route name="place" path='/place/:id' component={SmartPlacePage} />
                    <Route name="error" path='*' component={NotFound} />
                </Switch>
            </main>
        </section>
    );
}
