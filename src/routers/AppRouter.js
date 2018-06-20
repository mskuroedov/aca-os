import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import NotFoundPage from '../components/NotFoundPage';
import IndexPage from "../components/IndexPage";
import SportsmenPage from "../components/sportsman/SportsmenPage";
import SchoolPage from "../components/schools/school/SchoolPage";
import SchoolListPage from "../components/schools/list/SchoolListPage";
import LibrariesPage from "../components/library/LibrariesPage";
import CssBaseline from "@material-ui/core/es/CssBaseline/CssBaseline";
import GroupPage from "../components/groups/GroupPage";
import WorkerPage from "../components/schools/school/workers/WorkerPage";
import NewsPage from "../components/news/NewsPage";
import ShowNewsPage from "../components/news/ShowNewsPage";
import CalendarPage from "../components/calendar/CalendarPage";
import DatePage from "../components/calendar/date/DatePage";
import CommonStatsPage from "../components/stats/CommonStatsPage";
import AuthorPage from "../components/library/Author/AuthorPage";
import LibraryItemPage from "../components/library/Item/LibraryItemPage";
import UsersInfoPage from "../components/usersInfo/UsersInfoPage";
import CartPage from "../components/cart/CartPage";
import ItemPage from "../components/usersInfo/content/itempage/ItemPage";
import TournamentsPage from "../components/tournaments/TournamentsPage";
import TeamPage from "../components/team/TeamPage";

export const history = createHistory();

export const routes = {
    schoolsPage: () => (
        '/schools'
    ),
    schoolPage: (schoolId, view) => (
        `/schools/${schoolId}/${view?view:''}`
    )
};

const AppRouter = () => (
    <Router history={history}>
        <div>
            <CssBaseline/>
            <Switch>
                <Route path="/" component={IndexPage} exact={true}/>
                <Route path="/sportsman/:sportsmenId/:view?" exact={true} component={SportsmenPage}/>
                <Route path="/schools/:schoolId/:view?" exact={true} component={SchoolPage}/>
                <Route path="/schools" exact={true} component={SchoolListPage}/>
                <Route path="/libraries" exact={true} component={LibrariesPage}/>
                <Route path="/groups/" exact={true} component={GroupPage}/>
                <Route path="/worker/:workerId" exact={true} component={WorkerPage}/>
                <Route path="/news" exact={true} component={NewsPage}/>
                <Route path="/news/1" exact={true} component={ShowNewsPage}/>
                <Route path="/calendar" exact={true} component={CalendarPage}/>
                <Route path="/tournaments" exact={true} component={TournamentsPage}/>
                <Route path="/calendar/1" exact={true} component={DatePage}/>
                <Route path="/stats" exact={true} component={CommonStatsPage}/>
                <Route path="/author/1" exact={true} component={AuthorPage}/>
                <Route path="/libraries/1" exact={true} component={LibraryItemPage}/>
                <Route path="/users_info/item" exact={true} component={ItemPage}/>
                <Route path="/users_info/:value" exact={true} component={UsersInfoPage}/>
                <Route path="/cart" exact={true} component={CartPage}/>
                <Route path="/team/1" exact={true} component={TeamPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
