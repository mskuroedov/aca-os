import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import Paper from "@material-ui/core/es/Paper/Paper";
import Typography from "@material-ui/core/es/Typography/Typography";
import Button from "@material-ui/core/es/Button/Button";

const styles = theme => ({
    paper: {
        boxShadow: 'none',
        borderRadius: 12,
        paddingTop: 31,
        paddingLeft: 24,
        paddingBottom: 16,
        paddingRight: 64,
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
    heading:{
        fontSize:18,
        color:'#242421',
        fontWeight:'bold',
        marginBottom:18
    },
    primaryText: {
        fontSize: 14,
        fontFamily: 'BlissPro',
        marginBottom: 16
    },
    firstText: {
        width: 662,
        maxHeight: 62,
        overflow: 'hidden'
    },
    secondText:{
        maxHeight:60,
        overflow:'hidden'
    },
    button: {
        margin: theme.spacing.unit,
        fontSize: 13,
        marginLeft: 'auto',
        fontWeight: 'bold',
        fontFamily: '"BlissPro",sans-serif',
    },
    p0:{
        padding:0
    },
    price:{
        fontSize:24,
        color:'#242421',
        fontWeight:'bold'
    }

});


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
                    <Paper className={classes.paper}>
                        <Grid container spacing={16}>
                            <Grid item xs={9}>
                                <Typography className={classes.heading}>Теория и методика хоккея</Typography>
                                <Typography className={classNames(classes.primaryText, classes.firstText)}> В учебнике
                                    рассматриваются техника и тактика
                                    игры в хоккей, методика обучения и тренировки хоккеистов. Центральное место в книге
                                    занимают вопросы подготовки хоккеистов, в том числе юных, организации тренировочного
                                    процесса, соревнований, проведения массовой работы по... тому виду спорта. Может
                                    быть
                                    рекомендован также преподавателям вузов физической культуры, тренерам.
                                </Typography>
                                <Button color='primary' className={classNames(classes.button ,classes.p0)}>Подробнее</Button>

                            </Grid>
                            <Grid item xs={3} style={{textAlign:'center'}}>
                                <Typography className={classes.price}>456 руб.</Typography>
                                <Button variant="raised" color='primary' className={classes.button}>в корзину</Button>
                            </Grid>
                        </Grid>

                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.title}>Условия предоставления</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography className={classNames(classes.primaryText,classes.secondText)}>Данный материал защищен авторским правом, и любое его несанкционированное использование может повлечь нарушение законодательства об авторском праве, товарных знаках и прочих законов. При нарушении любого из этих Условий вы автоматически лишаетесь права на использование этого Сайта и должны немедленно уничтожить все материалы, которые... были загружены с этого Сайта или распечатаны.
                            Права на все материалы, размещенные на сайте akbars.academy принадлежат сайту akbars.academy
                            Сайт akbars.academy не размещает материалов, авторские и смежные права на которые (в том числе права на распространение) принадлежат другим физическим или юридическим лицам.
                            Авторские статьи, опубликованные на сайте akbars.academy, являются собственностью akbars.academy.</Typography>

                        <Button color='primary' className={classNames(classes.button ,classes.p0)}>Подробнее</Button>


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