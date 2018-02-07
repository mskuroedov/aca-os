import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, {Tab} from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import SportsmenPageProfile from "./profile/Profile";
import Perfomance from "./profile/Perfomance";
import Redirect from "react-router-dom/es/Redirect";
import {history} from "../../routers/AppRouter";

function TabContainer(props) {
    return (
        <Typography component="div"
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
        justifyContent: 'flex-end',
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
        justifyContent: 'flex-end'
    }

});

class SportsmenPageContent extends React.Component {

    handleChange = (event, value) => {
        history.push(`/sportsman/${this.props.sportsmenId}/${value}`);
    };

    render() {
        const {classes, view, sportsmenId} = this.props;

        return view ? (
            <section>
                <AppBar
                    position="static" className={classes.appBar}
                    style={{paddingRight: 168, paddingLeft: 168, backgroundColor: '#fff'}}
                >
                    <Tabs
                        value={view}
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
                        <Tab
                            label="Профиль"
                            value="profile"
                            textColor="primary"
                            classes={{
                                label: classes.button,
                                labelContainer: classes.button,// className, e.g. `OverridesClasses-label-X`
                                wrapper: classes.button,
                                rootPrimarySelected: classes.bc,// className, e.g. `OverridesClasses-label-X`
                                rootPrimary: classes.rootTabPrimary// className, e.g. `OverridesClasses-label-X`
                            }}
                        />
                        <Tab
                            label="Тренировочный план"
                            value="plan"
                            textColor="primary"

                            classes={{
                                label: classes.button,
                                rootPrimarySelected: classes.bc,
                                rootPrimary: classes.rootTabPrimary
                            }}
                        />
                        <Tab
                            label="Журнал"
                            value="journal"
                            textColor="primary"


                            classes={{
                                label: classes.button,
                                rootPrimarySelected: classes.bc,
                                rootPrimary: classes.rootTabPrimary// className, e.g. `OverridesClasses-label-X`
                            }}
                        />
                        <Tab
                            label="Спортивные показатели"
                            value="perfomance"
                            textColor="primary"

                            classes={{
                                label: classes.button,
                                rootPrimarySelected: classes.bc,
                                rootPrimary: classes.rootTabPrimary// className, e.g. `OverridesClasses-label-X`
                            }}
                        />
                        <Tab
                            label="Медицинские показатели"
                            value="medical"
                            textColor="primary"

                            classes={{
                                label: classes.button,
                                rootPrimarySelected: classes.bc,
                                rootPrimary: classes.rootTabPrimary// className, e.g. `OverridesClasses-label-X`
                            }}
                        />
                    </Tabs>
                </AppBar>
                <TabContainer>
                    {view === 'profile' && <SportsmenPageProfile/>}
                    {view === 'plan' && 1}
                    {view === 'journal' && 2}
                    {view === 'perfomance' && <Perfomance/>}
                    {view === 'medical' && 4}
                </TabContainer>
            </section>
        ) : (
            <Redirect to={`/sportsman/${sportsmenId}/profile`}/>
        )
    }
}

SportsmenPageContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SportsmenPageContent);