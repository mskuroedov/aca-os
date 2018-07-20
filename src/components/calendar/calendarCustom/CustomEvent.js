import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import classNames from 'classnames';
import moment from "moment/moment";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import Grid from "@material-ui/core/es/Grid/Grid";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import Icon from "@material-ui/core/es/Icon/Icon";
import Link from "react-router-dom/es/Link";
import styles from '../../styles'


class CustomEvent extends React.Component {

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
            <div className='content'>
                <p onClick={this.handleClick} className={classes.eventCell}>
                    <span className={classes.time}>{moment(event.start).format('hh:mm')}</span> {this.props.title}
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
                    <Link to='calendar/1'>

                        <Grid container spacing={0} style={{maxWidth: 500}}>
                            <Grid item xs={12} className={classes.popoverTopContainer}>
                                <Grid container style={{marginBottom: 30}} alingItems='center'>
                                    <Grid item><Link className={classes.whiteLink} to={'#'}>№{event.id}</Link></Grid>
                                    <Grid item style={{marginLeft: 'auto'}}>
                                        <IconButton onClick={this.handleClose} className={classes.calendarbutton}>
                                            <Icon>close</Icon>
                                        </IconButton>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12}><Typography className={classes.name}>{title}</Typography></Grid>
                                    <Grid item xs={12}>
                                        <Typography className={classes.result}>{event.result}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={0} className={classes.popoverBottomContainer}
                                      alignItems='center'>
                                    <Grid item xs={6} className={classes.descriptionContainer}>
                                        <Typography className={classes.calendardescription}>
                                            <Icon className={classes.calendaricon}>calendar_today</Icon>
                                            {moment(event.start).format('D MMMM, dddd')}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} className={classes.descriptionContainer}>
                                        <Typography className={classes.description}>
                                            <Icon className={classes.calendaricon}>schedule</Icon>
                                            {moment(event.start).format('hh:mm')}
                                        </Typography>
                                    </Grid>
                                    <Grid item className={classes.descriptionContainer}>
                                        <Typography className={classes.calendarsecondaryText}>Лига</Typography>
                                        <Typography className={classes.calendardescription}>{event.league}</Typography>
                                    </Grid>
                                    <Grid item className={classes.descriptionContainer}>
                                        <Typography className={classes.calendarsecondaryText}>Статус</Typography>
                                        <Typography className={classes.calendardescription}>{event.status}</Typography>
                                    </Grid>
                                    <Grid item className={classes.descriptionContainer}>
                                        <Typography className={classes.calendarsecondaryText}>Этап</Typography>
                                        <Typography className={classes.calendardescription}>{event.stage}</Typography>
                                    </Grid>
                                    <Grid item className={classes.descriptionContainer}>
                                        <Typography className={classes.calendarsecondaryText}>Год рождения</Typography>
                                        <Typography className={classes.calendardescription}>{event.yearBirth}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Link>

                </Popover>
            </div>
        );
    }
}

CustomEvent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomEvent);