import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Paper from "@material-ui/core/es/Paper/Paper";
import Link from "react-router-dom/es/Link";
import Typography from "@material-ui/core/es/Typography/Typography";
import Grid from "@material-ui/core/es/Grid/Grid";
import Button from "@material-ui/core/es/Button/Button";
import styles from '../../styles'


class CatalogItem extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes, cart, option} = this.props;
        return (
            <Link to='/users_info/item'>
                <Paper className='paper'
                       style={{height: 232, paddingLeft: 24, paddingRight: 44, paddingTop: 24, paddingBottom: 16}}>
                    <Grid container spacing={8} className={classes.flexCol}>
                        <Grid item xs={8} style={{maxWidth: '100%'}}>
                            <Typography className={classes.CatItemtitle}>Теория и методика хоккея</Typography>
                            <Typography className={classes.text}>В учебнике рассматриваются техника и тактика игры в
                                хоккей, методика обучения и тренировки хоккеистов... Центральное место в книге занимают
                                вопросы подготовки хоккеистов, в том числе юных, организации тренировочного процесса,
                                соревнований, проведения массовой работы по Тому виду спорта. Может быть рекомендован
                                также преподавателям вузов физической культуры, тренерам.</Typography>
                        </Grid>
                        <Grid item xs={4} style={{maxWidth: '100%'}}>
                            <Grid container alignItems='center'>
                                <Grid item xs={5}>
                                    <Typography className={classes.CatItemprice}>456 руб.</Typography>
                                    {
                                        option &&
                                        <Typography className={classes.secondary}>{option}</Typography>
                                    }
                                </Grid>
                                <Grid item xs={7}>
                                    {cart ?
                                        <Button color='primary' className={classes.button}>в корзину</Button>
                                        :
                                        <Button variant='raised' color='primary'
                                                className={classes.button}>оформить</Button>
                                    }
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Link>
        )
    }
}

CatalogItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CatalogItem);