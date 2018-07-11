import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import Icon from "material-ui/es/Icon/Icon";
import Avatar from "material-ui/es/Avatar/Avatar";
import Typography from "material-ui/es/Typography/Typography";
import styles from '../../../styles'



class WorkerHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <section className={classNames(classes.schoolHeader)}>
        <Grid container spacing={16} className={classes.header}>
          <Grid item>
            <Avatar
              alt="Adelle Charles"
              src="https://jira.hyperledger.org/secure/useravatar?size=xsmall&avatarId=10346"
              className={classNames(classes.avatar, classes.bigAvatar)}
            />
          </Grid>
          <Grid item lg={10} xs={9}>
            <Typography className={classNames(classes.schoolName)}>
              Мирханов Айрат Талгатович <Status />{' '}
              <Icon className={classes.editIcon}>edit</Icon>
            </Typography>
            <Typography className={classNames(classes.schoolAdress)}>
              Тренер преподаватель высшей категории
            </Typography>
          </Grid>
        </Grid>
      </section>
    );
  }
}

WorkerHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WorkerHeader);
