import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainMenu } from '../../hs-components/MainMenuSidebar/MainMenu';
import { RootStruct } from './RootStruct';
import Planning from '../features/planning';
import Timesheets from '../features/timesheets';

import './style.css';

const Root: FunctionComponent = () => {
    return (
        <Router>
            <MainMenu struct={RootStruct} />
            <div className="main-content" id="maintext">
                <div className="sidebar-menu-content">
                    <Switch>
                        <Route exact path="/">
                            <p>Home</p>
                        </Route>
                        <Route path="/planning" component={Planning} />
                        <Route path="/timesheets" component={Timesheets} />
                        <Route path="/about">
                            <p>About</p>
                        </Route>
                        <Route path="/profile">
                            <p>Profile</p>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default Root;
