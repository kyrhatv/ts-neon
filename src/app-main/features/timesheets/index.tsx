import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Dashboard } from '../timesheets/dashboard/Dashboard';
import { RootStruct } from '../../app/RootStruct';
import { DynamicBreadcrumbs } from '../../../hs-components/DynamicBreadcrumbs/DynamicBreadcrumbs';

const Timesheets = (routerProps: { match: { path: any } }) => {
    let location = useLocation();
    let folderPaths = location.pathname.split('/').filter((el) => el !== '');

    return (
        <>
            <DynamicBreadcrumbs struct={RootStruct} folder={folderPaths} />
            <Switch>

                <Route path={`${routerProps.match.path}/dashboard`} component={Dashboard}></Route>
                <Route path={`${routerProps.match.path}/timesheets`} component={Dashboard}></Route>
                <Route exact path={`${routerProps.match.path}/`}>
                    <h1>Timesheets</h1>
                </Route>
            </Switch>
        </>
    );
};

export default Timesheets;
