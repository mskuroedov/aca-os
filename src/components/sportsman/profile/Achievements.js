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
import { withStyles } from 'material-ui/styles/index';
import Typography from '@material-ui/core/es/Typography/Typography';
import PaperMenu from './PaperMenu';

const styles = theme => ({
  textMain: {
    color: '#242421',
    fontSize: 16,
    marginBottom: 16
  },
  textSecondary: {
    color: 'rgba(36,36,33,0.54)',
    fontSize: 16
  },
  borderBottom: {
    '&*:(not-last-of-type)': {
      borderBottom: '1px soldi red'
    }
  }
});

class Achievements extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid item xs={12} lg={8} className="paper_w_table">
        <Paper className="paper">
          <Table className="table xs-hidden">
            <TableHead>
              <TableRow>
                <TableCell>Нзавние</TableCell>
                <TableCell numeric>Дата</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell style={{ borderBottom: 0 }} className="table_w_icon">
                  Курс "Методологическая работа в области физической кульутры и
                  спорта"
                </TableCell>
                <TableCell style={{ borderBottom: 0 }}>21.07.2016</TableCell>
                <TableCell
                  style={{ borderBottom: 0 }}
                  className="PaperMenuTrigger"
                >
                  <PaperMenu relate />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="lg-hidden">
            <Grid
              container
              spacing={0}
              style={{ padding: 16, position: 'relative' }}
              className="border-bottom"
            >
              <Grid item xs={12}>
                <Typography className={classes.textSecondary}>
                  Название
                </Typography>
                <Typography className={classes.textMain}>
                  Курс "Методологическая работа в области физической кульутры и
                  спорта"
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.textSecondary}>Дата</Typography>
                <Typography className={classes.textMain}>21.12.2017</Typography>
              </Grid>
              <PaperMenu />
            </Grid>
          </div>
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(styles)(Achievements);
