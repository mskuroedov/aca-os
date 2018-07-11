import React from 'react';
import { Grid } from 'material-ui';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import { Icon } from '@material-ui/core';
import Avatar from 'material-ui/Avatar';
import styles from '../styles'

const SportmenHeader = (props) => {
    const {classes, firstname, secondname} = props;
    return (
        <section className={classNames(classes.sportsmenHeader)}>
            <Grid container spacing={16} alignItems='center'>

                <Grid
                    item  align={'flex-basis'}>
                    <Avatar
                        alt="Adelle Charles"
                        src="https://jira.hyperledger.org/secure/useravatar?size=xsmall&avatarId=10346"
                        className={classNames(classes.avatar, classes.bigAvatar)}
                    />
                </Grid>
                <Grid item xs={8} lg={4}>
                    <span className={classNames(classes.sportsmenName)}>{secondname} {firstname}</span>
                </Grid>
                <Grid item xs className={classNames(classes.sportsmenRightSec)}>
                    <span>Рейтинг</span><br/>
                    <span className={classNames(classes.sportsmenRatingNum)}>140</span>
                </Grid>
            </Grid>
        </section>
    );

};
SportmenHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SportmenHeader);
