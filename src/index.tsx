import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@syncfusion/ej2-base/styles/bootstrap4.css';
import '@syncfusion/ej2-react-layouts/styles/bootstrap4.css';
import Root from './app-main/app/Root';
import './translations/i18n';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './app-main/app/store';
import { enableRipple } from '@syncfusion/ej2-base';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

enableRipple(true);

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
