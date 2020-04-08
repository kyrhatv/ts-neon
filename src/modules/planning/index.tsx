import React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { Counter } from './test/Counter';
import { Dashboard } from './dashboard/Dashboard';
import { Demo } from './demo/Demo';
import { RootStruct } from '../../../src/app/RootStruct';

import { DynamicBreadcrumbs } from '../../components/DynamicBreadcrumbs/DynamicBreadcrumbs';

const Planning = (routerProps: { match: { path: any } }) => {
    let location = useLocation();
    let folderPaths = location.pathname.split('/').filter((el) => el !== '');
    return (
        <>
            <DynamicBreadcrumbs struct={RootStruct} folder={folderPaths}></DynamicBreadcrumbs>
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
        </>
    );
};

export default Planning;
