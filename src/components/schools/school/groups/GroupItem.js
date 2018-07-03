import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Paper from "@material-ui/core/es/Paper/Paper";
import Grid from "@material-ui/core/es/Grid/Grid";
import Typography from "@material-ui/core/es/Typography/Typography";
import Link from "react-router-dom/es/Link";
import PaperMenu from "./PaperMenu";

class GroupItem extends React.Component {
  constructor(props) {
    super(props);
  }

  navigate(to) {
    this.props.history.push(to);
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className="Paper" onClick={() => this.navigate("/groups")}>
        <Grid container spacing={32}>
          <Grid item xs={12} style={{ paddingBottom: 0 }}>
            <Typography
              classes={{
                root: "MainText"
              }}
            >
              Группа 2009
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography
              classes={{
                root: "SecondaryText"
              }}
            >
              Спортсмены
            </Typography>
            <Typography
              classes={{
                root: "MainText"
              }}
            >
              12
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              classes={{
                root: "SecondaryText"
              }}
            >
              Тренеры
            </Typography>
            <Typography
              classes={{
                root: "MainText"
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

export default withRouter(GroupItem);
