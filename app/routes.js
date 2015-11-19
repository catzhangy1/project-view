import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Whoops from './components/Whoops';
import ProjectView from './components/ProjectView';

const routes = (<Route path ="/" component={App}>
    <IndexRoute component={Whoops} />
    <Route path=':user/:project'component={ProjectView}/>
</Route>);
export default routes;