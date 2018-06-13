import React from 'react';
import {Grid} from "material-ui";
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import Select from 'material-ui/Select';
import {MenuItem} from 'material-ui/Menu';
import {FormControl} from 'material-ui/Form';
import TableView from "./table/TableView";
import Icon from "material-ui/es/Icon/Icon";
import IconButton from "material-ui/es/IconButton/IconButton";
import InputAdornment from "material-ui/es/Input/InputAdornment";
import Input from "material-ui/es/Input/Input";
import TilesView from "./tiles/TilesView";
import {sportsman, sportsmanGroupFilters, sportsmanPositionFilters} from "../../../../fixtures/sportsman";
import SportsmanListPageModalFilters from "./SportsmanListPageModalFilters";


const styles = theme => ({
    formControl:{
      width:'100%'
    },
    button: {
        fontSize: 13,
        fontWeight: 'bold',
        marginRight: 10,
        height: '100%'
    },
    iconbtn: {
        marginTop: 5,
        marginLeft: 'auto'
    },
    gray: {
        color: 'rgba(36,36,33,0.3)'
    },
    select: {
        backgroundColor: 'rgba(36,36,33,0.1)',
        paddingLeft: 17,
        paddingTop: 16,
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
    },
    selectLine: {
        color: 'transparent'
    },
    searchInput: {
        fontSize: 14,
        color: 'rgba(36,36,33,1)',
        marginTop: 11,
        paddingBottom: 5,
        width:'100%',
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
        top: 0
    }
});


class Sportsman extends React.Component {
    state = {
        tableView: false,
        sportsman,
        sportsmanPositionFilters,
        sportsmanGroupFilters,
        selectedYearFilter: 1,
        selectedChampionshipFilter: 1,
    };
    onViewChange = event => {
        this.setState({
            tableView: !(this.state.tableView)
        });
    };

    onYearFilterChange = event => {
        this.setState({selectedYearFilter: event.target.value});
    };

    onChampionshipFilterChange = event => {
        this.setState({selectedChampionshipFilter: event.target.value});
    };

    onSearchChange = event => {
        this.setState({
            sportsman: sportsman.filter((sportsmen) => (
                sportsmen.firstname.toLowerCase().includes(event.target.value.toLowerCase().trim())
            ))
        })
    };

    render() {
        const {classes} = this.props;
        const {sportsman} = this.state;
        return (
            <div>
                <Grid container spacing={8}>
                    <Grid item className='xs-hidden'>
                        <FormControl>
                            <Select
                                value={this.state.selectedYearFilter}
                                onChange={this.onYearFilterChange}
                                disableUnderline={true}
                                classes={{
                                    select: classes.select,
                                    icon: classes.selectIcon,
                                }}
                                autoWidth
                            >
                                {
                                    this.state.sportsmanGroupFilters.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item className='xs-hidden'>
                        <FormControl>
                            <Select
                                value={this.state.selectedChampionshipFilter}
                                onChange={this.onChampionshipFilterChange}
                                disableUnderline={true}
                                classes={{
                                    select: classes.select,
                                    icon: classes.selectIcon,
                                }}
                                autoWidth
                            >
                                {
                                    this.state.sportsmanPositionFilters.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item className='xs-hidden'>
                        <Button classes={{
                            root: classes.button,
                            label: classes.gray
                        }}>
                            Сбросить
                        </Button>
                    </Grid>
                    <Grid item xs={10} lg={3}>
                        <FormControl className={classes.formControl}>
                            <Input classes={{
                                root: classes.searchInput,
                                underline: classes.searchInkbar
                            }}
                                   placeholder="Поиск по имени..."
                                   onChange={this.onSearchChange}
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
                    </Grid>
                    <Grid item xs={2} className='lg-hidden'>
                        <SportsmanListPageModalFilters/>
                    </Grid>

                    <Grid item xs={12} className="paper_w_table">
                        {
                            this.state.tableView ?
                                <TableView sportsman={sportsman}/>
                                :
                                <TilesView sportsman={sportsman}/>
                        }
                    </Grid>
                </Grid>
            </div>
        )
    }
}

Sportsman.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sportsman);


//<IconButton className={classes.iconbtn} onClick={this.onViewChange}>
  //  {this.state.tableView ? <Icon>view_module</Icon> : <Icon>view_list</Icon>}
//</IconButton>