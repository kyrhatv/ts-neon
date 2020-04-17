import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { PageHeader, PageContent } from '../../../hs-components/Layout';


import { Counter } from './test/Counter';
import { Demo } from './demo/Demo';

import Ribbon from '../../components/ribbon';

const Planning = (routerProps: { match: { path: any } }) => {
    return (
        <>
            <Ribbon />
            <PageContent>
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
            </PageContent>
        </>
    );
};

export default Planning;
