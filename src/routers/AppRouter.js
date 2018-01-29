import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import IndexPage from "../components/IndexPage";
import SportsmenPage from "../components/sportsman/SportsmenPage";
import SchoolListPage from "../components/schools/list/SchoolListPage";
import SchoolPage from "../components/schools/school/SchoolPage";
import Reboot from "material-ui/es/Reboot/Reboot";

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Reboot />
            <Switch>
                <PublicRoute path="/" component={IndexPage} exact={true}/>
                <PrivateRoute path="/sportsman/:id" component={SportsmenPage}/>
                <PrivateRoute path="/schools" exact={true} component={SchoolListPage}/>
                <PrivateRoute path="/schools/:id/:view?" component={SchoolPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
