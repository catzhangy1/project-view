import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Whoops from './components/Whoops';

export default (
    <Route>
        <Route path='/:user/:project' component={App} >
            <Route path='*' component={Whoops} />
        </Route>
    </Route>
);