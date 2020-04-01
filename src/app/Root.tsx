import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DynamicNavbar } from '../components/DynamicNavbar/DynamicNavbar';
import { RootStruct } from './RootStruct';
import Planning from '../modules/planning';
import Spells from '../modules/spells';

import { useCss } from 'react-use';

import '../style/style.less';

const Root: FunctionComponent = () => {
    const style = {
        backgroundColor: '#303030',
        color: 'white',
        height: '100%',
        minHeight: '100%'
    };

    const MainStyle = useCss(style);

    return (
        <div className={MainStyle}>
            <Router>
                <DynamicNavbar struct={RootStruct} />
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
        </div>
    );
};

export default Root;
