import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import Paper from "@material-ui/core/es/Paper/Paper";
import Typography from "@material-ui/core/es/Typography/Typography";
import styles from '../../styles'



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
                        <Typography className={classes.PIprimaryText}>Для подачи заявки заявки необходимы свидетельство о
                            рождении и справка о состоянии здоровья.</Typography>
                        <Typography className={classes.PIprimaryText}>В академии «Ак Барс» дети разделены в соответствии с
                            возрастом на 12 групп: от 5 до 16 лет.</Typography>
                        <Typography className={classes.PIprimaryText}>Тренировки длятся 1–1,5 часа и в зависимости от
                            группы проходят от 4 до 6 раз в неделю. Занятия ведутся с сентября по май и проходят как в
                            спортивном зале, так и на катке. Нагрузки для маленьких детей не слишком большие, чем у
                            более старших детей. Дети которые посещают хоккейную секцию должны на каждое занятие одевать
                            хоккейную форму, в нее входят: комбинезон, хоккейный панцирь, защитная маска, хоккейные
                            шорты, перчатки, коньки, клюшка.</Typography>
                        <Typography className={classes.PIprimaryText}> С 10 лет родители юного хоккеиста заключают договор
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