import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import Paper from "@material-ui/core/es/Paper/Paper";
import Typography from "@material-ui/core/es/Typography/Typography";
import FontAwesome from "react-fontawesome";
import Link from "react-router-dom/es/Link";
import ShareSection from "./ShareSection";
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import styles from '../styles'

class ShowNewsPaper extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <section className='main-section'>
                <Grid container>
                    <Grid item xs={12}>
                       <Paper className='paper paper-news'>
                            <Typography className={classes.newsHeading}>
                                В Казани пройдёт учебно-тренировочный лагерь «Эффективное катание»
                            </Typography>
                           <img src="https://bukmeker-top.ru/wp-content/uploads/2017/09/hockey_total_bolshe.jpg" alt="" className={classes.promo}/>
                           <Typography className={classes.newsText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                               tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                               quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                               consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                               cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                               proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                           <Typography className={classes.newsText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                               tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                               quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                               consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                               cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                               proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                           <Typography className={classes.subHeader}>Lorem ipsum dolor sit amet,</Typography>
                           <Link to='/' className={classes.link}>Скачать материал</Link>
                           <Grid container spacing={16} style={{paddingTop: 22, alignItems: 'center'}}>
                               <Grid item >
                                   <Avatar
                                       alt="Adelle Charles"
                                       src="https://jira.hyperledger.org/secure/useravatar?size=xsmall&avatarId=10346"
                                       classes={{
                                           root: classes.avatarw30
                                       }}
                                   />

                               </Grid>
                               <Grid item xs >
                                   <Typography><Link to="/author/1" className={classes.link}>Константинопольский Константин</Link></Typography>
                               </Grid>
                           </Grid>
                           <ShareSection />
                       </Paper>
                    </Grid>
                </Grid>
            </section>
        )
    }
}

ShowNewsPaper.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShowNewsPaper);