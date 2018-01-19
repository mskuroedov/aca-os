import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import IndexPage from "../components/IndexPage";
import SportsmenPage from "../components/sportsmen/SportsmenPage";

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={IndexPage} exact={true}/>
                <PrivateRoute path="/sportsmens/:id" component={SportsmenPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
