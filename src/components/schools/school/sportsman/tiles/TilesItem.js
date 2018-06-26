import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from "material-ui/es/Paper/Paper";
import Link from "react-router-dom/es/Link";
import Avatar from "material-ui/es/Avatar/Avatar";
import Grid from "material-ui/es/Grid/Grid";
import Typography from "material-ui/es/Typography/Typography";


const styles = theme => ({

    paper: {
        boxShadow: 'none',
        borderRadius: 12,
        paddingTop: 24,
        paddingBottom: 16,
        marginBottom: 10,
        border: '1px solid rgba(0,0,0,0.1);',
        fontSize: 16,
        fontFamily: '"BlissPro",sans-serif'

    },
    name: {
        color: 'rgba(36,36,33,1)',
        fontSize: 18,
        marginTop: 19,
        marginBottom: 19,
        textAlign: 'center',
    },
    infoContainer: {
        paddingLeft: 25,
        paddingRight: 25
    },
    info: {
        minWidth: '50%'
    },
    infoTitle: {
        color: 'rgba(36,36,33,0.6)',
        fontSize: 14,
        marginTop: 16
    },
    infoVal: {
        color: 'rgba(36,36,33,1)',
        fontSize: 16,
        marginTop: 5
    },
    avatar: {
        width: 100,
        height: 100,
        margin: 'auto'
    },
    link: {
        borderBottom: '1px solid rgba(36,36,33,0.2)',
        color: 'rgba(36,36,33,1)',
        '&:hover': {
            color: 'rgba(0,118,94,1)'
        }
    }
});


class TilesView extends React.Component {

    render() {
        const {classes} = this.props;
        const {firstname, secondname, middlename} = this.props;
        return (
            <Grid item xs={12} lg={4}>
                <Link to="/sportsman/1">
                    <Paper className={classes.paper}>
                        <Avatar
                            alt="Adelle Charles"
                            src="https://jira.hyperledger.org/secure/useravatar?size=xsmall&avatarId=10346"
                            classes={{
                                root: classes.avatar
                            }}
                        />
                        <Typography className={classes.name}>
                            {secondname} <br/>
                            {firstname} {middlename}
                        </Typography>
                        <hr style={{borderColor: 'rgba(36,36,33,0.1)', color: 'white', borderBottom: 0}}/>
                        <Grid container className={classes.infoContainer}>
                            <Grid item className={classes.info}>
                                <Typography className={classes.infoTitle}>
                                    Год рождения
                                </Typography>
                                <Typography className={classes.infoVal}>
                                    2000
                                </Typography>
                                <Typography className={classes.infoTitle}>
                                    Год набора
                                </Typography>
                                <Typography className={classes.infoVal}>
                                    2016
                                </Typography>
                                <Typography className={classes.infoTitle}>
                                    Группа
                                </Typography>
                                <Typography className={classes.infoVal}>
                                    <Link to='/groups' className={classes.link}>Группа 1</Link>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography className={classes.infoTitle}>
                                    Амплуа
                                </Typography>
                                <Typography className={classes.infoVal}>
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

