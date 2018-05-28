import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Link from "react-router-dom/es/Link";
import Paper from "@material-ui/core/es/Paper/Paper";
import Avatar from "material-ui/es/Avatar/Avatar";
import Grid from "@material-ui/core/es/Grid/Grid";
import Typography from "@material-ui/core/es/Typography/Typography";

const styles = theme => ({
    paper: {
        boxShadow: 'none',
        borderRadius: 12,
        paddingTop: 24,
        paddingBottom: 20,
        marginBottom: 10,
        border: '1px solid rgba(0,0,0,0.1);',
        fontSize: 16,
        fontFamily: '"BlissPro",sans-serif'

    },
    avatar: {
        width: 100,
        height: 100,
        margin: 'auto',
        marginBottom:20
    },
    name: {
        color: 'rgba(36,36,33,1)',
        fontSize: 18,
        marginTop: 0,
        marginBottom: 16,
        textAlign: 'center',
    },
    infoTitle: {
        color: 'rgba(36,36,33,0.6)',
        fontSize: 14,
        textAlign:'center'
    },

});


class TrainerView extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <Link to='/'>
                <Paper className={classes.paper}>
                    <Avatar
                        alt="Adelle Charles"
                        src="https://jira.hyperledger.org/secure/useravatar?size=xsmall&avatarId=10346"
                        classes={{
                            root: classes.avatar
                        }}
                    />
                    <Grid container spacing={16}>
                        <Grid item xs={10} style={{margin: 'auto'}}>
                            <Typography className={classes.name}>
                                Красильников <br/>
                                Сергей Васильевич</Typography>
                            <Typography className={classes.infoTitle}>Тренер-преподаватель</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Link>
        )
    }
}

TrainerView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TrainerView);