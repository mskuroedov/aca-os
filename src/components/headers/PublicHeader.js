import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import ShoppingBasketIcon from 'material-ui-icons/ShoppingCart';
import Menu, {MenuItem} from 'material-ui/Menu';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import MenuIcon from 'material-ui-icons/Menu';
import Input from 'material-ui/Input';
import teal from 'material-ui/colors/teal';
import {NavLink} from "react-router-dom";
import Link from "react-router-dom/es/Link";
import Button from "material-ui/es/Button/Button";
import {connect} from "react-redux";
import {login} from "../../actions/auth";
import LoginModal from "./LoginModal";

const options = [{
    id:1,
        link: '/',
        name: 'Портал'
    }, {
    id:2,
        link: '/news',
        name: 'Новости'
    }, {
    id:3,
        link: '/schools',
        name: 'Школы'
    }, {
    id:4,
        link: '/tournaments',
        name: 'Турниры'
    }, {
    id:5,
        link: '/calendar',
        name: 'Календарь'
    }, {
    id:6,
        link: '/stats',
        name: 'Статистика'
    }, {
    id:7,
        link: '/libraries',
        name: 'Библиотека'
    }, {
    id:8,
        link: '/users_info/0',
        name: 'Пользователям'
    }]
;

const ITEM_HEIGHT = 48;

class PublicHeader extends React.Component {
    state = {
        auth: true,
        anchorEl: null,
    };
    handleClick = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };

    render() {
        // const {classes} = this.props;
        const {auth, anchorEl} = this.state;
        const open = Boolean(anchorEl);

        return (
            <div>
                <AppBar position="static">
                    <Toolbar className="header">
                        <NavLink activeClassName="" className='xs-hidden brand' to="/" exact={true}>ИАС «АКАДЕМИЯ
                            ХОККЕЯ АК БАРС»</NavLink>
                        <div className='xs-hidden ml-auto'>
                            {/*<NavLink activeClassName="active" to="/" exact={true}*/}
                            {/*style={{marginLeft: 'auto'}}>Портал</NavLink>*/}
                            {/*<NavLink activeClassName="active" to="/news">Новости</NavLink>*/}
                            {/*<NavLink activeClassName="active" to="/schools">Школы</NavLink>*/}
                            {/*/!*<NavLink activeClassName="active" to="/sportsman/1">Спортсмены</NavLink>*!/*/}
                            {/*<NavLink activeClassName="active" to="/calendar">Календарь</NavLink>*/}
                            {/*<NavLink activeClassName="active" to="/stats">Статистика</NavLink>*/}
                            {/*<NavLink activeClassName="active" to="/libraries">Библиотека</NavLink>*/}
                            {/*<NavLink activeClassName="active" to="/users_info/0">Пользователям</NavLink>*/}
                        </div>
                        <div className='' style={{display: 'flex', alignItems: 'center'}}>
                            <Link
                                to='/cart' style={{lineHeight:0.6,width:48,textAlign:'center'}}
                            >
                                <ShoppingBasketIcon/>
                            </Link>
                            <LoginModal/>
                        </div>
                        <div className='lg-hidden ml-auto'>
                            <IconButton
                                aria-label="More"
                                aria-owns={anchorEl ? 'long-menu' : null}
                                aria-haspopup="true"
                                color="inherit"
                                onClick={this.handleClick}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Menu
                                id="long-menu"
                                anchorEl={this.state.anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={this.handleClose}
                                PaperProps={{
                                    style: {
                                        width: 200,
                                    },
                                }}
                            >
                                {options.map(option => (
                                    <MenuItem key={option.id}  onClick={this.handleClose}>
                                        <Link to={option.link} style={{color:'#242421',fontSize:15,width:'100%'}}>{option.name}</Link>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </div>
                    </Toolbar>
                    <Toolbar className="header xs-hidden">

                        <div className='header__nav header__nav_small '>
                            <NavLink activeClassName="active" to="/" exact={true}>Портал</NavLink>
                            <NavLink activeClassName="active" to="/news">Новости</NavLink>
                            <NavLink activeClassName="active" to="/schools">Школы</NavLink>
                            {/*<NavLink activeClassName="active" to="/sportsman/1">Спортсмены</NavLink>*/}
                            <NavLink activeClassName="active" to="/tournaments">Турниры</NavLink>
                            <NavLink activeClassName="active" to="/calendar">Календарь</NavLink>
                            <NavLink activeClassName="active" to="/libraries">Библиотека</NavLink>
                            <NavLink activeClassName="active" to="/stats">Статистика</NavLink>
                            <NavLink activeClassName="active" to="/users_info/0">Пользователям</NavLink>
                        </div>

                        <div className='lg-hidden ml-auto'>

                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}



const mapDispatchToProps = (dispatch) => ({
    login: () => dispatch(login('Maxim', '1'))
});

export default connect(undefined, mapDispatchToProps)(PublicHeader);