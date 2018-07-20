import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import AppBar from 'material-ui/AppBar';
import Tabs, {Tab} from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import Profile from "./profile/Profile";
import Perfomance from "./profile/Perfomance";
import Redirect from "react-router-dom/es/Redirect";
import {history} from "../../routers/AppRouter";
import Grid from "@material-ui/core/es/Grid/Grid";

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


class SportsmenPageContent extends React.Component {

    handleChange = (event, value) => {
        history.push(`/sportsman/${this.props.sportsmenId}/${value}`);
    };

    render() {
        const {classes, view, sportsmenId, sportsmen} = this.props;

        return (
            <section className='main-section'>
                <Profile sportsmen={sportsmen}/>

            </section>
        )
    }
}

// SportsmenPageContent.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default SportsmenPageContent;

// render() {
//     const {classes, view, sportsmenId, sportsmen} = this.props;
//
//     return view ? (
//         <section style={{backgroundColor:'white'}}>
//             <Grid container>
//                 <Grid item xs={12}>
//                     <Tabs
//                         value={view}
//                         onChange={this.handleChange}
//                         className={classes.tabs}
//                         indicatorColor="primary"
//                         textColor="primary"
//                         classes={{
//                             root: classes.root,
//                             flexContainer: classes.menuFlexContainer// className, e.g. `OverridesClasses-label-X`
//                         }}
//                     >
//                         <Tab
//                             label="Профиль"
//                             value="profile"
//                             textColor="primary"
//                             classes={{
//                                 label: classes.button,
//                                 selected: classes.bc,
//                                 root: classes.rootTabPrimary
//                             }}
//                         />
//                         <Tab
//                             label="Тренировочный план"
//                             value="plan"
//                             textColor="primary"
//                             classes={{
//                                 label: classes.button,
//                                 selected: classes.bc,
//                                 root: classes.rootTabPrimary
//                             }}
//                         />
//                         <Tab
//                             label="Журнал"
//                             value="journal"
//                             textColor="primary"
//                             classes={{
//                                 label: classes.button,
//                                 selected: classes.bc,
//                                 root: classes.rootTabPrimary// className, e.g. `OverridesClasses-label-X`
//                             }}
//                         />
//                         <Tab
//                             label="Спортивные показатели"
//                             value="perfomance"
//                             textColor="primary"
//
//                             classes={{
//                                 label: classes.button,
//                                 selected: classes.bc,
//                                 root: classes.rootTabPrimary// className, e.g. `OverridesClasses-label-X`
//                             }}
//                         />
//                         <Tab
//                             label="Медицинские показатели"
//                             value="medical"
//                             textColor="primary"
//
//                             classes={{
//                                 label: classes.button,
//                                 selected: classes.bc,
//                                 root: classes.rootTabPrimary// className, e.g. `OverridesClasses-label-X`
//                             }}
//                         />
//                     </Tabs>
//
//                 </Grid>
//             </Grid>
//             <TabContainer style={{paddingTop: 30}}>
//                 {view === 'profile' && <Profile sportsmen={sportsmen}/>}
//                 {view === 'plan' && 1}
//                 {view === 'journal' && 2}
//                 {view === 'perfomance' && <Perfomance/>}
//                 {view === 'medical' && 4}
//             </TabContainer>
//         </section>
//     ) : (
//         <Redirect to={`/sportsman/${sportsmenId}/profile`}/>
//     )
// }
