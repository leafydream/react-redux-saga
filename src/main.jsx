import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'proptypes';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import Router from './routers';

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();
import './static/normalize.css';

const store = configureStore();


render(
    <Provider store={store}>
        <Router history={history} />   
    </Provider>,
    document.getElementById('root')
);
