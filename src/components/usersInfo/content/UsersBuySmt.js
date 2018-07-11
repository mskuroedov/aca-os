import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import Paper from "@material-ui/core/es/Paper/Paper";
import Typography from "@material-ui/core/es/Typography/Typography";
import Button from "@material-ui/core/es/Button/Button";
import styles from '../../styles'


class UsersBuySmt extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <Typography className={classes.title}>Описание</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paperFirst}>
                        <Grid container spacing={16}>
                            <Grid item xs={12} lg={9}>
                                <Typography className={classes.heading}>Теория и методика хоккея</Typography>
                                <Typography className={classNames(classes.primaryText, classes.firstText)}> В учебнике
                                    рассматриваются техника и тактика
                                    игры в хоккей, методика обучения и тренировки хоккеистов. Центральное место в книге
                                    занимают вопросы подготовки хоккеистов, в том числе юных, организации тренировочного
                                    процесса, соревнований, проведения массовой работы по... <span className={classes.hide}>тому виду спорта. Может
                                    быть
                                    рекомендован также преподавателям вузов физической культуры, тренерам.</span>
                                </Typography>
                                <Button color='primary'
                                        className={classNames(classes.button, classes.p0)} style={{marginLeft:'auto'}}>Подробнее</Button>

                            </Grid>
                            <Grid item xs={12} lg={3} className={classes.buttonContainer}>
                                <Typography className={classes.UBSprice}>456 руб.</Typography>
                                <Button variant="raised" color='primary' className={classes.button}>в корзину</Button>
                            </Grid>
                        </Grid>

                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.title}>Условия предоставления</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paperSecond}>
                        <Typography className={classNames(classes.primaryText, classes.secondText)}>Данный материал
                            защищен авторским правом, и любое его несанкционированное использование может повлечь
                            нарушение законодательства об авторском праве, товарных знаках и прочих законов. При
                            нарушении любого из этих Условий вы автоматически лишаетесь права на использование этого
                            Сайта и должны немедленно уничтожить все материалы, которые... <span className={classes.hide}>были загружены с этого Сайта
                            или распечатаны.
                            Права на все материалы, размещенные на сайте akbars.academy принадлежат сайту akbars.academy
                            Сайт akbars.academy не размещает материалов, авторские и смежные права на которые (в том
                            числе права на распространение) принадлежат другим физическим или юридическим лицам.
                            Авторские статьи, опубликованные на сайте akbars.academy, являются собственностью
                            akbars.academy.</span></Typography>

                        <Button color='primary' className={classNames(classes.button, classes.p0)}>Подробнее</Button>


                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

UsersBuySmt.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UsersBuySmt);