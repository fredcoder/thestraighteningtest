import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../containers/Home';

class Router extends Component {

    render() {
        return (
                <BrowserRouter>
                    {/*Routes and pages Configuration*/}
                    <Switch>
                        <Route exact path="/" component={Home}/>

                    </Switch>
                </BrowserRouter>
        );
    }
}

export default Router;