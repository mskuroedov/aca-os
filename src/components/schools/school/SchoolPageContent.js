import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import AppBar from 'material-ui/AppBar';
import Tabs, {Tab} from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import SchoolInfo from "./common/SchoolInfo";
import Sportsman from "./sportsman/SportsmanListPage";
import {history} from "../../../routers/AppRouter";
import {Redirect} from "react-router-dom";
import Trainers from "./trainers/Trainers";
import Contacts from "./contacts/Contacts";
import Calendar from "./Calendar"
import Grid from "@material-ui/core/es/Grid/Grid";
import StatsPage from "./statistic/StatsPage";
import GroupsPage from "./groups/GroupsPage";
import styles from '../../styles'

function TabContainer(props) {
    return (
        <div
            className='main-section'
            style={{paddingTop: 24, backgroundColor: "#f6f6f6"}}>
            {props.children}
        </div>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

class SchoolMenu extends React.Component {

    handleChange = (event, value) => {
        history.push(`/schools/${this.props.schoolId}/${value}`);
    };

    render() {
        const {classes} = this.props;
        const {view, schoolId} = this.props;

        return view ? (
            <section style={{backgroundColor:'white'}}>
                <Grid container>
                    <Grid item xs={12}>
                        <Tabs
                            value={view}
                            onChange={this.handleChange}
                            className={classes.tabs}
                            indicatorColor="primary"
                            scrollable={true}
                            classes={{
                                root: classes.SPCroot,
                                flexContainer: classes.schoolMenuFlexContainer// className, e.g. `OverridesClasses-label-X`
                            }}
                            style={{
                                backgroundColor: 'white'
                            }}
                        >
                            <Tab
                                label="Общее"
                                value="common"
                                textColor="primary"
                                classes={{

                                    label: classes.tabButton,
                                    labelContainer: classes.tabButton,// className, e.g. `OverridesClasses-label-X`
                                    wrapper: classes.tabButton,
                                    selected: classes.bc,// className, e.g. `OverridesClasses-label-X`
                                    root: classes.rootTabPrimary// className, e.g. `OverridesClasses-label-X`
                                }}
                            />
                            <Tab
                                label="Расписание"
                                value="schedule"
                                textColor="primary"
                                classes={{
                                    label: classes.tabButton,
                                    selected: classes.bc,
                                    root: classes.rootTabPrimary
                                }}
                            />
                            <Tab
                                label="Статистика"
                                value="statistics"
                                textColor="primary"
                                classes={{
                                    label: classes.tabButton,
                                    selected: classes.bc,
                                    root: classes.rootTabPrimary// className, e.g. `OverridesClasses-label-X`
                                }}
                            />
                            <Tab
                                label="Группы"
                                value="groups"
                                textColor="primary"
                                classes={{
                                    label: classes.tabButton,
                                    selected: classes.bc,
                                    root: classes.rootTabPrimary// className, e.g. `OverridesClasses-label-X`
                                }}
                            />
                            <Tab
                                label="Спортсмены"
                                value="sportsman"
                                textColor="primary"
                                classes={{
                                    label: classes.tabButton,
                                    selected: classes.bc,
                                    root: classes.rootTabPrimary// className, e.g. `OverridesClasses-label-X`
                                }}
                            />
                            <Tab
                                label="Тренеры"
                                value="trainers"
                                textColor="primary"
                                classes={{
                                    label: classes.tabButton,
                                    selected: classes.bc,
                                    root: classes.rootTabPrimary// className, e.g. `OverridesClasses-label-X`
                                }}
                            />
                            <Tab
                                label="Контакты"
                                value="contacts"
                                textColor="primary"
                                classes={{
                                    label: classes.tabButton,
                                    selected: classes.bc,
                                    root: classes.rootTabPrimary// className, e.g. `OverridesClasses-label-X`
                                }}
                            />
                        </Tabs>
                    </Grid>
                </Grid>
                <TabContainer style={{paddingTop: 30}} classes={{
                    scroller:classes.tabScroller
                }}>
                    {view === 'common' && <SchoolInfo/>}
                    {view === 'schedule' && <Calendar/>}
                    {/*{view === 'schedule' && 'calendar'}*/}
                    {view === 'statistics' && <StatsPage/>}
                    {view === 'groups' && <GroupsPage/>}
                    {view === 'sportsman' && <Sportsman/>}
                    {view === 'trainers' && <Trainers/>}
                    {view === 'contacts' && <Contacts/>}
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