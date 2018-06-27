import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import moment from "moment/moment";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import Grid from "@material-ui/core/es/Grid/Grid";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import Icon from "@material-ui/core/es/Icon/Icon";
import Link from "react-router-dom/es/Link";

const styles = theme => ({
    time: {
        fontSize: 13,
        opacity: 0.8,
        marginRight: 4
    },
    eventCell: {
        fontSize: 13,
        textOverflow: 'ellipsis',
        overflowX: 'hidden',
        maxWidth: '100%'
    },
    typography: {
        margin: theme.spacing.unit * 2,
    },
    popoverPaper: {
        borderRadius: 20,
    },
    popoverTopContainer: {
        padding: 24,
        backgroundColor: '#E43935',
        color: 'white'
    },
    whiteLink: {
        color: 'white',
        fontSize: 16,
        borderBottom: '1px solid rgba(255,255,255,.3)',
        transition: 'all .3s',
        '&:hover': {
            borderBottom: '1px solid rgba(255,255,255,.6)',
        }
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: '22px',
        color: 'white',
        marginBottom: 16
    },
    result: {
        fontSize: 16,
        lineHeight: '22px',
        color: 'white'
    },
    button: {
        height: 24,
        width: 24,
        color: 'white'
    },
    description: {
        color: '#242421',
        fontSize: 16,
        lineHeight: '22px',
        display: 'flex',
        alignItems: 'center'
    },
    secondaryText: {
        fontSize: 14,
        color: 'rgba(36,36,33,.6)',
        marginBottom: 13
    },
    popoverBottomContainer: {
        padding: 24,
        paddingLeft: 0,
        paddingBottom: 6,
    },
    descriptionContainer: {
        // padding:8,
        paddingLeft: 30,
        // paddingRight:12,
        paddingBottom: 24
    },
    icon: {
        color: 'rgba(36,36,33,.3)',
        marginRight: 16
    }
});


class CustomWeekEvent extends React.Component {

    state = {
        anchorEl: null,
    };

    handleClick = event => {

        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    handleClose = (e) => {
        e.preventDefault();
        this.setState({
            anchorEl: null,
        });
    };

    getColor = event => {
        if (event.location === 'ice') {
            return '#43A5F3'
        } else {
            return '#FEA62A'
        }
    }


    render() {
        let {stage, yearBirth} = this.props;
        const {classes, title, event} = this.props;
        const {anchorEl} = this.state;
        // return (
        //     <div>
        //         <strong>{moment(event.start).format('ha')}</strong> {this.props.title}
        //         <span className="pull-right">
        //   {/*{bookedIcon}*/}
        //             {/*<Badge>{event.noOfPax} <i className="fa fa-user"></i></Badge>*/}
        // </span>
        //     </div>
        // );
        return (
            <div className='content' style={{background: this.getColor(event)}}>
                <p onClick={this.handleClick} className={classes.eventCell}>
                    <span
                        className={classes.time}>{moment(event.start).format('hh:mm')}-{moment(event.end).format('hh:mm')}</span>
                    <br/> {this.props.title}
                </p>
                <Popover
                    open={Boolean(anchorEl)}
                    anchorEl={anchorEl}
                    onClose={this.handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                    }}
                    transformOrigin={{
                        vertical: -32,
                    }}
                    classes={{
                        paper: classes.popoverPaper
                    }}
                >
                    <Grid container spacing={0} style={{maxWidth: 500}}>
                        <Grid item xs={12} className={classes.popoverTopContainer}
                              style={{background: this.getColor(event)}}>
                            <Grid container style={{marginBottom: 30}} alingItems='center'>
                                <Grid item><Link className={classes.whiteLink} to={'#'}>№{event.id}</Link></Grid>
                                <Grid item style={{marginLeft: 'auto'}}>
                                    <IconButton onClick={this.handleClose} className={classes.button}>
                                        <Icon>close</Icon>
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12}><Typography className={classes.name}>{title}</Typography></Grid>
                                <Grid item xs={12}>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={0} className={classes.popoverBottomContainer}
                                  alignItems='center'>
                                <Grid item xs={6} className={classes.descriptionContainer}>
                                    <Typography className={classes.description}>
                                        <Icon className={classes.icon}>calendar_today</Icon>
                                        {moment(event.start).format('D MMMM, dddd')}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} className={classes.descriptionContainer}>
                                    <Typography className={classes.description}>
                                        <Icon className={classes.icon}>schedule</Icon>
                                        {moment(event.start).format('hh:mm')}
                                    </Typography>
                                </Grid>
                                <Grid item className={classes.descriptionContainer}>
                                    <Typography className={classes.secondaryText}>Лига</Typography>
                                    <Typography className={classes.description}>{event.league}</Typography>
                                </Grid>
                                <Grid item className={classes.descriptionContainer}>
                                    <Typography className={classes.secondaryText}>Статус</Typography>
                                    <Typography className={classes.description}>{event.status}</Typography>
                                </Grid>
                                <Grid item className={classes.descriptionContainer}>
                                    <Typography className={classes.secondaryText}>Этап</Typography>
                                    <Typography className={classes.description}>{event.stage}</Typography>
                                </Grid>
                                <Grid item className={classes.descriptionContainer}>
                                    <Typography className={classes.secondaryText}>Год рождения</Typography>
                                    <Typography className={classes.description}>{event.yearBirth}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Popover>
            </div>
        );
    }
}

CustomWeekEvent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomWeekEvent);