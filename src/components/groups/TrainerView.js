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


});


class TrainerView extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <Link to='/worker/1'>
                <Paper className={classes.paper}>
                    <Avatar
                        alt="Adelle Charles"
                        src="https://jira.hyperledger.org/secure/useravatar?size=xsmall&avatarId=10346"
                        classes={{
                            root: classes.avatarw100
                        }}
                        styles={{
                            margin: 'auto',
                            marginBottom:20}}
                    />
                    <Grid container spacing={16}>
                        <Grid item xs={10} style={{margin: 'auto'}}>
                            <Typography className={classes.trainerName}>
                                Красильников <br/>
                                Сергей Васильевич</Typography>
                            <Typography className={classes.trainerInfoTitle}>Тренер-преподаватель</Typography>
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