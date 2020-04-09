import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainMenu } from '../components/MainMenuSidebar/MainMenu';
import { RootStruct } from './RootStruct';
import Planning from '../modules/planning';
import Spells from '../modules/spells';

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
                        <Route path="/request" component={Spells} />
                        <Route path="/timesheets">
                            <p>Timesheets</p>
                        </Route>
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
