import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes';

let history = createBrowserHistory();

let router = <Router history={history}>{routes}</Router>;
ReactDOM.render(router, document.getElementById('app'));

export default router;