import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Dashboard } from '../timesheets/dashboard/Dashboard';

const Timesheets = (routerProps: { match: { path: any } }) => {
    return (
        <Switch>
            <Route path={`${routerProps.match.path}/dashboard`} component={Dashboard}></Route>
            <Route path={`${routerProps.match.path}/timesheets`} component={Dashboard}></Route>
            <Route exact path={`${routerProps.match.path}/`}>
                <h1>Timesheets</h1>
            </Route>
        </Switch>
    );
};

export default Timesheets;
