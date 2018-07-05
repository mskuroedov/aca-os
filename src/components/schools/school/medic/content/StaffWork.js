import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Typography from "@material-ui/core/es/Typography/Typography";
import Paper from "@material-ui/core/es/Paper/Paper";
import Table from "@material-ui/core/es/Table/Table";
import TableHead from "@material-ui/core/es/TableHead/TableHead";
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import TableBody from "@material-ui/core/es/TableBody/TableBody";
import Grid from "@material-ui/core/es/Grid/Grid";
import PaperMenu from "../PaperMenu";

const styles = theme => ({
  title: {
    marginBottom: 11,
    fontSize: 20,
    color: " rgba(36,36,33,0.6);",
    fontFamily: '"BlissPro",sans-serif',
    fontWeight: "normal"
  },
  textMain: {
    color: "#242421",
    fontSize: 16,
    marginBottom: 16
  },
  textSecondary: {
    color: "rgba(36,36,33,0.54)",
    fontSize: 14
  }
});

class StaffWork extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography className={classes.title}>Работа</Typography>
        <Paper className="paper" style={{ position: "relative" }}>
          <Table className="table no-bottom xs-hidden">
            <TableHead>
              <TableRow>
                <TableCell>Период</TableCell>
                <TableCell>Должность</TableCell>
                <TableCell>Школа</TableCell>
                <TableCell>Группа</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>2015-2018</TableCell>
                <TableCell>Старший инструктор-методист</TableCell>
                <TableCell>ДЮСШ №43</TableCell>
                <TableCell>Группа 2012 г.р.</TableCell>
                <TableCell className="PaperMenuTrigger">
                  <PaperMenu relate />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="lg-hidden">
            <Grid container spacing={0} style={{ padding: 16 }}>
              <Grid item xs={12}>
                <Typography className={classes.textSecondary}>
                  Период
                </Typography>
                <Typography className={classes.textMain}>2015-2018</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.textSecondary}>
                  Должность
                </Typography>
                <Typography className={classes.textMain}>
                  Старший инструктор-методист
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.textSecondary}>Школа</Typography>
                <Typography className={classes.textMain}>ДЮСШ №43</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.textSecondary}>
                  Группа
                </Typography>
                <Typography className={classes.textMain}>
                  Группа 2012 г.р.
                </Typography>
              </Grid>
            </Grid>
            <PaperMenu />
          </div>
        </Paper>
      </div>
    );
  }
}

StaffWork.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StaffWork);
