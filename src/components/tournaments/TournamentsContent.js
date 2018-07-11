import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, {Tab} from 'material-ui/Tabs';
import Grid from "@material-ui/core/es/Grid/Grid";
import TournamentInfo from "./TournamentInfo";
import TournamentMatches from "./TournamentMatches";
import {calendar} from "../../fixtures/calendar";
import styles from '../styles'


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


class TournamentsContent extends React.Component {

    state = {
        value: 'info',
        calendar,

    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {classes} = this.props;
        const {value,calendar} = this.state;


        return (
            <section style={{backgroundColor: 'white'}}>
                <Grid container>
                    <Grid item xs={12}>
                        <Tabs
                            value={value}
                            onChange={this.handleChange}
                            className={classes.tabs}
                            indicatorColor="primary"
                            classes={{
                                root: classes.TournamentContentTabroot,
                                flexContainer: classes.menuFlexContainer
                            }}
                            style={{
                                backgroundColor: 'white',
                            }}
                        >
                            <Tab
                                label="Информация"
                                value="info"
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
                                label="Матчи"
                                value="matches"
                                textColor="primary"
                                classes={{
                                    label: classes.tabButton,
                                    selected: classes.bc,
                                    root: classes.rootTabPrimary
                                }}
                            />
                        </Tabs>
                    </Grid>
                </Grid>
                <TabContainer style={{paddingTop: 30}} classes={{
                    scroller: classes.tabScroller
                }}>
                    {value === 'info' && <TournamentInfo/>}
                    {value === 'matches' && <TournamentMatches calendar={calendar}/>}
                </TabContainer>
            </section>
        )
    }
}

TournamentsContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TournamentsContent);