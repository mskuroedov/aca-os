import React from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/es/Paper/Paper';
import Link from 'react-router-dom/es/Link';
import Avatar from 'material-ui/es/Avatar/Avatar';
import Grid from 'material-ui/es/Grid/Grid';
import Typography from 'material-ui/es/Typography/Typography';
import PaperMenu from '../PaperMenu';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import Status from 'components/common/Status';

const styles = theme => ({
  name: {
    color: 'rgba(36,36,33,1)',
    fontSize: 18,
    marginTop: 19,
    marginBottom: 19,
    textAlign: 'center'
  },
  infoContainer: {
    paddingLeft: 25,
    paddingRight: 25
  },
  info: {
    minWidth: '50%'
  },
  infoTitle: {
    color: 'rgba(36,36,33,0.6)',
    fontSize: 14
  },
  infoVal: {
    color: 'rgba(36,36,33,1)',
    fontSize: 16
  },
  avatar: {
    width: 56,
    height: 56,
    margin: 'auto'
  },
  link: {
    borderBottom: '1px solid rgba(36,36,33,0.2)',
    color: 'rgba(36,36,33,1)',
    '&:hover': {
      color: 'rgba(0,118,94,1)'
    }
  },
  navigate: {
    cursor: 'pointer'
  },
  Paper: {
    paddingRight: 40
  }
});

class TilesView extends React.Component {
  navigate(to) {
    this.props.history.push(to);
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid item xs={12}>
        <Paper className={classnames('Paper', classes.Paper)}>
          <Grid container alignItems="center" spacing={16}>
            <Grid item>
              <Avatar
                alt="Adelle Charles"
                src="https://jira.hyperledger.org/secure/useravatar?size=xsmall&avatarId=10346"
                classes={{
                  root: classes.avatar
                }}
              />
            </Grid>
            <Grid item xs={12} lg={7}>
              <Typography className={classes.infoVal}>
                <Link to="/worker/2" className={classes.link}>
                  Панченко Евгений Валерьевич
                </Link>
                <Status />
              </Typography>
              <Typography className={classes.infoTitle}>
                Директор школы
              </Typography>
            </Grid>
            <Grid item xs>
              <Grid container>
                <Grid item style={{ paddingRight: 16 }}>
                  <Typography noWrap className={classes.infoVal}>
                    +7 952 654-77-12
                  </Typography>
                </Grid>
                <Grid item style={{ paddingRight: 16 }}>
                  <Typography noWrap className={classes.infoVal}>
                    <a
                      href="mailto:panchenko@gmail.com"
                      className={classes.link}
                    >
                      panchenko@gmail.com
                    </a>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <PaperMenu />
        </Paper>
      </Grid>
    );
  }
}

export default withRouter(withStyles(styles)(TilesView));
