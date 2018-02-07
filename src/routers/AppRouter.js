import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import NotFoundPage from '../components/NotFoundPage';
import IndexPage from "../components/IndexPage";
import SportsmenPage from "../components/sportsman/SportsmenPage";
import SchoolPage from "../components/schools/school/SchoolPage";
import Reboot from "material-ui/es/Reboot/Reboot";
import SchoolListPage from "../components/schools/list/SchoolListPage";
import LibrariesPage from "../components/library/LibrariesPage";

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Reboot/>
            <Switch>
                <Route path="/" component={IndexPage} exact={true}/>
                <Route path="/sportsman/:sportsmenId/:view?" exact={true} component={SportsmenPage}/>
                <Route path="/schools/:schoolId/:view?" exact={true} component={SchoolPage}/>
                <Route path="/schools" exact={true} component={SchoolListPage}/>
                <Route path="/libraries" exact={true} component={LibrariesPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
