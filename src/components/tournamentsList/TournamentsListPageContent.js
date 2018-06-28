import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Grid from "@material-ui/core/es/Grid/Grid";
import TournamentsTable from "./TournamentsTable";
import Paper from "@material-ui/core/es/Paper/Paper";
import {seasonFilter} from "../../fixtures/tournaments";
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import Select from "material-ui/es/Select/Select";
import MenuItem from "material-ui/es/Menu/MenuItem";
import InputAdornment from "material-ui/es/Input/InputAdornment";
import Input from "material-ui/es/Input/Input";
import Icon from "material-ui/es/Icon/Icon";


const styles = theme => ({
    formControl: {
        width: '100%'
    },
    select: {
        backgroundColor: 'rgba(36,36,33,0.1)',
        paddingLeft: 17,
        paddingBottom: 10,
        paddingTop: 16,
        paddingRight: 40,
        fontSize: 16,
        color: '#242421',
        '&:after': {
            backgroundColor: '#242421'
        }
    },
    selectIcon: {
        color: '#6D6D6D',
        marginTop: 0
    },
    selectLine: {
        color: 'transparent'
    },
    searchInput: {
        fontSize: 14,
        color: 'rgba(36,36,33,1)',

        marginTop: 11,
        paddingBottom: 5,
        maxWidth: 290,
        width: '100%',
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
        fontSize: 16,
        top: 3,
    }

});


class TournamentsListPageContent extends React.Component {
    constructor(props) {
        super(props);
    }
    state={
        seasonFilter,
        selectedSeasonFilter: 1,
    };

    onSeasonFilterChange = event => {
        this.setState({selectedSeasonFilter: event.target.value});
    };

    render() {
        const {classes} = this.props;
        return (
            <div >
                <Grid container spacing={32} className={'main-section'}>
                    <Grid item xs={12}>
                        <Grid container spacing={32}>
                            <Grid item>
                                <FormControl>
                                    <Select
                                        value={this.state.selectedSeasonFilter}
                                        onChange={this.onSeasonFilterChange}
                                        disableUnderline={true}
                                        classes={{
                                            select: classes.select,
                                            icon: classes.selectIcon,
                                        }}
                                        autoWidth
                                    >
                                        {
                                            this.state.seasonFilter.map((item) => (
                                                <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <FormControl className={classes.formControl}>
                                    <Input classes={{
                                        root: classes.searchInput,
                                        underline: classes.searchInkbar
                                    }}
                                           endAdornment={
                                               <InputAdornment position="end"><Icon classes={{
                                                   root: classes.searchInputIcon
                                               }}>
                                                   search
                                               </Icon></InputAdornment>
                                           }
                                           placeholder="Поиск по имени..."

                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className='paper'>
                            <TournamentsTable/>

                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

TournamentsListPageContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TournamentsListPageContent);