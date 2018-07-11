import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import Typography from "@material-ui/core/es/Typography/Typography";
import Paper from "@material-ui/core/es/Paper/Paper";
import Link from "react-router-dom/es/Link";
import Icon from "@material-ui/core/es/Icon/Icon";
import FormControl from "material-ui/es/Form/FormControl";
import Input from "material-ui/es/Input/Input";
import Button from "@material-ui/core/es/Button/Button";
import FontAwesome from 'react-fontawesome';
import styles from '../styles'



class CartPageContent extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <section className='main-section'>
                <Grid container spacing={16}>
                    <Grid item xs={12} lg={7}>
                        <Typography className={classes.title}>Выбрано</Typography>
                        <Paper className='paper'>
                            <Grid container alignItems='center' style={{
                                paddingTop: 21,
                                paddingLeft: 24,
                                paddingBottom: 19,
                                paddingRight: 20,
                                borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
                            }}>
                                <Grid item xs={12} lg={8} className={classes.mrXlAuto}>
                                    <Link to='/users_info/1' className={classes.link}>Морфологические критерии
                                        спортивного отбора в
                                        хоккее</Link>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.price}>700 руб.</Typography>
                                </Grid>
                                <Grid item>
                                    <Icon className={classes.icon}>delete</Icon>
                                </Grid>
                            </Grid>
                            <Grid container alignItems='center' style={{
                                paddingTop: 21,
                                paddingLeft: 24,
                                paddingBottom: 19,
                                paddingRight: 20,
                                borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
                            }}>
                                <Grid item xs={12} lg={8} className={classes.mrXlAuto}>
                                    <Link to='#' className={classes.link}>Морфологические критерии спортивного отбора в
                                        хоккее</Link>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.price}>700 руб.</Typography>
                                </Grid>
                                <Grid item>
                                    <Icon className={classes.icon}>delete</Icon>
                                </Grid>
                            </Grid>
                            <Grid container alignItems='center'
                                  style={{paddingTop: 21, paddingLeft: 24, paddingBottom: 19, paddingRight: 20}}>
                                <Grid item xs={12} lg={7} className={classes.promoblock}>
                                    <Link to='#' className={classNames(classes.link, classes.borderdashed)}>Есть
                                        промокод</Link>
                                </Grid>
                                <Grid item className={classes.itogoblock}>
                                    <Typography className={classes.price}><span className={classes.itogo}>Итого:</span>1400
                                        руб.</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} lg={5}>
                        <Typography className={classes.title}> Оформление заказа</Typography>
                        <Paper className={classNames(classes.paperCart, 'paper')}
                        >
                            <Grid container spancing={16}>
                                <Grid item xs={12}>
                                    <FormControl className={classes.formControl}>
                                        <Input classes={{
                                            root: classes.searchInput,
                                            underline: classes.searchInkbar
                                        }}
                                               fullwidth
                                               multiline
                                               placeholder="Имя"

                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl className={classes.formControl}>
                                        <Input classes={{
                                            root: classes.searchInput,
                                            underline: classes.searchInkbar
                                        }}
                                               fullwidth
                                               placeholder="Телефон"

                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl className={classes.formControl}>
                                        <Input classes={{
                                            root: classes.searchInput,
                                            underline: classes.searchInkbar
                                        }}
                                               fullwidth
                                               placeholder="E-mail"

                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant='raised' color='primary' className={classes.button}>подтвердить
                                        заказ</Button>
                                </Grid>
                                <Grid item xs={12} style={{marginTop: 32}}>
                                    <Typography className={classes.itogo}>Доступные способы оплаты</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <span style={{color: 'rgba(36,36,33,.5)', marginRight: 8}}><FontAwesome
                                        name='cc-mastercard' size='lg'/></span>
                                    <span style={{color: 'rgba(36,36,33,.5)', marginRight: 8}}><FontAwesome
                                        name='cc-visa' size='lg'/></span>
                                    <span style={{color: 'rgba(36,36,33,.5)', marginRight: 8}}><FontAwesome
                                        name='wallet' size='lg'/></span>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </section>
        )
    }
}

CartPageContent.propTypes = {
    // classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CartPageContent);