import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Paper from "@material-ui/core/es/Paper/Paper";
import Grid from "@material-ui/core/es/Grid/Grid";
import Typography from "@material-ui/core/es/Typography/Typography";
import Link from "react-router-dom/es/Link";
import styles from '../../../styles'


class GroupItem extends React.Component {
  constructor(props) {
    super(props);
  }

  navigate(to) {
    this.props.history.push(to);
  }

    render() {
        const {classes} = this.props;
        return (
            <Link to='/groups'>
                <Paper className={classes.GIpaper}>
                    <Grid container spacing={32}>
                        <Grid item xs={12} style={{paddingBottom: 0}}>
                            <Typography classes={{
                                root: classes.GImainText
                            }}>Группа 2009</Typography>
                        </Grid>
                        <Grid item xs={5}>
                            <Typography classes={{
                                root: classes.GIsecondaryText
                            }}>Спортсмены</Typography>
                            <Typography classes={{
                                root: classes.GImainText
                            }}>12</Typography>

                        </Grid>

                        <Grid item xs={6}>
                            <Typography classes={{
                                root: classes.GIsecondaryText
                            }}>Тренеры</Typography>
                            <Typography classes={{
                                root: classes.GImainText
                            }}>2</Typography>

                        </Grid>
                    </Grid>
                </Paper>
             </Link>
        )
    }
  render() {
    const { classes } = this.props;
    return (
      <Paper className="Paper" onClick={() => this.navigate('/groups')}>
        <span className={classes.status}>
          <Icon className={classes.visIcon}>visibility</Icon>
        </span>
        <Grid container spacing={32}>
          <Grid
            item
            xs={12}
            style={{
              paddingBottom: 0,
              paddingLeft: 48,
              paddingTop: 10
            }}
          >
            <Typography
              classes={{
                root: 'MainText'
              }}
            >
              Группа 2009
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography
              classes={{
                root: 'SecondaryText'
              }}
            >
              Спортсмены
            </Typography>
            <Typography
              classes={{
                root: 'MainText'
              }}
            >
              12
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              classes={{
                root: 'SecondaryText'
              }}
            >
              Тренеры
            </Typography>
            <Typography
              classes={{
                root: 'MainText'
              }}
            >
              2
            </Typography>
          </Grid>
        </Grid>
        <PaperMenu />
      </Paper>
    );
  }
}

export default withRouter(
  withStyles({
    visIcon: {
      display: 'inline-block',
      verticalAlign: 'bottom',
      fontSize: '20px',
      marginLeft: '0.5em',
      opacity: 0.54
    },
    status: {
      top: 18,
      left: 10,
      position: 'absolute'
    }
  })(GroupItem)
);
