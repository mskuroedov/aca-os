import React from 'react';
import PropTypes from 'prop-types';
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
import styles from "./styles";
import withStyles from "@material-ui/core/es/styles/withStyles";

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