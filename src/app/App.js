import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Swipe from 'react-easy-swipe';

import { HomeLayout } from './views/HomeLayout';

class App extends Component {
    constructor(props) {
        super(props);
        this.onSwipeMove = this.onSwipeMove.bind(this);
    }

    onSwipeStart(event) {
        // console.log('Start swiping...', event);
    }
    
    onSwipeMove(position, event) {
        if (position.x <= -90 && position.x >= -190) {
            this.props.updateHeader(true);
            document.location.hash = '#navopen';
        }
        if (position.x >= 90 && position.x <= 190) {
            this.props.updateHeader(false);
            document.location.hash = '';
        }
    }
    
    onSwipeEnd(event) {
        // console.log('End swiping...', event);
    }

  render() {
    return (
        <Swipe className="page-full"
            onSwipeStart={this.onSwipeStart}
            onSwipeMove={this.onSwipeMove}
            onSwipeEnd={this.onSwipeEnd}>
            <Fragment>
                <Switch>
                    <Route name="root" exact path='/' component={HomeLayout}/>
                    <Route name="place" path='/place/:id' component={HomeLayout}/>
                    <Route name="error" path='*' component={HomeLayout}/>
                </Switch>
            </Fragment>
        </Swipe>
    );
  }
}

export default App;
