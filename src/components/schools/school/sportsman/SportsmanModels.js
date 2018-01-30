import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from "material-ui/es/Paper/Paper";
import Table from "material-ui/es/Table/Table";
import TableRow from "material-ui/es/Table/TableRow";
import TableCell from "material-ui/es/Table/TableCell";
import Link from "react-router-dom/es/Link";
import Avatar from "material-ui/es/Avatar/Avatar";
import {TableBody, TableHead} from "material-ui";
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
        fontFamily: 'BlissPro'

    },
    name:{
    color:'rgba(36,36,33,1)',
        fontSize:18,
        marginTop:19,
        marginBottom:19,
        textAlign:'center',
    },
    infoContainer:{
        paddingLeft:25,
        paddingRight:25
    },
    info:{
      minWidth:'50%'
    },
    infoTitle:{
        color:'rgba(36,36,33,0.6)',
        fontSize:14,
        marginTop:16
    },
    infoVal:{
        color:'rgba(36,36,33,1)',
        fontSize:16,
        marginTop:5
    },
    avatar: {
        width: 100,
        height: 100,
        margin:'auto'
    },
    link: {
        borderBottom: '1px solid rgba(36,36,33,0.2)',
        color: 'rgba(36,36,33,1)',
        '&:hover': {
            color: 'rgba(0,118,94,1)'
        }
    }
});


class SportsmanModels extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        selectSchool: 1,
        name: 'hai',
    };

    handleChange = event => {
        this.setState({selectSchool: event.target.value});
    };

    render() {
        const {classes} = this.props;
        return (
            <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <Avatar
                        alt="Adelle Charles"
                        src="https://jira.hyperledger.org/secure/useravatar?size=xsmall&avatarId=10346"
                        classes={{
                            root: classes.avatar
                        }}
                    />
                    <Typography className={classes.name}>
                        Красильников <br/>
                        Сергей Васильевич
                    </Typography>
                    <hr style={{borderColor: 'rgba(36,36,33,0.1)',color:'white',borderBottom:0}}/>
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
                                <Link to='#' className={classes.link}>Группа 1</Link>
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
            </Grid>
        )
    }
}

SportsmanModels.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SportsmanModels);

