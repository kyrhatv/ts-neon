import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainMenu } from '../components/MainMenuSidebar/MainMenu';
import { RootStruct } from './RootStruct';
import Planning from '../modules/planning';
import Spells from '../modules/spells';

import '../style/style.less';

const Root: FunctionComponent = () => {
    return (
        <Router>
            <MainMenu struct={RootStruct} />
            <Switch>
                <Route path="/about">
                    <p>About</p>
                </Route>
                <Route path="/profile">
                    <p>Profile</p>
                </Route>
                <Route path="/spells" component={Spells} />
                <Route path="/planning" component={Planning} />
                <Route path="/timesheets">
                    <p>Timesheets</p>
                </Route>
                <Route exact path="/">
                    <p>Home</p>
                </Route>
            </Switch>
        </Router>
    );
};

export default Root;
