import React from 'react';
import {Route, Redirect, IndexRoute} from 'react-router';
import App from './components/App';
import Whoops from './components/Whoops';
import ProjectView from './components/ProjectView';

const routes = (<Route component={App}>
    <IndexRoute component={Whoops} />
    <Route path=':user/:project'component={ProjectView}/>
    <Route path='/*' component ={Whoops} />
</Route>);
export default routes;