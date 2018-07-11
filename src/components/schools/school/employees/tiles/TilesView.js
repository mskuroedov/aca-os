import React from "react";
import Grid from "material-ui/es/Grid/Grid";
import TilesItem from "./TilesItem";
import { withStyles } from "@material-ui/core";

const styles = {
  title: {
    color: "rgba(36,36,33,0.6)",
    fontSize: 20
  }
};

class TilesView extends React.Component {
  render() {
    return (
      <Grid container spacing={16}>
        <Grid item xs={12} className={this.props.classes.title}>
          Администрация школы
        </Grid>
        <TilesItem />
        <TilesItem />
        <TilesItem />
        <TilesItem />

        <Grid item xs={12} className={this.props.classes.title}>
          Тренеры
        </Grid>
        <TilesItem />
        <TilesItem />
        <TilesItem />
        <TilesItem />
      </Grid>
    );
  }
}

export default withStyles(styles)(TilesView);
