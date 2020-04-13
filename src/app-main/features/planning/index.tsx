import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Counter } from './test/Counter';
import { Demo } from './demo/Demo';

const Planning = (routerProps: { match: { path: any } }) => {
    return (
        <Switch>
            <Route path={`${routerProps.match.path}/dashboard`} component={Demo} />
            <Route path={`${routerProps.match.path}/schedules`} component={Counter} />
            <Route path={`${routerProps.match.path}/lines`}>
                <p>Planning > Lines</p>
            </Route>
            <Route path={`${routerProps.match.path}/replacements`}>
                <p>Planning > Replacements</p>
            </Route>
            <Route exact path={`${routerProps.match.path}/`}>
                <Redirect to={`${routerProps.match.path}/dashboard`} />
            </Route>
        </Switch>
    );
};

export default Planning;
