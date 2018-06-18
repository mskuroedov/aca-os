import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import GroupItem from "./GroupItem";
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import Icon from "material-ui/es/Icon/Icon";
import InputAdornment from "material-ui/es/Input/InputAdornment";
import Input from "material-ui/es/Input/Input";

const styles = theme => ({
    formControl: {
        width: '100%'
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
        top: 0
    }

});


class GroupsPage extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <div>
                <Grid container spacing={16} style={{marginBottom:32}}>
                    <Grid item xs={12} lg={4}>
                        <FormControl className={classes.formControl}>
                            <Input classes={{
                                root: classes.searchInput,
                                underline: classes.searchInkbar
                            }}
                                   placeholder="Поиск по названию..."
                                // onChange={this.onSearchChange}
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
                </Grid>
                <Grid container spacing={16}>
                    <Grid item xs={12} lg={4}>
                        <GroupItem/>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <GroupItem/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

GroupsPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GroupsPage);