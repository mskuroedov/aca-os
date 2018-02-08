import React from 'react';
import {Grid} from "material-ui";
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from "material-ui/es/Paper/Paper";
import Avatar from "material-ui/es/Avatar/Avatar";
import Typography from "material-ui/es/Typography/Typography";


const styles = theme => ({
    formControl:{
        marginLeft:'auto',
        marginTop:10
    },
    paper: {
        boxShadow: 'none',
        borderRadius: 12,
        paddingTop: 16,
        paddingLeft: 24,
        paddingBottom: 16,
        marginBottom: 10,
        border: '1px solid rgba(0,0,0,0.1);',
        fontSize: 16,
        fontFamily: '"BlissPro",sans-serif',
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
    searchInput: {
        fontSize: 14,
        color: 'rgba(36,36,33,1)',
        marginTop: 11,
        paddingBottom: 5,
        minWidth: 267,
        '&:before': {
            backgroundColor: 'rgba(0,0,0,0.2)'
        },
        '&:after': {
            backgroundColor: 'rgba(0,0,0,0.2)'
        }
    },
    searchInkbar: {
        color: 'rgba(36,36,33,1)',
        '&:before': {
            backgroundColor: 'rgba(0,0,0,0.2) !important'
        },
        '&:after': {
            backgroundColor: 'rgba(0,0,0,0.2) !important'
        }
    },
    searchInputIcon: {
        color: 'rgba(145,143,138,1)',
        position: 'relative',
        top: 8
    },
    avatar: {
        width: 56,
        height: 56
    },
    fio:{
        color:'rgba(36,36,33,1)',
        fontSize:16
    },
    trainLevel:{
        color:'rgba(36,36,33,0.6)',
        fontSize:14
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
                <Paper className={classes.paper}>
                    <Grid container alignItems="center">
                        <Grid item>
                            <Avatar
                                alt="Adelle Charles"
                                src="https://jira.hyperledger.org/secure/useravatar?size=xsmall&avatarId=10346"
                                classes={{
                                    root: classes.avatar
                                }}
                            />

                        </Grid>
                        <Grid item>
                            <Typography className={classes.fio}>Ягупов Анатолий Павлович </Typography>
                            <Typography className={classes.trainLevel}>Тренер-преподаватель высшей категории</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        )
    }
}

Trainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Trainer);