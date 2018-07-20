import React from 'react';
import {Grid} from "material-ui";
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import Paper from "material-ui/es/Paper/Paper";
import Avatar from "material-ui/es/Avatar/Avatar";
import Typography from "material-ui/es/Typography/Typography";
import Link from "react-router-dom/es/Link";
import styles from '../../../styles'


class Trainer extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        selectSchool: 1,
        name: 'hai',
        tableView: true,
    };
    changeView = event => {
        this.setState({
            tableView: !(this.state.tableView)
        });
    };
    handleChange = event => {
        this.setState({selectedFilter: event.target.value});
    };

    render() {
        const {classes} = this.props;
        return (
            <div>
                <Link to='/worker/1'>
                <Paper className={classes.trainerPaper}>
                    <Grid container alignItems="flex-start" spacing={16} >
                        <Grid item xs={3} lg={2}>
                            <Avatar
                                alt="Adelle Charles"
                                src="https://jira.hyperledger.org/secure/useravatar?size=xsmall&avatarId=10346"
                                classes={{
                                    root: classes.trainerAvatar
                                }}
                            />

                        </Grid>
                        <Grid item xs={9} lg>
                            <Link to='/worker/1' className={classes.trainerLink}>Ягупов Анатолий Павлович </Link>
                            <Typography className={classes.trainLevel}>Тренер-преподаватель высшей категории</Typography>
                        </Grid>
                    </Grid>
                </Paper>
                </Link>
            </div>
        )
    }
}

Trainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Trainer);