import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/es/Grid/Grid";
import Paper from "material-ui/es/Paper/Paper";
import Typography from "material-ui/es/Typography/Typography";
import Link from "react-router-dom/es/Link";
import MiniCard from "./MiniCard";

const styles = theme => ({
  paper: {
    boxShadow: "none",
    borderRadius: 12,
    paddingBottom: 16,
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 10,
    border: "1px solid rgba(0,0,0,0.1);",
    fontSize: 16,
    fontFamily: '"BlissPro",sans-serif'
  },
  name: {
    color: "rgba(36,36,33,1)",
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 36,
    marginBottom: 9
  },
  infoTitle: {
    color: "rgba(36,36,33,0.6)",
    fontSize: 13
  },
  infoVal: {
    color: "rgba(36,36,33,1)",
    fontSize: 15,
    marginTop: 5,
    fontWeight: "bold"
  },
  avatar: {
    width: 100,
    height: 100,
    margin: "auto"
  },
  link: {
    marginBottom: 16,
    fontSize: 15,
    borderBottom: "1px solid rgba(36,36,33,0.2)",
    color: "rgba(36,36,33,1)",
    "&:hover": {
      color: "rgba(0,118,94,1)"
    }
  },
  cards: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block"
    }
  },
  minicards: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block"
    }
  }
});

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
          <Paper className={classes.paper}>
            <Typography className={classes.name}>{school.title}</Typography>
            <Typography className={classes.infoTitle}>Директор</Typography>
            <Link to="worker/2" className={classes.link}>
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
