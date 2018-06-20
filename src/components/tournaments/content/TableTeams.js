import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import Typography from "@material-ui/core/es/Typography/Typography";
import Paper from "@material-ui/core/es/Paper/Paper";
import {teams} from '../../../fixtures/tournaments'
import Link from "react-router-dom/es/Link";

const styles = theme => ({
    teamsContainer: {
        display: 'flex',
        flexDirection: 'column',
        maxHeight: 375,
        flexWrap: 'wrap'
    },
    teamItem: {
        marginBottom:16
    },
    paper: {
        paddingLeft: 32,
        paddingTop: 24,
        paddingBottom: 16,
        paddingRight: 32
    },
    title: {
        fontSize: 20,
        color: ' rgba(36,36,33,0.6);',
        fontFamily: '"BlissPro",sans-serif',
        fontWeight: 'normal'
    },
    link: {
        fontSize: 16,
        color: 'rgb(36,36,33);',
        borderBottom: '1px solid rgba(36,36,33,.2)',
        transition: 'all .3s',
        '&:hover': {
            borderBottom: '1px solid rgba(36,36,33,.6)',
        }
    }

});


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
                    <Paper className={classNames(classes.paper, 'paper')}>
                        <div className={classes.teamsContainer}>
                            {
                                teams.map((team, i) => (
                                    <div className={classes.teamItem} key={team.id}>
                                        <Link to='team/1' className={classes.link}>{team.name}</Link>
                                    </div>
                                ))
                            }
                        </div>
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