import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import FormControl from "material-ui/es/Form/FormControl";
import Grid from "material-ui/es/Grid/Grid";
import Input from "material-ui/es/Input/Input";
import InputAdornment from "material-ui/es/Input/InputAdornment";
import Icon from "material-ui/es/Icon/Icon";
import Paper from "material-ui/es/Paper/Paper";
import NewsItem from "./NewsItem";


const styles = theme => ({
    mlauto: {
        display: 'flex',
        justifyContent: 'flex-end'
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


class AllMaterials extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;

        return (
            <Grid container
            >
                <Grid item xs={12} className={classes.mlauto}>
                    <FormControl>
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
                </Grid>

                <Grid item xs={6}>
                    <NewsItem/>
                </Grid>
                <Grid item xs={6}>

                </Grid>
            </Grid>
        )
    }
}

AllMaterials.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AllMaterials);

