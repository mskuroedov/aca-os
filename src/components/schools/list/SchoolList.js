import React from 'react';
import {Grid} from "material-ui";
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Select from 'material-ui/Select';
import {MenuItem} from 'material-ui/Menu';
import {FormControl} from 'material-ui/Form';
import TableView from "./table/TableView";
import Icon from "material-ui/es/Icon/Icon";
import IconButton from "material-ui/es/IconButton/IconButton";
import InputAdornment from "material-ui/es/Input/InputAdornment";
import Input from "material-ui/es/Input/Input";
import TilesView from "./tiles/TilesView";
import {schools} from "../../../fixtures/schools";


const styles = theme => ({
    formControl: {
        marginLeft: 'auto'
    },
    iconbtn: {
        marginTop: 5,
        marginLeft: 30
    },
    gray: {
        color: 'rgba(36,36,33,0.3)'
    },
    select: {
        backgroundColor: 'rgba(36,36,33,0.1)',
        paddingLeft: 17,
        paddingBottom: 10,
        paddingRight: 40,
        fontSize: 16,
        color: '#242421',
        '&:after': {
            backgroundColor: '#242421'
        }
    },
    selectIcon: {
        color: '#6D6D6D',
        marginTop: 3
    },
    selectLine: {
        color: 'transparent'
    },
    searchInput: {
        fontSize: 14,
        color: 'rgba(36,36,33,1)',
        marginTop: 11,
        paddingBottom: 5,
        minWidth: 267,
        marginLeft: 'auto',
        '&:before': {
            backgroundColor: 'rgba(0,0,0,0.2)'
        },
        '&:after': {
            backgroundColor: 'rgba(0,0,0,0.2)'
        }
    },
    searchInkbar: {
        color: 'rgba(36,36,33,1)',
        '&:before': {
            backgroundColor: 'rgba(0,0,0,0.2) !important'
        },
        '&:after': {
            backgroundColor: 'rgba(0,0,0,0.2) !important'
        }
    },
    searchInputIcon: {
        color: 'rgba(145,143,138,1)',
        position: 'relative',
        top: 8
    }
});


class SchoolList extends React.Component {

    state = {
        selectSchool: 1,
        tableView: false,
        search: '',
        schools
    };

    changeView = event => {
        this.setState({
            tableView: !(this.state.tableView)
        });
    };

    handleChange = event => {
        this.setState({selectSchool: event.target.value});
    };

    onSearchChange = event => {
        this.setState({
            schools: schools.filter((school) => (
                school.title.toLowerCase().includes(event.target.value.toLowerCase().trim())
            ))
        })
    };

    render() {
        const {classes} = this.props;
        const {schools} = this.state;
        return (
            <div>
                <Grid container style={{paddingLeft: 168, paddingRight: 168, paddingTop: 24}}>
                    <Grid item>
                        <FormControl>
                            <Select
                                value={this.state.selectSchool}
                                onChange={this.handleChange}
                                disableUnderline={true}
                                classes={{
                                    select: classes.select,
                                    icon: classes.selectIcon,
                                }}
                                autoWidth
                            >
                                <MenuItem value={1}>2017</MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>


                    <FormControl className={classes.formControl}>
                        <Input
                            classes={{
                                root: classes.searchInput,
                                inkbar: classes.searchInkbar
                            }}
                            onChange={this.onSearchChange}
                            placeholder="Поиск по названию"
                            endAdornment={
                                <InputAdornment position="end">
                                    <Icon classes={{
                                        root: classes.searchInputIcon
                                    }}>
                                        search
                                    </Icon>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <IconButton className={classes.iconbtn} onClick={this.changeView}>
                        {this.state.tableView ? <Icon>view_module</Icon> : <Icon>view_list</Icon>}
                    </IconButton>

                    <Grid item xs={12} className="paper_w_table">
                        {
                            this.state.tableView ?
                                <TableView schools={schools}/>
                                :
                                <TilesView schools={schools}/>
                        }
                    </Grid>
                </Grid>
            </div>
        )
    }
}

SchoolList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SchoolList);

