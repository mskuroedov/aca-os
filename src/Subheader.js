import React from 'react';
import {Grid} from "material-ui";
import {withStyles} from 'material-ui/styles';
import Select from 'material-ui/Select';
import {MenuItem} from 'material-ui/Menu';
import Icon from 'material-ui/Icon';
import {FormControl, FormHelperText} from 'material-ui/Form';
import PropTypes from 'prop-types';
import Input, {InputLabel} from 'material-ui/Input';
import {Link} from "react-router-dom";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        minWidth: 120,
    },
    selectEmpty: {},
    select: {
        paddingLeft: 5,
        fontSize: 16,
        color: '#fff',
        '&:after': {
            backgroundColor: '#fff'
        }
    },
    selectIcon: {
        color: '#fff',
        marginTop: 3
    },
    selectLine: {
        color: 'transparent'
    }
});

class Subheader extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        selectSchool: 1,
        name: 'hai',
    };

    handleChange = event => {
        this.setState({selectSchool: event.target.value});
    };

    render() {
        const {classes} = this.props;
        return (
            <div>
                <Grid container spacing={0} className="subheader">
                    <Grid item xs={6}>
                        {
                            this.props.breadcrumbs && this.props.breadcrumbs.map((val) => (
                                    <span key={val.link} className="path">
                                       <Link to={val.link}>{val.title}</Link>
                                       <Icon>keyboard_arrow_right</Icon>
                                    </span>
                                )
                            )
                        }
                        <br/>
                        <span className="path">
                        {this.props.title}
                    </span>
                    </Grid>
                    <Grid item xs={6} style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end'}}>

                        <FormControl>
                            <Select
                                value={this.state.selectSchool}
                                onChange={this.handleChange}
                                disableUnderline={true}
                                classes={{
                                    select: classes.select,
                                    icon: classes.selectIcon,
                                }}
                            >
                                <MenuItem value={1}>
                                    ДЮСШ №43
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <Icon style={{marginLeft: 41}}>email</Icon>
                        <Icon style={{marginLeft: 24}}>notifications</Icon>
                        <Icon style={{marginLeft: 24}}>account_circle</Icon>

                    </Grid>
                </Grid>
            </div>
        );
    }
}

Subheader.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    breadcrumbs: PropTypes.arrayOf(PropTypes.object),
};
export default withStyles(styles)(Subheader);