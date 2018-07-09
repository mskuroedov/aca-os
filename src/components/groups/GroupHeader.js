import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Grid from '@material-ui/core/es/Grid/Grid';
import Status from 'components/common/Status';
import { Icon } from '@material-ui/core';

const styles = theme => ({
  building: {
    color: 'white',
    backgroundColor: '#00755E',
    borderRadius: '100%',
    [theme.breakpoints.down('lg')]: {
      width: 60,
      height: 60,
      padding: 12,
      fontSize: '36px !important'
    },
    [theme.breakpoints.up('lg')]: {
      width: 96,
      height: 96,
      padding: 24,
      fontSize: '48px !important'
    }
  },
  bigAvatar: {},
  schoolName: {
    margin: 0,
    fontFamily: '"BlissPro",sans-serif',
    color: 'black',
    fontWeight: 'bold',
    lineHeight: 1.375,
    [theme.breakpoints.down('lg')]: {
      fontSize: 18
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 24
    }
  },
  schoolHeader: {
    [theme.breakpoints.down('lg')]: {
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 24,
      paddingBottom: 24
    },
    [theme.breakpoints.up('lg')]: {
      alignItems: 'center',
      paddingLeft: 165,
      paddingRight: 165,
      paddingTop: 50
    },
    backgroundColor: '#fff',
    display: 'flex'
  },
  schoolRightSec: {
    justifyItems: 'flex-end',
    textAlign: 'right',
    color: '#242421',
    fontSize: 14,
    marginLeft: 24
  },
  mlauto: {
    marginLeft: 'auto'
  },
  schoolRatingNum: {
    fontSize: '40px !important',
    color: '#242421',
    fontFamily: 'AkBarsFont'
  },
  schoolAdress: {
    fontSize: 16,
    color: 'rgba(36,36,33,1)',
    position: 'relative',
    top: -5,
    lineHeight: 1.375,
    marginBottom: 0,
    marginTop: 8,
    [theme.breakpoints.down('lg')]: {
      fontSize: 14
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 16
    }
  },
  xsh: {
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    },
    [theme.breakpoints.up('lg')]: {
      display: 'block'
    }
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

class GroupHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <section className={classNames(classes.schoolHeader)}>
        <Grid item align={'flex-basis'}>
          <Icon
            className={classes.building}
            classes={{
              root: classes.building
            }}
          >
            group
          </Icon>
        </Grid>
        <Grid item xs={7} lg style={{ marginLeft: 16 }}>
          <p className={classNames(classes.schoolName)}>
            Группа мальчиков 2010 г. р.
            <Status />
            <Icon className={classes.editIcon}>more_vert</Icon>
          </p>
          <p className={classNames(classes.schoolAdress)}>2010 год набора</p>
        </Grid>
        <Grid
          item
          className={classNames(
            classes.schoolRightSec,
            classes.mlauto,
            classes.xsh
          )}
        >
          <span>Спортсмены</span>
          <br />
          <span className={classNames(classes.schoolRatingNum)}>25</span>
        </Grid>

        <Grid item className={classNames(classes.schoolRightSec, classes.xsh)}>
          <span>Тренеры</span>
          <br />
          <span className={classNames(classes.schoolRatingNum)}>2</span>
        </Grid>
      </section>
    );
  }
}

GroupHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GroupHeader);
