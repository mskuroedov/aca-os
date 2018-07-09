import React from 'react';
import { Grid } from 'material-ui';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import { Icon } from '@material-ui/core';
import Avatar from 'material-ui/Avatar';
import Status from 'components/common/Status';

const styles = theme => ({
  avatar: {
    margin: 10
  },
  bigAvatar: {
    [theme.breakpoints.down('lg')]: {
      width: 60,
      height: 60
    },
    [theme.breakpoints.up('lg')]: {
      width: 90,
      height: 90
    }
  },
  sportsmenName: {
    [theme.breakpoints.down('lg')]: {
      fontSize: 18
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 24
    },
    fontFamily: '"BlissPro",sans-serif',
    color: 'black',
    fontWeight: 'bold'
  },
  sportsmenHeader: {
    alignItems: 'center',
    [theme.breakpoints.down('lg')]: {
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
      paddingBottom: 16
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 165,
      paddingRight: 165,
      paddingTop: 50,
      paddingBottom: 32
    },
    backgroundColor: '#fff',
    display: 'flex'
  },
  sportsmenRightSec: {
    justifyItems: 'flex-end',
    textAlign: 'right',
    color: '#242421',
    fontSize: 14,

    [theme.breakpoints.down('lg')]: {
      display: 'none'
    },
    [theme.breakpoints.up('lg')]: {
      display: 'block'
    }
  },
  sportsmenRatingNum: {
    fontSize: 40,
    color: '#242421',
    fontFamily: 'AkBarsFont'
  },
  editIcon: {
    display: 'inline-block',
    fontSize: '20px',
    marginLeft: '0.5em',
    opacity: 0.54,
    cursor: 'pointer',
    verticalAlign: 'middle'
  }
});
const SportmenHeader = props => {
  const { classes, firstname, secondname } = props;
  return (
    <section className={classNames(classes.sportsmenHeader)}>
      <Grid container spacing={16} alignItems="center">
        <Grid item align={'flex-basis'}>
          <Avatar
            alt="Adelle Charles"
            src="https://jira.hyperledger.org/secure/useravatar?size=xsmall&avatarId=10346"
            className={classNames(classes.avatar, classes.bigAvatar)}
          />
        </Grid>
        <Grid item xs={8} lg={4}>
          <span className={classNames(classes.sportsmenName)}>
            {secondname} {firstname}
          </span>
          <Status />
          <Icon className={classes.editIcon}>edit</Icon>
        </Grid>
        <Grid item xs className={classNames(classes.sportsmenRightSec)}>
          <span>Рейтинг</span>
          <br />
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
