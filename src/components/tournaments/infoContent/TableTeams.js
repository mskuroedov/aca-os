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

const styles = theme => ({
    teamsContainer: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('lg')]:{
            maxHeight:370,
            overflowY:'hidden'
        },
        [theme.breakpoints.up('lg')]:{
            maxHeight:375,
            flexWrap: 'wrap'

        },
    },
    teamItem: {
        marginBottom:16,
        [theme.breakpoints.down('md')]:{
            paddingRight: 32,
            paddingLeft: 32,
        }
    },
    paper: {
        paddingTop: 24,
        paddingBottom: 16,
        [theme.breakpoints.up('md')]:{
            paddingRight: 32,
            paddingLeft: 32,
        }
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
    },
    button: {
        marginLeft:16,
        fontSize: 13,
        fontWeight: 'bold',
        fontFamily: '"BlissPro",sans-serif',
    },

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
                        <Button color='primary' className={classNames(classes.button,'lg-hidden')}>все команды</Button>
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