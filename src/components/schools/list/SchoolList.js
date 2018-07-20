import React from 'react';
import {Grid} from "material-ui";
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import Select from 'material-ui/Select';
import {MenuItem} from 'material-ui/Menu';
import {FormControl} from 'material-ui/Form';
import TableView from "./table/TableView";
import Icon from "material-ui/es/Icon/Icon";
import IconButton from "material-ui/es/IconButton/IconButton";
import InputAdornment from "material-ui/es/Input/InputAdornment";
import Input from "material-ui/es/Input/Input";
import TilesView from "./tiles/TilesView";
import {schools, schoolFilters, schoolCityFilters} from "../../../fixtures/schools";
import Button from "@material-ui/core/es/Button/Button";
import SchoolFiltersModal from "./SchoolFiltersModal";
import classNames from 'classnames'
import styles from '../../styles'



class SchoolList extends React.Component {

    state = {
        tableView: false,
        schools,
        schoolFilters,
        schoolCityFilters,
        selectedFilter: schoolFilters[0].id,
    };

    onViewChange = event => {
        this.setState({
            tableView: !(this.state.tableView)
        });
    };

    onFilterChange = event => {
        this.setState({selectedFilter: event.target.value});
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
            <div className='main-section'>
                <Grid container spacing={16} className='xs-hidden'>
                    <Grid item>
                        <FormControl>
                            <Select
                                value={this.state.selectedFilter}
                                onChange={this.onFilterChange}
                                disableUnderline={true}
                                classes={{
                                    select: classes.select,
                                    icon: classes.selectIcon,
                                }}
                                autoWidth
                            >
                                {
                                    this.state.schoolCityFilters.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl>
                            <Select
                                value={this.state.selectedFilter}
                                onChange={this.onFilterChange}
                                disableUnderline={true}
                                classes={{
                                    select: classes.select,
                                    icon: classes.selectIcon,
                                }}
                                autoWidth
                            >
                                {
                                    this.state.schoolFilters.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <Button color='default' classes={{
                            root: classes.button,
                            label: classes.gray
                        }} style={{        marginRight: 10,
                        }}>
                            Сбросить
                        </Button>
                    </Grid>
                    <Grid item>
                        <FormControl className={classNames(classes.formControl,classes.mlAuto)}>
                            <Input
                                classes={{
                                    root: classes.searchInput,
                                    underline: classes.searchInkbar
                                }}
                                onChange={this.onSearchChange}
                                placeholder="Поиск по названию"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <Icon classes={{
                                            root: classes.searchInputIcon
                                        }}>
                                        </Icon>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container spacing={16} className='lg-hidden'>

                    <Grid item xs={10}>
                        <FormControl className={classes.formControl}>
                            <Input
                                classes={{
                                    root: classes.searchInput,
                                    underline: classes.searchInkbar
                                }}
                                onChange={this.onSearchChange}
                                placeholder="Поиск по названию"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <Icon classes={{
                                            root: classes.searchInputIcon
                                        }}>
                                        </Icon>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={2}>
                        <SchoolFiltersModal/>
                    </Grid>
                </Grid>

                <Grid container spacing={16}>
                    <Grid item xs={12} className="paper_w_table">
                        <TilesView schools={schools}/>

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

// {
//     this.state.tableView ?
//         <TableView schools={schools}/>
//         :
//         <TilesView schools={schools}/>
// }

//<IconButton className={classes.iconbtn} onClick={this.onViewChange}>
  //  {this.state.tableView ? <Icon>view_module</Icon> : <Icon>view_list</Icon>}
//</IconButton>