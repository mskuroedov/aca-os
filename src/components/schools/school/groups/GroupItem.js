import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Paper from "@material-ui/core/es/Paper/Paper";
import Grid from "@material-ui/core/es/Grid/Grid";
import Typography from "@material-ui/core/es/Typography/Typography";
import Link from "react-router-dom/es/Link";


const styles = theme => ({
    paper: {
        boxShadow: 'none',
        borderRadius: 12,
        paddingTop: 24,
        paddingLeft: 27,
        paddingBottom: 32,
        border: '1px solid rgba(0,0,0,0.1);',
        fontSize: 16,
        fontFamily: '"BlissPro",sans-serif'

    },
    mainText: {
        color: '#242421',
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 0,
        marginBottom: 0
    },
    secondaryText: {
        color: 'rgba(36,36,33,0.6)',
        fontSize: 14,
        paddingBottom: 0
    }

});


class GroupItem extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <Link to='/groups'>
                <Paper className={classes.paper}>
                    <Grid container spacing={32}>
                        <Grid item xs={12} style={{paddingBottom: 0}}>
                            <Typography classes={{
                                root: classes.mainText
                            }}>Группа 2009</Typography>
                        </Grid>
                        <Grid item xs={5}>
                            <Typography classes={{
                                root: classes.secondaryText
                            }}>Спортсмены</Typography>
                            <Typography classes={{
                                root: classes.mainText
                            }}>12</Typography>

                        </Grid>

                        <Grid item xs={6}>
                            <Typography classes={{
                                root: classes.secondaryText
                            }}>Тренеры</Typography>
                            <Typography classes={{
                                root: classes.mainText
                            }}>2</Typography>

                        </Grid>
                    </Grid>
                </Paper>
             </Link>
        )
    }
}

GroupItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GroupItem);