import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Grid from "material-ui/es/Grid/Grid";
import Paper from "material-ui/es/Paper/Paper";
import Typography from "material-ui/es/Typography/Typography";
import Link from "react-router-dom/es/Link";


const styles = theme => ({

    paper: {
        boxShadow: 'none',
        borderRadius: 12,
        paddingBottom: 16,
        paddingLeft:24,
        paddingRight:24,
        marginBottom: 10,
        border: '1px solid rgba(0,0,0,0.1);',
        fontSize: 16,
        fontFamily: 'BlissPro'

    },
    name: {
        color: 'rgba(36,36,33,1)',
        fontSize: 18,
        fontWeight:'bold',
        marginTop: 36,
        marginBottom: 9,
    },
    infoTitle: {
        color: 'rgba(36,36,33,0.6)',
        fontSize: 14,
        marginTop: 16
    },
    infoVal: {
        color: 'rgba(36,36,33,1)',
        fontSize: 16,
        marginTop: 5,
        fontWeight:'bold'
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


class TilesItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <Typography className={classes.name}>
                        ДЮСШ №9
                    </Typography>
                    <Typography className={classes.infoTitle}>
                        Директор
                    </Typography>
                    <Link to="#" className={classes.link}>
                        Гайнутдинов Ильшат Салихович
                    </Link>
                    <Typography className={classes.infoTitle}>
                        Город
                    </Typography>
                    <Typography className={classes.infoVal}>
                        Набережные челны
                    </Typography>
                    <hr style={{borderColor: 'rgba(36,36,33,0.1)', color: 'white',width:'calc(100% + 48px)',marginLeft:-24, borderBottom: 0}}/>
                    <Grid container className={classes.infoContainer}>
                        <Grid item>
                            <Typography className={classes.infoTitle}>
                                Спортсмены
                            </Typography>
                            <Typography className={classes.infoVal}>
                                100
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.infoTitle}>
                                Тренеры
                            </Typography>
                            <Typography className={classes.infoVal}>
                                20
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.infoTitle}>
                                Группы
                            </Typography>
                            <Typography className={classes.infoVal}>
                                15
                            </Typography>
                        </Grid>

                    </Grid>

                </Paper>
            </Grid>
        )
    }
}

TilesItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TilesItem);

