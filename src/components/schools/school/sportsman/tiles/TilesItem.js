import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from "material-ui/es/Paper/Paper";
import Link from "react-router-dom/es/Link";
import Avatar from "material-ui/es/Avatar/Avatar";
import Grid from "material-ui/es/Grid/Grid";
import Typography from "material-ui/es/Typography/Typography";
import styles from '../../../../styles'



class TilesView extends React.Component {

    render() {
        const {classes} = this.props;
        const {firstname, secondname, middlename} = this.props;
        return (
            <Grid item xs={12} lg={4}>
                <Link to="/sportsman/1">
                    <Paper className={classes.STpaper}>
                        <Avatar
                            alt="Adelle Charles"
                            src="https://jira.hyperledger.org/secure/useravatar?size=xsmall&avatarId=10346"
                            classes={{
                                root: classes.STavatar
                            }}
                        />
                        <Typography className={classes.STname}>
                            {secondname} <br/>
                            {firstname} {middlename}
                        </Typography>
                        <hr style={{borderColor: 'rgba(36,36,33,0.1)', color: 'white', borderBottom: 0}}/>
                        <Grid container className={classes.STinfoContainer}>
                            <Grid item className={classes.STinfo}>
                                <Typography className={classes.STinfoTitle}>
                                    Год рождения
                                </Typography>
                                <Typography className={classes.STinfoVal}>
                                    2000
                                </Typography>
                                <Typography className={classes.STinfoTitle}>
                                    Год набора
                                </Typography>
                                <Typography className={classes.STinfoVal}>
                                    2016
                                </Typography>
                                <Typography className={classes.STinfoTitle}>
                                    Группа
                                </Typography>
                                <Typography className={classes.STinfoVal}>
                                    <Link to='/groups' className={classes.STlink}>Группа 1</Link>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography className={classes.STinfoTitle}>
                                    Амплуа
                                </Typography>
                                <Typography className={classes.STinfoVal}>
                                    Вратарь
                                </Typography>
                            </Grid>
                        </Grid>

                    </Paper>
                </Link>
            </Grid>
        )
    }
}

TilesView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TilesView);

