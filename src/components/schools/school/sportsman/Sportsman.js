import React from 'react';
import {Grid} from "material-ui";
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import Select from 'material-ui/Select';
import {MenuItem} from 'material-ui/Menu';
import {FormControl, FormHelperText} from 'material-ui/Form';
import SportsmanTable from "./SportsmanTable";


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        fontSize: 13,
        marginLeft: 'auto',
        marginRight: 20,
        fontFamily: 'BlissPro',
    },
    select: {
        backgroundColor:'rgba(36,36,33,0.1)',
        paddingLeft: 17,
        paddingTop:13,
        paddingBottom:10,
        paddingRight:40,
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
    }
});


class Perfomance extends React.Component {
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
                <Grid container
                >
                    <Grid item >

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
                                <MenuItem value={1}>
                                    2017
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
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
                                <MenuItem value={1}>
                                    Чемпионат России
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Button raised color="primary" className={this.props.classes.button}>
                        редактировать информацию
                    </Button>

                    <Grid item xs={12} className="paper_w_table">
                        <SportsmanTable />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

Perfomance.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Perfomance);

