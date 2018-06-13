import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Typography from 'material-ui/Typography';
import Grid from "@material-ui/core/es/Grid/Grid";
import NewsPaper from "./schools/school/common/NewsPaper";
import Paper from "@material-ui/core/es/Paper/Paper";
import Button from "@material-ui/core/es/Button/Button";
import Link from "react-router-dom/es/Link";
import FormControl from "material-ui/es/Form/FormControl";
import Input from "material-ui/es/Input/Input";
import InputAdornment from "material-ui/es/Input/InputAdornment";
import Icon from "material-ui/es/Icon/Icon";

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
        paddingRight:16,
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
        fontWeight: 'bold',
        fontFamily: '"BlissPro",sans-serif',
    },
    xsh:{
        [theme.breakpoints.down('lg')]: {
            display:'none',
        },
    },

    searchInput: {
        fontSize: 14,
        color: 'rgba(36,36,33,1)',
        marginTop: 11,
        paddingBottom: 5,
        width:'100%',
        marginLeft: 'auto',
        '&:before': {
            backgroundColor: 'rgba(0,0,0,0.2)'
        },
        '&:after': {
            backgroundColor: 'rgba(0,0,0,0.2)'
        }
    },
    searchInkbar: {
        color: 'rgba(36,36,33,1)',
        '&:before': {
            backgroundColor: 'rgba(0,0,0,0.2) !important'
        },
        '&:after': {
            backgroundColor: 'rgba(0,0,0,0.2) !important'
        }
    },
    searchInputIcon: {
        color: 'rgba(145,143,138,1)',
        position: 'relative',
        top: 0
    },
    formControl: {
        width:'100%'
    },
});

class Portal extends React.Component {


    render() {
        const {classes} = this.props;

        return (
            <section className='main-section'>
                <Grid container spacing={16}>
                    <Grid item xs={12} lg={4}>
                        <FormControl className={classes.formControl}>
                            <Input
                                classes={{
                                    root: classes.searchInput,
                                    underline: classes.searchInkbar
                                }}
                                onChange={this.onSearchChange}
                                placeholder="Поиск на портале"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <Icon classes={{
                                            root: classes.searchInputIcon
                                        }}>
                                            search
                                        </Icon>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <h3 className={classes.title}>О портале</h3>

                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Typography className={classes.primaryText}>Академия «Ак Барс» имени Ю.И. Моисеева основана в январе 2017 года. На
                                сегодняшний день Академия объединяет 3 детско-юношеские спортивные школы: СДЮСШ «Ак
                                Барс» (Казань), СДЮСШ «Нефтяник» (Альметьевск) и ДЮСШ «Динамо» (Казань). Более 1300 юных
                                хоккеистов тренируются в системе Академии «Ак Барс». </Typography>
                            <Typography className={classNames(classes.primaryText,classes.xsh)}>Деятельность Академии направлена на всестороннее развитие юных хоккеистов: мы
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
                            <Grid item xs={12} lg={4}>
                                <NewsPaper/>

                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <NewsPaper/>

                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <NewsPaper/>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} style={{textAlign:'center'}}>
                        <Button variant="raised" color='primary' className={classes.button} component={Link} to="/news">Все новости</Button>
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