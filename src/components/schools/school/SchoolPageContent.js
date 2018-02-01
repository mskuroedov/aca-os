import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, {Tab} from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import SchoolInfo from "./common/SchoolInfo";
import SportsmenPageProfile from "../../sportsman/profile/SportsmenPageProfile";
import Sportsman from "./sportsman/SportsmanListPage";
import {history} from "../../../routers/AppRouter";
import {Redirect} from "react-router-dom";
import Trainers from "./trainers/Trainers";

function TabContainer(props) {
    return (
        <Typography
            component="div"
            style={{paddingTop: 24, backgroundColor: "#f6f6f6", paddingRight: 168, paddingLeft: 168}}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing.unit * 3,
        marginLeft: 'auto',
        color: '#00755E',
        fontSize: 1.4,
        fontWeight: 'bold'
    },
    rootPrimarySelected: {
        color: '#000',
    },
    appBar: {
        fontSize: 1.4,
        backgroundColor: '#fff',
        fontWeight: 'bold',
        justifyContent: 'center',
        boxShadow: 'none'
    },
    tabs: {
        justifyContent: 'flex-end',
        fontSize: 14
    },
    menuItem: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    button: {
        // color: '#00755E',
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'BlissPro',
    },
    bc: {
        color: "#000 !important"
    },
    rootTabPrimary: {
        minWidth: 0,
        color: '#00755E'
    },
    menuFlexContainer: {
        justifyContent: 'center'
    }

});

class SchoolMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange = (event, value) => {
        history.push(`/schools/${this.props.schoolId}/${value}`);
    };

    render() {
        const {classes} = this.props;
        const {view, schoolId} = this.props;

        return this.props.view ? (
            <section>
                <AppBar position="static" className={classes.appBar}
                        style={{paddingRight: 168, paddingLeft: 168, backgroundColor: '#fff'}}>
                    <Tabs value={view}
                          onChange={this.handleChange}
                          className={classes.tabs}
                          indicatorColor="primary"
                          textColor="primary"
                          classes={{
                              root: classes.rootInherit,
                              buttonAuto: classes.button, // className, e.g. `OverridesClasses-root-X`
                              flexContainer: classes.menuFlexContainer// className, e.g. `OverridesClasses-label-X`
                          }}
                    >
                        <Tab label="Общее"
                             textColor="primary"
                             value="common"
                             classes={{
                                 label: classes.button,
                                 labelContainer: classes.button,// className, e.g. `OverridesClasses-label-X`
                                 wrapper: classes.button,
                                 rootPrimarySelected: classes.bc,// className, e.g. `OverridesClasses-label-X`
                                 rootPrimary: classes.rootTabPrimary// className, e.g. `OverridesClasses-label-X`
                             }}/>
                        <Tab label="Расписание"
                             textColor="primary"

                             classes={{
                                 label: classes.button,
                                 rootPrimarySelected: classes.bc,
                                 rootPrimary: classes.rootTabPrimary
                             }}
                        />
                        <Tab label="Статистика"
                             textColor="primary"
                             classes={{
                                 label: classes.button,
                                 rootPrimarySelected: classes.bc,
                                 rootPrimary: classes.rootTabPrimary// className, e.g. `OverridesClasses-label-X`
                             }}/>
                        <Tab label="Группы"
                             textColor="primary"

                             classes={{
                                 label: classes.button,
                                 rootPrimarySelected: classes.bc,
                                 rootPrimary: classes.rootTabPrimary// className, e.g. `OverridesClasses-label-X`
                             }}/>
                        <Tab label="Спортсмены"
                             textColor="primary"
                             value="sportsman"
                             classes={{
                                 label: classes.button,
                                 rootPrimarySelected: classes.bc,
                                 rootPrimary: classes.rootTabPrimary// className, e.g. `OverridesClasses-label-X`
                             }}/>
                        <Tab label="Тренеры"
                             textColor="primary"
                             value="trainers"
                             classes={{
                                 label: classes.button,
                                 rootPrimarySelected: classes.bc,
                                 rootPrimary: classes.rootTabPrimary// className, e.g. `OverridesClasses-label-X`
                             }}/>
                        <Tab label="Контакты"
                             textColor="primary"

                             classes={{
                                 label: classes.button,
                                 rootPrimarySelected: classes.bc,
                                 rootPrimary: classes.rootTabPrimary// className, e.g. `OverridesClasses-label-X`
                             }}/>
                    </Tabs>
                </AppBar>

                <TabContainer>
                    {view === 'common' && <SchoolInfo/>}
                    {view === '1' && <SportsmenPageProfile/>}
                    {view === '2' && 123}
                    {view === '3' && 123}
                    {view === 'schools' && <Sportsman/>}
                    {view === 'trainers' && <Trainers/>}
                    {view === '6' && 6}
                </TabContainer>
            </section>
        ) : (
            <Redirect to={`/schools/${schoolId}/common`}/>
        )
    }
}

SchoolMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SchoolMenu);