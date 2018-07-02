import React from "react";
import PropTypes from "prop-types";
import { Avatar, TableCell, TableRow } from "material-ui";
import { Link } from "react-router-dom";
import { withStyles } from "material-ui/styles/index";

const styles = theme => ({
  link: {
    borderBottom: "1px solid rgba(36,36,33,0.2)",
    color: "rgba(36,36,33,1)",
    "&:hover": {
      color: "rgba(0,118,94,1)"
    }
  }
});

class SelfTableItem extends React.Component {
  render() {
    const { classes, common } = this.props;
    const {
      number,
      FIO,
      amplua,
      school,
      group,
      totalGames,
      wonGames,
      scores,
      GSR,
      p,
      o,
      oi,
      gp,
      gB,
      sH,
      pm,
      shtrf,
      BV,
      percent,
      iv
    } = this.props;
    return (
      <TableRow>
        <TableCell>{number}</TableCell>
        <TableCell>
          <Link to="/sportsman/1" className={classes.link}>
            {FIO}
          </Link>
        </TableCell>
        {common ? (
          <TableCell>
            <Link to="#" className={classes.link}>
              {school}
            </Link>
          </TableCell>
        ) : (
          <TableCell>
            <Link to="/team/1" className={classes.link}>
              {group}
            </Link>
          </TableCell>
        )}
        {/*<TableCell>{amplua}</TableCell>*/}
        <TableCell>Н</TableCell>
        <TableCell numeric>{totalGames}</TableCell>
        {/*<TableCell numeric>{wonGames}</TableCell>*/}
        <TableCell numeric>{scores}</TableCell>
        {/*<TableCell numeric>{GSR}</TableCell>*/}
        <TableCell numeric>{p}</TableCell>
        <TableCell numeric>{o}</TableCell>
        <TableCell numeric>{pm}</TableCell>
        <TableCell numeric>{shtrf}</TableCell>
        <TableCell numeric>{BV}</TableCell>
        <TableCell numeric>{percent}</TableCell>
        <TableCell numeric>{iv}</TableCell>
        {/*<TableCell numeric>{oi}</TableCell>*/}
        {/*<TableCell numeric>{gp}</TableCell>*/}
        {/*<TableCell numeric>{gB}</TableCell>*/}
        {/*<TableCell numeric>{sH}</TableCell>*/}
      </TableRow>
    );
  }
}

SelfTableItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SelfTableItem);
