import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, {Tab} from 'material-ui/Tabs';
import Grid from "@material-ui/core/es/Grid/Grid";
import TournamentInfo from "./TournamentInfo";
import TournamentMatches from "./TournamentMatches";
import {calendar} from "../../fixtures/calendar";

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

const styles = theme => ({
    root: {
        color: '#00755E',
        fontSize: 1.4,
        fontWeight: 'bold',
        opacity: 1,
        paddingTop:8,
        [theme.breakpoints.down('lg')]:{
            paddingLeft:16,
            paddingRight:16
        },
        [theme.breakpoints.up('lg')]:{
            paddingLeft:168,
            paddingRight:168
        },
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
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: '"BlissPro",sans-serif',
        opacity: '1 !important'
    },
    bc: {
        color: "#000 !important"
    },
    rootTabPrimary: {
        minWidth: 0,
        color: '#00755E',
        opacity: 1
    },
    menuFlexContainer: {
        justifyContent: 'start',

    },
    tabScroller: {
        overflowX: 'scroll'
    }

});

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
                                root: classes.root,
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

                                    label: classes.button,
                                    labelContainer: classes.button,// className, e.g. `OverridesClasses-label-X`
                                    wrapper: classes.button,
                                    selected: classes.bc,// className, e.g. `OverridesClasses-label-X`
                                    root: classes.rootTabPrimary// className, e.g. `OverridesClasses-label-X`
                                }}
                            />
                            <Tab
                                label="Матчи"
                                value="matches"
                                textColor="primary"
                                classes={{
                                    label: classes.button,
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