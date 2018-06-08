import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import Paper from "@material-ui/core/es/Paper/Paper";
import Typography from "@material-ui/core/es/Typography/Typography";

const styles = theme => ({
    paper: {
        boxShadow: 'none',
        borderRadius: 12,
        paddingTop: 16,
        paddingLeft: 24,
        paddingBottom: 16,
        paddingRight:64,
        marginBottom: 64,
        border: '1px solid rgba(0,0,0,0.1);',
        fontSize: 16,
        fontFamily: '"BlissPro",sans-serif',
    },
    title: {
        fontSize: 20,
        color: ' rgba(36,36,33,0.6);',
        fontFamily: '"BlissPro",sans-serif',
        fontWeight: 'normal'
    },
    primaryText: {
        fontSize: 15,
        fontFamily: 'BlissPro',
        marginBottom: 16
    },

});


class ParentsInfo extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <Typography className={classes.title}>Занятия в хоккейной школе</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.primaryText}>Для подачи заявки заявки необходимы свидетельство о
                            рождении и справка о состоянии здоровья.</Typography>
                        <Typography className={classes.primaryText}>В академии «Ак Барс» дети разделены в соответствии с
                            возрастом на 12 групп: от 5 до 16 лет.</Typography>
                        <Typography className={classes.primaryText}>Тренировки длятся 1–1,5 часа и в зависимости от
                            группы проходят от 4 до 6 раз в неделю. Занятия ведутся с сентября по май и проходят как в
                            спортивном зале, так и на катке. Нагрузки для маленьких детей не слишком большие, чем у
                            более старших детей. Дети которые посещают хоккейную секцию должны на каждое занятие одевать
                            хоккейную форму, в нее входят: комбинезон, хоккейный панцирь, защитная маска, хоккейные
                            шорты, перчатки, коньки, клюшка.</Typography>
                        <Typography className={classes.primaryText}> С 10 лет родители юного хоккеиста заключают договор
                            о переводе его на полное обеспечение клуба, а с 17 лет наиболее талантливые воспитанники
                            получают право подписать профессиональный контракт. </Typography>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

ParentsInfo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ParentsInfo);