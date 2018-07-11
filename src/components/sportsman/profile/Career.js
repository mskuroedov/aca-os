import React from 'react';
import {Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "material-ui";
import Typography from "@material-ui/core/es/Typography/Typography";
import withStyles from "@material-ui/core/es/styles/withStyles";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from '../../styles'

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
              <Typography className={classes.textSecondaryfs16}>Период</Typography>
              <Typography className={classNames(classes.textMain,classes.mb16)}>2010-2017</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.textSecondaryfs16}>Амплуа</Typography>
              <Typography className={classNames(classes.textMain,classes.mb16)}>Нападающий</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.textSecondaryfs16}>Команда</Typography>
              <Typography className={classes.textMain}>Ак Барс</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.textSecondary}>Игры</Typography>
              <Typography className={classNames(classes.textMain,classes.mb16)}>36</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.textSecondaryfs16}>
                Выигрыши
              </Typography>
              <Typography className={classNames(classes.textMain,classes.mb16)}>14</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.textSecondaryfs16}>Тренер</Typography>
              <Typography className={classNames(classes.textMain,classes.mb16)}>
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
