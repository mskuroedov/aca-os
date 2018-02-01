import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import IndexPage from "../components/IndexPage";
import SportsmenPage from "../components/sportsman/SportsmenPage";
import SchoolPage from "../components/schools/school/SchoolPage";
import LibrariesPage from "../components/library/LibrariesPage";
import Reboot from "material-ui/es/Reboot/Reboot";
import SchoolListPage from "../components/schools/list/SchoolListPage";

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Reboot/>
            <Switch>
                <PublicRoute path="/" component={IndexPage} exact={true}/>
                <PrivateRoute path="/sportsman/:id" exact={true} component={SportsmenPage}/>
                <PrivateRoute path="/schools/:schoolId/:view?" exact={true} component={SchoolPage}/>
                <PrivateRoute path="/schools" exact={true} component={SchoolListPage}/>
                <PrivateRoute path="/libraries" exact={true} component={LibrariesPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
