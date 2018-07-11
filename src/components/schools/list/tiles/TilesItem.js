import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/es/Grid/Grid";
import Paper from "material-ui/es/Paper/Paper";
import Typography from "material-ui/es/Typography/Typography";
import Link from "react-router-dom/es/Link";
import styles from '../../../styles'


class TilesItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, school } = this.props;
    return (
      <Grid xs={12} item>
        <Grid xs={12} item className={classes.minicards}>
          <MiniCard school={school} />
        </Grid>
        <Grid item xs={12} lg={4} className={classes.cards}>
          <Paper className={classes.tilePaper}>
            <Typography className={classes.tileName}>{school.title}</Typography>
            <Typography className={classes.infoTitle}>Директор</Typography>
            <Link to="worker/2" className={classes.tileLink}>
              {school.director.secondname} {school.director.firstname}{" "}
              {school.director.middlename}
            </Link>
            <Typography className={classes.infoTitle} style={{ marginTop: 16 }}>
              Город
            </Typography>
            <Typography
              className={classes.infoVal}
              style={{ marginBottom: 16 }}
            >
              Набережные челны
            </Typography>
            <hr
              style={{
                borderColor: "rgba(36,36,33,0.1)",
                color: "white",
                width: "calc(100% + 48px)",
                marginLeft: -24,
                borderBottom: 0
              }}
              className="xs-hidden"
            />
            <Grid container spacing={16} className={classes.infoContainer}>
              <Grid item xs={12} lg>
                <Typography className={classes.infoTitle}>
                  Спортсмены
                </Typography>
                <Typography className={classes.infoVal}>
                  {school.sportsman_count}
                </Typography>
              </Grid>
              <Grid item xs={12} lg>
                <Typography className={classes.infoTitle}>Тренеры</Typography>
                <Typography className={classes.infoVal}>
                  {school.trainers_count}
                </Typography>
              </Grid>
              <Grid item xs={12} lg>
                <Typography className={classes.infoTitle}>Группы</Typography>
                <Typography className={classes.infoVal}>
                  {school.groups_count}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

TilesItem.propTypes = {
  classes: PropTypes.object.isRequired,
  school: PropTypes.object.isRequired
};

export default withStyles(styles)(TilesItem);
