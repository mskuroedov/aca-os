import React from 'react';
import {Grid} from "material-ui";
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
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
import styles from '../../../styles'


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
                <Grid container spacing={8} alignItems={'center'}>
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
                        <FormControl className={classes.formControl} style={{marginBottom:0}}>
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