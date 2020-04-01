import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Mage } from './mage/Mage';
import { Priest } from './priest/Priest';
import { RootStruct } from '../../app/RootStruct';
import { DynamicBreadcrumbs } from '../../components/DynamicBreadcrumbs/DynamicBreadcrumbs';

const Spells = (routerProps: { match: { path: any } }) => {
    let location = useLocation();
    let folderPaths = location.pathname.split('/').filter(el => el !== '');

    return (
        <>
            <DynamicBreadcrumbs struct={RootStruct} folder={folderPaths} />
            <Switch>
                <Route path={`${routerProps.match.path}/priest`} component={Priest}></Route>
                <Route path={`${routerProps.match.path}/mage`} component={Mage}></Route>
                <Route exact path={`${routerProps.match.path}/`}>
                    <h1>Spells</h1>
                </Route>
            </Switch>
        </>
    );
};

export default Spells;
