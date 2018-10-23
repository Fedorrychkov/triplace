import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomeLayout } from './views/HomeLayout';

class App extends Component<{}, {}> {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route name="root" exact path='/' component={HomeLayout}/>
        </Switch>
      </Fragment>
    );
  }
}

export default App;
