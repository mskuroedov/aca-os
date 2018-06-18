import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import ShoppingBasketIcon from 'material-ui-icons/ShoppingCart';
import MailIcon from 'material-ui-icons/Mail';
import MenuIcon from 'material-ui-icons/Menu';
import NotificationsIcon from 'material-ui-icons/Notifications';
import KeyboardArrowDownIcon from 'material-ui-icons/KeyboardArrowDown';
import Menu, {MenuItem} from 'material-ui/Menu';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import Input from 'material-ui/Input';
import teal from 'material-ui/colors/teal';
import {NavLink} from "react-router-dom";
import {routes} from "../../routers/AppRouter";
import Link from "react-router-dom/es/Link";
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import Button from "@material-ui/core/es/Button/Button";
import Popover from "material-ui/es/Popover/Popover";
import {login, logout} from "../../actions/auth";
import {connect} from "react-redux";


const styles = theme => ({
    root: {
        width: '100%',
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
    },
    inputLabelFocused: {
        color: teal[500],
    },
    inputInkbar: {
        '&:after': {
            backgroundColor: teal[500],
        },
    },
    textFieldRoot: {
        padding: 0,
        'label + &': {
            marginTop: theme.spacing.unit * 3,
        },
    },
    avatar: {
        width: 32,
        height: 32,
        marginLeft: 8,
        marginRight: 4
    },
    textFieldInput: {
        borderRadius: 4,
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 12px',
        width: 'calc(100% - 24px)',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
    textFieldFormLabel: {
        fontSize: 18,
    },
    lkBtn: {
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        fontSize: 14,
        textTransform: 'capitalize'
    },
    lkpopover: {
        marginTop: 40,
    },
    lkpaper: {
        width: 150,
        borderRadius: 5,
        boxShadow: 'none',
        border: '1px solid rgba(0,0,0,.2)',
    },
    menuItem: {
        padding: '8px 8px',
        fontSize: 14,
        color: 'rgba(36,36,33)',
        '&:first-of-type': {
            borderBottom: '1px solid rgba(36,36,33,.1)'
        },
        '&:last-of-type': {
            borderTop: '1px solid rgba(36,36,33,.1)'
        }
    }
});
const options = [
    'ДЮСШ №34',
    'СДЮШОР №129',
];
const optionsMenu = [
    {
        id: 1,
        link: '/',
        name: 'Портал'
    }, {
        id: 2,
        link: '/news',
        name: 'Новости'
    }, {
        id: 3,
        link: '/schools',
        name: 'Школы'
    }, {
        id: 4,
        link: '/tournaments',
        name: 'Турниры'
    }, {
        id: 5,
        link: '/calendar',
        name: 'Календарь'
    }, {
        id: 6,
        link: '/stats',
        name: 'Статистика'
    }, {
        id: 7,
        link: '/libraries',
        name: 'Библиотека'
    }, {
        id: 8,
        link: '/users_info/0',
        name: 'Пользователям'
    }];

const ITEM_HEIGHT = 48;

class PublicHeader extends React.Component {
    state = {
        auth: true,
        anchorEl: null,
        anchorMenuEl: null,
        open: false,
        openMenu: false
    };
    handleClick = event => {
        this.setState({
            open: true,
            anchorEl: event.currentTarget
        });
    };

    handleClose = () => {
        this.setState({
            open: false,
        });
    };
    handleMenuClick = event => {
        this.setState({
            openMenu: true,
            anchorMenuEl: event.currentTarget
        });
    };

    handleMenuClose = () => {
        this.setState({
            openMenu: false,
        });
    };

    render() {
        const {classes} = this.props;
        const {auth, anchorEl, open, openMenu, anchorMenuEl} = this.state;

        return (
            <div>
                <AppBar position="static">
                    <Toolbar className="header">
                        <NavLink activeClassName="" to="/" exact={true} className='xs-hidden brand'>ИАС «АКАДЕМИЯ
                            ХОККЕЯ АК БАРС»</NavLink>
                        <div className='btn-group'
                             style={{display: 'flex', alignItems: 'center'}}>
                            <Link
                                to='/cart' style={{lineHeight: 0.6, width: 48, textAlign: 'center'}}>
                                <ShoppingBasketIcon/>
                            </Link>
                            <IconButton
                                aria-label="More"
                                aria-owns={anchorEl ? 'long-menu' : null}
                                aria-haspopup="true"
                                color="inherit"
                                onClick={this.handleClick}
                            >
                                <MailIcon/>
                            </IconButton>
                            <IconButton
                                aria-label="More"
                                aria-owns={anchorEl ? 'long-menu' : null}
                                aria-haspopup="true"
                                color="inherit"
                                onClick={this.handleClick}
                            >
                                <NotificationsIcon/>
                            </IconButton>

                        </div>

                        <div>
                            <Button onClick={this.handleClick}
                                    className={classes.lkBtn}><span className='xs-hidden'>{this.props.username}</span>
                                <Avatar
                                    alt="Adelle Charles"
                                    src="https://jira.hyperledger.org/secure/useravatar?size=xsmall&avatarId=10346"
                                    classes={{
                                        root: classes.avatar
                                    }}
                                />
                                <KeyboardArrowDownIcon style={{fontSize: 14, marginTop: 3}}/>
                            </Button>
                            <Popover
                                open={open}
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                onClose={this.handleClose}
                                className={classes.lkpopover}
                                classes={{
                                    paper: classes.lkpaper
                                }}
                            >

                                <MenuItem key={9998} onClick={this.handleClose} classes={{
                                    root: classes.menuItem
                                }}>
                                    Мой профиль
                                </MenuItem>
                                {options.map(option => (
                                    <MenuItem key={option} onClick={this.handleClose} classes={{
                                        root: classes.menuItem
                                    }}>
                                        {option}
                                    </MenuItem>
                                ))}
                                <MenuItem key={9999} onClick={() => {
                                    this.handleClose();
                                    this.props.logout()
                                }} classes={{
                                    root: classes.menuItem
                                }}>
                                    Выйти
                                </MenuItem>

                            </Popover>
                        </div>
                        <div className='lg-hidden ml-auto'>
                            <IconButton
                                aria-label="More"
                                aria-owns={anchorMenuEl ? 'long-menu' : null}
                                aria-haspopup="true"
                                color="inherit"
                                onClick={this.handleMenuClick}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Popover
                                open={openMenu}
                                anchorEl={anchorMenuEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                onClose={this.handleMenuClose}
                                className={classes.lkpopover}


                            >


                                {optionsMenu.map(option => (
                                    <MenuItem key={option.id} onClick={this.handleMenuClose}>
                                        <Link to={option.link} style={{
                                            color: '#242421',
                                            fontSize: 15,
                                            width: '100%'
                                        }}>{option.name}</Link>
                                    </MenuItem>
                                ))}
                            </Popover>

                        </div>

                    </Toolbar>
                    <Toolbar className='header xs-hidden'>
                        <div className='header__nav '>
                            <NavLink activeClassName="active" to="/" exact={true}>Рабочий стол</NavLink>
                            <NavLink activeClassName="active" to="/news">Новости</NavLink>
                            <NavLink activeClassName="active" to={routes.schoolsPage()}>Школы</NavLink>
                            <NavLink activeClassName="active" to="/sportsman/1">Спортсмены</NavLink>
                            <NavLink activeClassName="active" to="/tournaments">Турниры</NavLink>
                            <NavLink activeClassName="active" to="/calendar">Календарь</NavLink>
                            <NavLink activeClassName="active" to="#">Тренировочные планы</NavLink>
                            <NavLink activeClassName="active" to="/libraries">Библиотека</NavLink>
                            <NavLink activeClassName="active" to="/stats">Статистика</NavLink>
                            <NavLink activeClassName="active" to="#">Документы</NavLink>
                            <NavLink activeClassName="active" to="#">Обучение</NavLink>

                        </div>
                    </Toolbar>
                </AppBar>
            </div>
    );
    }
    }

    PublicHeader.propTypes = {
        classes: PropTypes.object.isRequired,
    };

    const mapStateToProps = (state) => ({
        username: state.auth.user.username
    })

    const mapDispatchToProps = (dispatch) => ({
        logout: () => dispatch(logout())
    });

    export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PublicHeader));