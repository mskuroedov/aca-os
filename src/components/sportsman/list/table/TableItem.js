import React from "react";
import PropTypes from "prop-types";
import { Avatar, TableCell, TableRow } from "material-ui";
import { Link } from "react-router-dom";
import { withStyles } from "material-ui/styles/index";
import PaperMenu from "../PaperMenu";
import Checkbox from "@material-ui/core/Checkbox";

const styles = theme => ({
  avatar: {
    width: 36,
    height: 36,
    marginLeft: 16
  },
  link: {
    borderBottom: "1px solid rgba(36,36,33,0.2)",
    color: "rgba(36,36,33,1)",
    "&:hover": {
      color: "rgba(0,118,94,1)"
    }
  }
});

class TableItem extends React.Component {
  render() {
    const { classes } = this.props;
    const {
      firstname,
      secondname,
      middlename,
      onSelectRequest,
      isChecked
    } = this.props;

    return (
      <TableRow>
        <TableCell style={{ width: 10 }}>
          <Checkbox onChange={onSelectRequest} checked={isChecked} />
        </TableCell>
        <TableCell>
          <Avatar
            alt="Adelle Charles"
            src="https://jira.hyperledger.org/secure/useravatar?size=xsmall&avatarId=10346"
            classes={{
              root: classes.avatar
            }}
          />
        </TableCell>
        <TableCell>
          <Link to="/sportsman/1" className={classes.link}>
            {secondname} {firstname} {middlename}
          </Link>
        </TableCell>
        <TableCell>
          <Link to="#" className={classes.link}>
            Группа 2010 г. р.
          </Link>
        </TableCell>
        <TableCell numeric>2010</TableCell>
        <TableCell numeric>12.03.2012</TableCell>
        <TableCell>Вратарь</TableCell>
        <TableCell numeric>42</TableCell>
        <TableCell>
          <PaperMenu relate />
        </TableCell>
      </TableRow>
    );
  }
}

TableItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TableItem);
