import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import classNames from 'classnames';
import Paper from "@material-ui/core/es/Paper/Paper";
import Grid from "@material-ui/core/es/Grid/Grid";
import Icon from "@material-ui/core/es/Icon/Icon";
import Typography from "@material-ui/core/es/Typography/Typography";
import styles from '../../styles'


class DateView extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <section style={{paddingLeft: 168, paddingRight: 168, paddingTop: 32, paddingBottom: 64}}>
                <Grid container>
                    <Grid item xs={10}>
                        <Paper className='paper'
                               style={{paddingTop: 24, paddingBottom: 40, paddingLeft: 65, paddingRight: 65}}>
                            <Grid container spacing={24}>
                                <Grid item>
                                    <Typography className={classes.text}><Icon className={classes.dateicon}>calendar_today</Icon> 24.12.2017</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.text}><Icon className={classes.dateicon}>query_builder</Icon> 12:00</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.text}><Icon className={classes.dateicon}>location_on</Icon> Казань, комплекс «Казань Арена», пр. Ямашева, 115а </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={8} justify='center' style={{marginTop:28}}>
                                <Grid item>
                                    <Typography className={classes.datetext}>МХЛ</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.dot}>•</Typography>
                                </Grid>
                                <Grid item>

                                    <Typography className={classes.datetext}> МКЦ Поволжье</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.dot}>•</Typography>

                                </Grid>
                                <Grid item>

                                    <Typography className={classes.datetext}> 2012 г. р.</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.dot}>•</Typography>

                                </Grid>
                                <Grid item>

                                    <Typography className={classes.datetext}>Плей-офф</Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={8} justify='space-between' alignItems='center' style={{marginTop:32}}>
                                <Grid item xs={4}>
                                    <Typography className={classes.datename}>ЦСКА-Красная Армия</Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography className={classes.score}>2:3 Б</Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography className={classes.datename}>Феникс</Typography>
                                </Grid>
                            </Grid>
                            <Grid container justify='center' spacing={8}>
                                <Grid item>
                                    <Typography className={classes.secondScore}>1:0</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.secondScore}>1:1</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.secondScore}>0:0</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.secondScore}>0:0</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.secondScore}>0:1</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </section>
        )
    }
}

DateView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateView);