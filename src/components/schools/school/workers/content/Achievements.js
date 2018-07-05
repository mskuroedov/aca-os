import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from '@material-ui/core/es/Typography/Typography';
import Paper from '@material-ui/core/es/Paper/Paper';
import Table from '@material-ui/core/es/Table/Table';
import TableHead from '@material-ui/core/es/TableHead/TableHead';
import TableRow from '@material-ui/core/es/TableRow/TableRow';
import TableCell from '@material-ui/core/es/TableCell/TableCell';
import TableBody from '@material-ui/core/es/TableBody/TableBody';
import Grid from '@material-ui/core/es/Grid/Grid';
import PaperMenu from '../PaperMenu';
import classnames from 'classnames';

const styles = theme => ({
  title: {
    marginBottom: 11,
    fontSize: 20,
    color: ' rgba(36,36,33,0.6);',
    fontFamily: '"BlissPro",sans-serif',
    fontWeight: 'normal'
  },
  textMain: {
    color: '#242421',
    fontSize: 16,
    marginBottom: 16
  },
  textSecondary: {
    color: 'rgba(36,36,33,0.54)',
    fontSize: 14
  },
  paper: {
    position: 'relative'
  }
});

class Achievements extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography className={classes.title}>Награды и достижения</Typography>
        <Paper className={classnames('paper', classes.paper)}>
          <Table className="table no-bottom xs-hidden">
            <TableHead>
              <TableRow>
                <TableCell>Дата</TableCell>
                <TableCell>Мероприятие</TableCell>
                <TableCell>Достижение</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>21.07.1974</TableCell>
                <TableCell>Чемпионат СССР</TableCell>
                <TableCell>3 место</TableCell>
                <TableCell className="PaperMenuTrigger">
                  <PaperMenu relate />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>08.02.1982</TableCell>
                <TableCell>Кубок СССР</TableCell>
                <TableCell>лучший бомбардир</TableCell>
                <TableCell className="PaperMenuTrigger">
                  <PaperMenu relate />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>13.12.1994</TableCell>
                <TableCell>Чемпионат СССР</TableCell>
                <TableCell>1 место</TableCell>
                <TableCell className="PaperMenuTrigger">
                  <PaperMenu relate />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <div className="lg-hidden">
            <Grid container spacing={0} style={{ padding: 16 }} className="border-bottom">
              <Grid item xs={12}>
                <Typography className={classes.textSecondary}>Название</Typography>
                <Typography className={classes.textMain}>Лучший бомбардир 2017</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.textSecondary}>Дата</Typography>
                <Typography className={classes.textMain}>21.12.2017</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={0} style={{ padding: 16 }} className="border-bottom">
              <Grid item xs={12}>
                <Typography className={classes.textSecondary}>Название</Typography>
                <Typography className={classes.textMain}>Лучший бомбардир сезона 2016</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.textSecondary}>Дата</Typography>
                <Typography className={classes.textMain}>25.12.2016</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={0} style={{ padding: 16 }}>
              <Grid item xs={12}>
                <Typography className={classes.textSecondary}>Название</Typography>
                <Typography className={classes.textMain}>Обладатель кубка Гагарина</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.textSecondary}>Дата</Typography>
                <Typography className={classes.textMain}>13.12.2010</Typography>
              </Grid>
            </Grid>
            <PaperMenu />
          </div>
        </Paper>
      </div>
    );
  }
}

Achievements.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Achievements);
