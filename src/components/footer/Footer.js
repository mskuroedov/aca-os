import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import Typography from "@material-ui/core/es/Typography/Typography";
import FontAwesome from 'react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "react-router-dom/es/Link";

const styles = theme => ({});


class Footer extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <section className='main-section footer'>
                <Grid container spacing={16} justify={'space-between'}>
                    <Grid item xs={12} lg={4} className={'footer-brand-container'}>
                        <Typography className='footer-brand'>ИАС «Академия хоккея Ак Барс»</Typography>
                        <Grid container spacing={16} className={'icon-container'}>
                            <Grid item>
                                <Link to={'#'} className={'icon-link'}>
                                    <FontAwesome name={'facebook-square'}></FontAwesome>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to={'#'} className={'icon-link'}>
                                    <FontAwesome name={'vk'}></FontAwesome>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to={'#'} className={'icon-link'}>
                                    <FontAwesome name={'instagram'}></FontAwesome>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} lg={3} className={'menu-container'}>
                        <Grid container spacing={0}>
                            <Grid item xs={12} className={'link-container'}>
                                <Link to={'#'} className={'link'}>Центр помощи</Link>
                            </Grid>
                            <Grid item xs={12} className={'link-container'}>
                                <Link to={'#'} className={'link'}>Руководство пользователя</Link>
                            </Grid>
                            <Grid item xs={12} className={'link-container'}>
                                <Link to={'#'} className={'link'}>Справочники</Link>
                            </Grid>
                            <Grid item xs={12} className={'link-container'}>
                                <Link to={'#'} className={'link'}>Контакты</Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} lg={3} className={'menu-container'}>
                        <Grid container spacing={0}>
                            <Grid item xs={12} className={'link-container'}>
                                <Link to={'#'} className={'link'}>Юридическая информация</Link>
                            </Grid>
                            <Grid item xs={12} className={'link-container'}>
                                <Link to={'#'} className={'link'}>Условия пользования</Link>
                            </Grid>
                            <Grid item xs={12} className={'link-container'}>
                                <Link to={'#'} className={'link'}>Политика конфиденциальности</Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} lg>
                        <Typography className='app-title'>Приложение</Typography>
                        <Grid container spacing={16}>
                            <Grid item xs={12}>
                                <Link to={'#'} className={'icon-link'}>
                                    <FontAwesome name={'apple'} style={{marginRight:8}}></FontAwesome>
                                    <span className={'link'}>Apple Store</span>
                                </Link>
                            </Grid>
                            <Grid item xs={12}>
                                <Link to={'#'} className={'icon-link'}>
                                    <FontAwesomeIcon icon={['fab', 'google-play']} style={{marginRight:8,fontSize:18}}/>
                                    <span className={'link'}>Google Play</span>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        )
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);