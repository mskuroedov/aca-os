import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import Typography from "@material-ui/core/es/Typography/Typography";
import Paper from "@material-ui/core/es/Paper/Paper";
import Table from "@material-ui/core/es/Table/Table";
import TableHead from "@material-ui/core/es/TableHead/TableHead";
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import TableBody from "@material-ui/core/es/TableBody/TableBody";
import Link from "react-router-dom/es/Link";
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

class Contacts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography className={classes.title}>Контактная информация</Typography>
        <Paper className="paper">
          <Table className="table no-bottom xs-hidden">
            <TableHead>
              <TableRow>
                <TableCell>Адрес</TableCell>
                <TableCell>Телефон</TableCell>
                <TableCell>E-mail</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Россия, Казань</TableCell>
                <TableCell>+7 927 729-92-17</TableCell>
                <TableCell>
                  <Link to="mailto:mirhanov@yandex.ru">mirhanov@yandex.ru</Link>
                </TableCell>
                <TableCell className="PaperMenuTrigger">
                  <PaperMenu relate />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="lg-hidden">
            <Grid container spacing={0} style={{ padding: 16 }}>
              <Grid item xs={12}>
                <Typography className={classes.textSecondary}>Адрес</Typography>
                <Typography className={classes.textMain}>
                  Россия, Казань
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.textSecondary}>
                  Телефон
                </Typography>
                <Typography className={classes.textMain}>
                  +7 927 729-92-1
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Contacts);
