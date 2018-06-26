import React from 'react';
import {Grid} from "material-ui";
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from "material-ui/es/Paper/Paper";
import Avatar from "material-ui/es/Avatar/Avatar";
import Typography from "material-ui/es/Typography/Typography";
import Link from "react-router-dom/es/Link";


const styles = theme => ({
    formControl:{
        marginLeft:'auto',
        marginTop:10
    },
    paper: {
        boxShadow: 'none',
        borderRadius: 12,
        paddingTop: 16,
        paddingBottom: 16,
        marginBottom: 10,
        border: '1px solid rgba(0,0,0,0.1);',
        fontSize: 15,
        fontFamily: '"BlissPro",sans-serif',
        [theme.breakpoints.down('lg')]:{

            paddingLeft: 16,
            paddingRight:16
        },
        [theme.breakpoints.up('lg')]:{
            paddingLeft: 24,
            paddingRight:24
        }
    },
    title: {
        marginBottom: 11,
        fontSize: 20,
        color: ' rgba(36,36,33,0.6);',
        fontFamily: '"BlissPro",sans-serif',
        fontWeight: 'normal'
    },
    gray: {
        color: 'rgba(36,36,33,0.3)'
    },
    avatar: {
        width: 56,
        height: 56
    },
    fio:{
        color:'rgba(36,36,33,1)',
        fontSize:15
    },
    trainLevel:{
        color:'rgba(36,36,33,0.6)',
        fontSize:13
    },
    link:{
        marginTop:4,
        lineHeight:1.6,
        color:'rgba(36,36,33,1);',
        transition:'all 0.4s',
        borderBottom: ' 1px solid rgba(36,36,33,0.2)',
        fontSize:15,
        '&:hover':{
            transition:'all 0.4s',
            borderBottomColor:'rgba(36,36,33,.5)'
        }
    }
});



class Trainer extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        selectSchool: 1,
        name: 'hai',
        tableView: true,
    };
    changeView = event => {
        this.setState({
            tableView: !(this.state.tableView)
        });
    };
    handleChange = event => {
        this.setState({selectedFilter: event.target.value});
    };

    render() {
        const {classes} = this.props;
        return (
            <div>
                <Link to='/worker/1'>
                <Paper className={classes.paper}>
                    <Grid container alignItems="flex-start" spacing={16} >
                        <Grid item xs={3} lg={2}>
                            <Avatar
                                alt="Adelle Charles"
                                src="https://jira.hyperledger.org/secure/useravatar?size=xsmall&avatarId=10346"
                                classes={{
                                    root: classes.avatar
                                }}
                            />

                        </Grid>
                        <Grid item xs={9} lg>
                            <Link to='/worker/1' className={classes.link}>Ягупов Анатолий Павлович </Link>
                            <Typography className={classes.trainLevel}>Тренер-преподаватель высшей категории</Typography>
                        </Grid>
                    </Grid>
                </Paper>
                </Link>
            </div>
        )
    }
}

Trainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Trainer);