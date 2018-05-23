import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, {Tab} from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import AllMaterials from "./AllMaterials";

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
        boxShadow: 'none'
    },
    tabs: {
        fontSize: 14
    },
    menuItem: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    button: {
        fontSize: 14,
        fontWeight:'bold',
        fontFamily:'"BlissPro",sans-serif',
    },
    bc:{
        color:"#000 !important"
    },
    rootTabPrimary:{
        minWidth:0,
        color:'#00755E'
    }

});

class LibraryMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {classes} = this.props;
        const {value} = this.state;

        return (
            <section >
                <AppBar position="static" className={classes.appBar} style={{paddingRight: 168,paddingLeft:264,backgroundColor:'#fff'}}>
                    <Tabs value={value}
                          onChange={this.handleChange}
                          className={classes.tabs}
                          indicatorColor="primary"
                          textColor="primary"
                          classes={{
                              root: classes.rootInherit,
                          }}
                    >
                        <Tab label="Все материалы"
                             textColor="primary"
                             classes={{
                                 label: classes.button,
                                 labelContainer: classes.button,// className, e.g. `OverridesClasses-label-X`
                                 wrapper: classes.button,
                                 selected:classes.bc,// className, e.g. `OverridesClasses-label-X`
                                 root:classes.rootTabPrimary// className, e.g. `OverridesClasses-label-X`
                             }}/>
                        <Tab label="Новости"
                             textColor="primary"

                             classes={{
                                 label: classes.button,
                                 selected:classes.bc,
                                 root:classes.rootTabPrimary
                             }}
                        />
                        <Tab label="Популярное"
                             textColor="primary"


                             classes={{
                                 label: classes.button,
                                 selected:classes.bc,
                                 root:classes.rootTabPrimary// className, e.g. `OverridesClasses-label-X`
                             }}/>
                        <Tab label="Авторы"
                             textColor="primary"

                             classes={{
                                 label: classes.button,
                                 selected:classes.bc,
                                 root:classes.rootTabPrimary// className, e.g. `OverridesClasses-label-X`
                             }}/>
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer>
                    <AllMaterials />
                </TabContainer>}
                {value === 1 && <TabContainer>
                    <AllMaterials />

                </TabContainer>}
                {value === 2 && <TabContainer>
                    <AllMaterials />

                </TabContainer>}
                {value === 3 && <TabContainer>
                    <AllMaterials />
                </TabContainer>}
            </section>
        );
    }
}

LibraryMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LibraryMenu);