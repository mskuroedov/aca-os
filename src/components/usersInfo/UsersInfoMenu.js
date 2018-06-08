import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, {Tab} from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import Grid from "@material-ui/core/es/Grid/Grid";
import ParentsInfo from "./content/ParentsInfo";
import {history} from "../../routers/AppRouter";
import UsersBuySmt from "./content/UsersBuySmt";
import PaymentHistory from "./content/PaymentHistory";
import Catalog from "./content/Catalog";

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
        color: '#00755E',
        fontSize: 1.4,
        fontWeight: 'bold',
        opacity: 1,
        paddingLeft:168,
        paddingRight:168,
        paddingTop:32,
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
        justifyContent: '',
    }

});

class UsersInfoMenu extends React.Component {
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
            <section style={{backgroundColor:'white'}}>
                <Grid container>
                    <Grid item xs={12}>
                        <Tabs
                            value={value}
                            onChange={this.handleChange}
                            className={classes.tabs}
                            indicatorColor="primary"
                            classes={{
                                root: classes.root,
                                flexContainer: classes.menuFlexContainer// className, e.g. `OverridesClasses-label-X`
                            }}
                            style={{
                                backgroundColor: 'white'
                            }}
                        >
                            <Tab
                                label="Купить"
                                textColor="primary"
                                classes={{

                                    label: classes.button,
                                    labelContainer: classes.button,// className, e.g. `OverridesClasses-label-X`
                                    wrapper: classes.button,
                                    selected: classes.bc,// className, e.g. `OverridesClasses-label-X`
                                    root: classes.rootTabPrimary// className, e.g. `OverridesClasses-label-X`
                                }}
                            />
                            {/*<Tab*/}
                                {/*label="История покупок"*/}
                                {/*textColor="primary"*/}
                                {/*classes={{*/}
                                    {/*label: classes.button,*/}
                                    {/*selected: classes.bc,*/}
                                    {/*root: classes.rootTabPrimary*/}
                                {/*}}*/}
                            {/*/>*/}
                            <Tab
                                label="Родителям"
                                textColor="primary"
                                classes={{
                                    label: classes.button,
                                    selected: classes.bc,
                                    root: classes.rootTabPrimary// className, e.g. `OverridesClasses-label-X`
                                }}
                            />
                        </Tabs>
                    </Grid>
                </Grid>
                <TabContainer style={{paddingTop: 32,paddingLeft:168,paddingRight:168}}>
                    {value === 0 && <Catalog/>}
                    {/*{value === 1 && <PaymentHistory/>}*/}
                    {value === 1 && <ParentsInfo/> }
                </TabContainer>
            </section>
        )
    }
}

UsersInfoMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UsersInfoMenu);