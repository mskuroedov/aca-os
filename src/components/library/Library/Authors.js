import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import Icon from "@material-ui/core/es/Icon/Icon";
import AuthorTabs from "./AuthorTabs";
import FormControl from "material-ui/es/Form/FormControl";
import Input from "material-ui/es/Input/Input";
import InputAdornment from "material-ui/es/Input/InputAdornment";
import AuthorGrid from "./AuthorGrid";

const styles = theme => ({
    mlauto: {
        display: 'flex'
    },
    searchInput: {
        fontSize: 14,
        color: 'rgba(36,36,33,1)',
        marginTop: 11,
        paddingBottom: 5,
        minWidth: 267,
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
        top: 3
    },

});


class Authors extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <section>
                <Grid container spacing={16}>
                    <Grid item xs={12} className={classes.mlauto}>
                        <FormControl>
                            <Input
                                classes={{
                                    root: classes.searchInput,
                                    underline: classes.searchInkbar
                                }}
                                onChange={this.onSearchChange}
                                placeholder="Поиск по имени"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <Icon classes={{
                                            root: classes.searchInputIcon
                                        }} style={{fontSize:18}}>
                                            search
                                        </Icon>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <AuthorTabs/>
                         <AuthorGrid/>
                    </Grid>
                </Grid>
            </section>
        )
    }
}

Authors.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Authors);