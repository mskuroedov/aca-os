import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Link from 'react-router-dom/es/Link';
import Paper from '@material-ui/core/es/Paper/Paper';
import Grid from '@material-ui/core/es/Grid/Grid';
import Typography from '@material-ui/core/es/Typography/Typography';
import Avatar from '@material-ui/core/es/Avatar/Avatar';

const styles = theme => ({
  avatar: {
    width: 96,
    height: 96,
    margin: 'auto',
    marginBottom: 16
  },
  name: {
    color: '#242421',
    fontSize: 18,
    textAlign: 'center',
    maxWidth: 160,
    margin: 'auto',
    fontWeight: 'bold',
    marginBottom: 16
  },
  subtext: {
    fontSize: 14,
    color: 'rgba(36,36,33,.6)'
  }
});

class AuthorCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Link to="/author/1">
        <Paper className="paper" style={{ paddingTop: 24, paddingBottom: 32 }}>
          <Grid justify="center" container spacing={0}>
            <Grid item xs={12}>
              <Avatar
                alt="Adelle Charles"
                src="https://jira.hyperledger.org/secure/useravatar?size=xsmall&avatarId=10346"
                classes={{
                  root: classes.avatar
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.name}>
                Абдрашитов Вадим Юсупович
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.subtext}>
                Материалы:{' '}
                <span
                  style={{ fontSize: 16, color: '#242421', fontWeight: 'bold' }}
                >
                  12
                </span>
              </Typography>
              {/* <Typography className={classes.subtext}>Платные: <span style={{fontSize:16,color:'#242421',fontWeight:'bold'}}>7</span></Typography> */}
            </Grid>
          </Grid>
        </Paper>
      </Link>
    );
  }
}

export default withStyles(styles)(AuthorCard);
