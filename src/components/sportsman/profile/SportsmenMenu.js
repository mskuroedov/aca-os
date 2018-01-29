import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, {Tab} from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import SportsmenPageProfile from "./SportsmenPageProfile";
import Perfomance from "./Perfomance";

function TabContainer(props) {
    return (
        <Typography component="div" style={{paddingTop:24,backgroundColor:"#f6f6f6",paddingRight: 168,paddingLeft:168}}>
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
        fontWeight:'bold',
        fontFamily:'BlissPro',
    },
    bc:{
        color:"#000 !important"
    },
    rootTabPrimary:{
        minWidth:0,
        color:'#00755E'
    },
    menuFlexContainer:{
        justifyContent:'flex-end'
    }

});

class SportsmenMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        value: 3,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {classes} = this.props;
        const {value} = this.state;

        return (
            <section >
                <AppBar position="static" className={classes.appBar} style={{paddingRight: 168,paddingLeft:168,backgroundColor:'#fff'}}>
                    <Tabs value={value}
                          onChange={this.handleChange}
                          className={classes.tabs}
                          indicatorColor="primary"
                          textColor="primary"
                          classes={{
                              root: classes.rootInherit,
                              buttonAuto: classes.button, // className, e.g. `OverridesClasses-root-X`
                              flexContainer:classes.menuFlexContainer// className, e.g. `OverridesClasses-label-X`

                          }}
                    >
                        <Tab label="Профиль"
                             textColor="primary"
                             classes={{
                                 label: classes.button,
                                 labelContainer: classes.button,// className, e.g. `OverridesClasses-label-X`
                                 wrapper: classes.button,
                                 rootPrimarySelected:classes.bc,// className, e.g. `OverridesClasses-label-X`
                                 rootPrimary:classes.rootTabPrimary// className, e.g. `OverridesClasses-label-X`
                             }}/>
                        <Tab label="Тренировочный план"
                             textColor="primary"

                             classes={{
                                 label: classes.button,
                                 rootPrimarySelected:classes.bc,
                                 rootPrimary:classes.rootTabPrimary
                             }}
                        />
                        <Tab label="Журнал"
                             textColor="primary"


                             classes={{
                                 label: classes.button,
                                 rootPrimarySelected:classes.bc,
                                 rootPrimary:classes.rootTabPrimary// className, e.g. `OverridesClasses-label-X`
                             }}/>
                        <Tab label="Спортивные показатели"
                             textColor="primary"

                             classes={{
                                 label: classes.button,
                                 rootPrimarySelected:classes.bc,
                                 rootPrimary:classes.rootTabPrimary// className, e.g. `OverridesClasses-label-X`
                             }}/>
                        <Tab label="Медицинские показатели"
                             textColor="primary"

                             classes={{
                                 label: classes.button,
                                 rootPrimarySelected:classes.bc,
                                 rootPrimary:classes.rootTabPrimary// className, e.g. `OverridesClasses-label-X`
                             }}/>
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer>
                    <SportsmenPageProfile/>
                </TabContainer>}
                {value === 1 && <TabContainer>
                    1
                </TabContainer>}
                {value === 2 && <TabContainer>
                    2
                </TabContainer>}
                {value === 3 && <TabContainer>
                    <Perfomance />
                </TabContainer>}
                {value === 4 && <TabContainer>
                    4
                </TabContainer>}
            </section>
        );
    }
}

SportsmenMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SportsmenMenu);