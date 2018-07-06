import React from 'react';
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from 'material-ui';
import Typography from '@material-ui/core/es/Typography/Typography';
import withStyles from '@material-ui/core/es/styles/withStyles';
import PaperMenu from './PaperMenu';
import { Link } from 'react-router-dom';

const styles = theme => ({
  textMain: {
    color: '#242421',
    fontSize: 16,
    marginBottom: 16
  },
  textSecondary: {
    color: 'rgba(36,36,33,0.54)',
    fontSize: 16
  }
});

class Career extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid item xs={12} className="paper_w_table">
        <Paper className="paper">
          <Table className="table xs-hidden">
            <TableHead>
              <TableRow>
                <TableCell>Период</TableCell>
                <TableCell>Амплуа</TableCell>
                <TableCell>Команда</TableCell>
                <TableCell numeric>Игры</TableCell>
                <TableCell numeric>Выигрыши</TableCell>
                <TableCell>Тренер</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell style={{ borderBottom: 0 }}>2010-2017</TableCell>
                <TableCell style={{ borderBottom: 0 }}>Нападающий</TableCell>
                <TableCell style={{ borderBottom: 0 }}>Ак Барс</TableCell>
                <TableCell style={{ borderBottom: 0 }} numeric>
                  36
                </TableCell>
                <TableCell style={{ borderBottom: 0 }} numeric>
                  14
                </TableCell>
                <TableCell style={{ borderBottom: 0 }}>
                  <Link to="#">Саяпов Ренат Маратович</Link>
                </TableCell>
                <TableCell
                  style={{ borderBottom: 0 }}
                  className="PaperMenuTrigger"
                >
                  <PaperMenu relate />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Grid
            container
            spacing={0}
            style={{ padding: 16, position: 'relative' }}
            className="lg-hidden"
          >
            <Grid item xs={12}>
              <Typography className={classes.textSecondary}>Период</Typography>
              <Typography className={classes.textMain}>2010-2017</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.textSecondary}>Амплуа</Typography>
              <Typography className={classes.textMain}>Нападающий</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.textSecondary}>Команда</Typography>
              <Typography className={classes.textMain}>Ак Барс</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.textSecondary}>Игры</Typography>
              <Typography className={classes.textMain}>36</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.textSecondary}>
                Выигрыши
              </Typography>
              <Typography className={classes.textMain}>14</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.textSecondary}>Тренер</Typography>
              <Typography className={classes.textMain}>
                <Link to="#">Саяпов Ренат Маратович</Link>
              </Typography>
            </Grid>
            <PaperMenu />
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(styles)(Career);
