import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../containers/Home';

class Router extends Component {

    render() {
        return (
                <BrowserRouter>
                    {/*Routes and pages Configuration*/}
                    <Switch>
                        <Route exact path="/Home" component={Home}/>
                        {/*<Route exact path="/Events" component={Events}/>
                    <Route exact path="/Events/CreateEvent" component={CreateEvent}/>
                    <Route exact path="/Events/UpdateEvent/:id" component={UpdateEvent}/>
                    <Route exact path="/Alerts" component={Alerts}/>
                    <Route exact path="/Alerts/UpdateAlert/:id" component={UpdateAlert}/>
                    <Route exact path="/Terms" component={Terms}/>
                    <Route exact path="/ResidentGuides" component={UserGuide}/>
                    <Route component={Error}/>*/}
                    </Switch>
                </BrowserRouter>
        );
    }
}

export default Router;