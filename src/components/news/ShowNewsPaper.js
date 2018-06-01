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

const styles = theme => ({
    paper: {
        boxShadow: 'none',
        borderRadius: 12,
        paddingTop: 47,
        paddingLeft: 81,
        paddingRight: 81,
        paddingBottom: 40,
        marginBottom: 10,
        border: '1px solid rgba(0,0,0,0.1);',
        fontSize: 16,
        fontFamily: '"BlissPro",sans-serif',
    },
    header:{
        fontSize:22,
        color:'#242421',
        fontWeight:'bold',
        marginBottom:40
    },
    text:{
        fontSize:16,
        color:'#242421',
        marginBottom:24
    },
    subHeader:{
        fontSize:20,
        color:'#242421',
        fontWeight:'bold',
        marginBottom:24
    },
    promo:{
        width:'100%'
    },
    link:{
        lineHeight:1.6,
        color:'rgba(36,36,33,1);',
        transition:'all 0.4s',
        borderBottom: ' 1px solid rgba(36,36,33,0.2)',
        fontSize:16,
        '&:hover':{
            transition:'all 0.4s',
            borderBottomColor:'rgba(36,36,33,.5)'
        }
    }

});


class ShowNewsPaper extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <section style={{paddingLeft:168,paddingRight:168,paddingTop:32,paddingBottom:64}}>
                <Grid container>
                    <Grid item xs={12}>
                       <Paper className={classes.paper}>
                            <Typography className={classes.header}>
                                В Казани пройдёт учебно-тренировочный лагерь «Эффективное катание»
                            </Typography>
                           <img src="https://bukmeker-top.ru/wp-content/uploads/2017/09/hockey_total_bolshe.jpg" alt="" className={classes.promo}/>
                           <Typography className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                               tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                               quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                               consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                               cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                               proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                           <Typography className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                               tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                               quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                               consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                               cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                               proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                           <Typography className={classes.subHeader}>Lorem ipsum dolor sit amet,</Typography>
                           <Link to='/' className={classes.link}>Скачать материал</Link>
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