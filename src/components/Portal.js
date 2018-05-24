import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from "@material-ui/core/es/Grid/Grid";
import NewsPaper from "./schools/school/common/NewsPaper";
import Paper from "@material-ui/core/es/Paper/Paper";
import Button from "@material-ui/core/es/Button/Button";

function TabContainer(props) {
    return (
        <Typography
            component="div"
            style={{paddingTop: 24, backgroundColor: "#f6f6f6", paddingRight: 168, paddingLeft: 168}}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    paper: {
        boxShadow: 'none',
        borderRadius: 12,
        paddingTop: 16,
        paddingLeft: 24,
        paddingBottom: 16,
        marginBottom: 10,
        border: '1px solid rgba(0,0,0,0.1);',
        fontSize: 16,
        fontFamily: '"BlissPro",sans-serif',
    },
    title: {
        marginBottom: 11,
        fontSize: 20,
        color: ' rgba(36,36,33,0.6);',
        fontFamily: '"BlissPro",sans-serif',
        fontWeight: 'normal'
    },
    primaryText: {
        fontSize: 16,
        fontFamily: 'BlissPro',
        marginBottom:16
    },
    button: {
        margin: theme.spacing.unit,
        fontSize: 13,
        marginLeft: 'auto',
        fontWeight: 'bold',
        marginRight: 20,
        fontFamily: '"BlissPro",sans-serif',
    },

});

class Portal extends React.Component {


    render() {
        const {classes} = this.props;

        return (
            <section style={{paddingLeft: 168, paddingRight: 168,paddingTop:24}}>
                <Grid container spacing={16}>
                    <Grid item xs={12}>
                        <h3 className={classes.title}>О портале</h3>

                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Typography className={classes.primaryText}>Академия «Ак Барс» имени Ю.И. Моисеева основана в январе 2017 года. На
                                сегодняшний день Академия объединяет 3 детско-юношеские спортивные школы: СДЮСШ «Ак
                                Барс» (Казань), СДЮСШ «Нефтяник» (Альметьевск) и ДЮСШ «Динамо» (Казань). Более 1300 юных
                                хоккеистов тренируются в системе Академии «Ак Барс». </Typography>
                            <Typography className={classes.primaryText}>Деятельность Академии направлена на всестороннее развитие юных хоккеистов: мы
                                заботимся не только о развитии технических навыков молодых игроков, но и о гармоничном
                                развитии личности в физическом, психологическом и социальном аспектах.</Typography>

                            <Button color='primary' className={classes.button}
                                    style={{ marginLeft: -7}}>подробнее</Button>
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <h3 className={classes.title}>Новости</h3>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={16}>
                            <Grid item xs={4}>
                                <NewsPaper/>

                            </Grid>
                            <Grid item xs={4}>
                                <NewsPaper/>

                            </Grid>
                            <Grid item xs={4}>
                                <NewsPaper/>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        )
    }
}

Portal.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Portal);