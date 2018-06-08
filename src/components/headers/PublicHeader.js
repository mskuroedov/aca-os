import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui-icons/Search';
import Menu, {MenuItem} from 'material-ui/Menu';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import Input from 'material-ui/Input';
import teal from 'material-ui/colors/teal';
import {NavLink} from "react-router-dom";


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
});
const options = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede'
];

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
        const {classes} = this.props;
        const {auth, anchorEl} = this.state;
        const open = Boolean(anchorEl);

        return (
            <div>
                <AppBar position="static">
                    <Toolbar className="header">
                        <IconButton color="inherit" aria-label="Search">
                            <SearchIcon/>
                        </IconButton>
                        <Input id="name-simple" value={this.state.name} onChange={this.handleChange}
                               className="header__input" placeholder="Поиск"/>

                        <NavLink activeClassName="active" to="/" exact={true}
                                 style={{marginLeft: 'auto'}}>Портал</NavLink>
                        <NavLink activeClassName="active" to="/news">Новости</NavLink>
                        <NavLink activeClassName="active" to="/schools">Школы</NavLink>
                        {/*<NavLink activeClassName="active" to="/sportsman/1">Спортсмены</NavLink>*/}
                        <NavLink activeClassName="active" to="/calendar">Календарь</NavLink>
                        <NavLink activeClassName="active" to="/stats">Статистика</NavLink>
                        <NavLink activeClassName="active" to="/libraries">Библиотека</NavLink>
                        <NavLink activeClassName="active" to="/users_info">Пользователям</NavLink>
                        <div>
                            <IconButton
                                aria-label="More"
                                aria-owns={anchorEl ? 'long-menu' : null}
                                aria-haspopup="true"
                                color="inherit"
                                onClick={this.handleClick}
                            >
                                <MoreVertIcon/>
                            </IconButton>
                            <Menu
                                id="long-menu"
                                anchorEl={this.state.anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={this.handleClose}
                                PaperProps={{
                                    style: {
                                        maxHeight: ITEM_HEIGHT * 4.5,
                                        width: 200,
                                    },
                                }}
                            >
                                {options.map(option => (
                                    <MenuItem key={option} selected={option === 'Pyxis'} onClick={this.handleClose}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Menu>
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

export default withStyles(styles)(PublicHeader);