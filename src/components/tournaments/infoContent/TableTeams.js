import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import Typography from "@material-ui/core/es/Typography/Typography";
import Paper from "@material-ui/core/es/Paper/Paper";
import {teams} from '../../../fixtures/tournaments'
import Link from "react-router-dom/es/Link";
import Button from "material-ui/es/Button/Button";
import styles from '../../styles'



class TableTeams extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        teams
    };


    render() {
        const {classes} = this.props;
        const {teams} = this.state;
        return (
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <Typography className={classes.title}>Команды</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classNames(classes.paperTableTeams, 'paper')}>
                        <div className={classes.teamsContainer}>
                            {
                                teams.map((team, i) => (
                                    <div className={classes.teamItem} key={team.id}>
                                        <Link to='/team/1' className={classes.link}>{team.name}</Link>
                                    </div>
                                ))
                            }
                        </div>
                        <Button color='primary' className={classNames(classes.button,'lg-hidden')} style={{marginLeft:16}}>все команды</Button>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

TableTeams.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableTeams);