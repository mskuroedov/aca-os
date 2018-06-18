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
import { withRouter } from 'react-router-dom'

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
        fontWeight: 'bold',
        opacity: 1,
        paddingTop: 32,
        justifyContent: 'flex-end',
        fontSize: 14,
        paddingBottom:0
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
    constructor(props) {
        super(props);
        this.state = {
            value: parseInt(this.props.value),
            nocontent: props.nocontent
        };
    }

    handleChange = (event, value) => {
        this.props.history.push('/users_info/'+value);
        this.setState({value, nocontent: false});
    };

    render() {
        const {classes} = this.props;
        const {value, nocontent} = this.state;
        return (
            <section style={{backgroundColor: 'white'}}>
                <Grid container>
                    <Grid item xs={12}>
                        <Tabs
                            value={value}
                            onChange={this.handleChange}
                            className='main-section'
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
                {!nocontent && <TabContainer style={{paddingTop: 32, paddingLeft: 168, paddingRight: 168}}>
                                    {parseInt(value) === 0 && <Catalog/>}
                                    {/*{value === 1 && <PaymentHistory/>}*/}
                                    {parseInt(value) === 1 && <ParentsInfo/>}
                                </TabContainer>
                }
            </section>
        )
    }
}

UsersInfoMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(UsersInfoMenu));