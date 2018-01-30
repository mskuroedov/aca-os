import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, {Tab} from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import SchoolInfo from "./common/SchoolInfo";
import SportsmenPageProfile from "../../sportsman/profile/SportsmenPageProfile";
import Perfomance from "../../sportsman/profile/Perfomance";
import Sportsman from "./sportsman/Sportsman";

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
        justifyContent:'center'
    }

});

class SchoolMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        value: 4,
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
                        <Tab label="Общее"
                             textColor="primary"
                             classes={{
                                 label: classes.button,
                                 labelContainer: classes.button,// className, e.g. `OverridesClasses-label-X`
                                 wrapper: classes.button,
                                 rootPrimarySelected:classes.bc,// className, e.g. `OverridesClasses-label-X`
                                 rootPrimary:classes.rootTabPrimary// className, e.g. `OverridesClasses-label-X`
                             }}/>
                        <Tab label="Расписание"
                             textColor="primary"

                             classes={{
                                 label: classes.button,
                                 rootPrimarySelected:classes.bc,
                                 rootPrimary:classes.rootTabPrimary
                             }}
                        />
                        <Tab label="Статистика"
                             textColor="primary"


                             classes={{
                                 label: classes.button,
                                 rootPrimarySelected:classes.bc,
                                 rootPrimary:classes.rootTabPrimary// className, e.g. `OverridesClasses-label-X`
                             }}/>
                        <Tab label="Группы"
                             textColor="primary"

                             classes={{
                                 label: classes.button,
                                 rootPrimarySelected:classes.bc,
                                 rootPrimary:classes.rootTabPrimary// className, e.g. `OverridesClasses-label-X`
                             }}/>
                        <Tab label="Спортсмены"
                             textColor="primary"

                             classes={{
                                 label: classes.button,
                                 rootPrimarySelected:classes.bc,
                                 rootPrimary:classes.rootTabPrimary// className, e.g. `OverridesClasses-label-X`
                             }}/>
                        <Tab label="Тренеры"
                             textColor="primary"

                             classes={{
                                 label: classes.button,
                                 rootPrimarySelected:classes.bc,
                                 rootPrimary:classes.rootTabPrimary// className, e.g. `OverridesClasses-label-X`
                             }}/>
                        <Tab label="Контакты"
                             textColor="primary"

                             classes={{
                                 label: classes.button,
                                 rootPrimarySelected:classes.bc,
                                 rootPrimary:classes.rootTabPrimary// className, e.g. `OverridesClasses-label-X`
                             }}/>
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer>
                    <SchoolInfo />

                </TabContainer>}
                {value === 1 && <TabContainer>
                    <SportsmenPageProfile/>

                </TabContainer>}
                {value === 2 && <TabContainer>
                    123
                </TabContainer>}
                {value === 3 && <TabContainer>
                    <Perfomance />
                </TabContainer>}
                {value === 4 && <TabContainer>
                    <Sportsman />

                </TabContainer>}
                {value === 5 && <TabContainer>
                    4
                </TabContainer>}
                {value === 6 && <TabContainer>
                    4
                </TabContainer>}
            </section>
        );
    }
}

SchoolMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SchoolMenu);