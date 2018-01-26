import React from 'react';
import {Grid} from "material-ui";
import Select from 'material-ui/Select';
import {MenuItem} from 'material-ui/Menu';
import Icon from 'material-ui/Icon';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        minWidth: 120,
    },
    selectEmpty: {

    },
});

class Subheader extends React.Component {
    state = {
        age: '',
        name: 'hai',
    };

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        const { classes } = this.props;
        return (
            <div
                 // style={{paddingLeft: 170,paddingRight:170}}
            >
            <Grid container spacing={0} className="subheader">
                <Grid item xs={6}>
                   <span className="path">
                       <a href="#">Школы</a>
                       <Icon >keyboard_arrow_right</Icon>
                   </span>
                    <span className="path">
                        <a href="#">Спортивная школа №43</a>
                        <Icon >keyboard_arrow_right</Icon>
                    </span><br/>
                    <span className="path">
                        Группа мальчиков 2010 г. р.
                    </span>
                </Grid>
                <Grid item xs={6}  style={{display:'flex',alignItems:'flex-end',justifyContent:'flex-end'}}>
                    {/*<Select*/}
                        {/*value={this.state.age}*/}
                        {/*onChange={this.handleChange}*/}
                        {/*inputProps={{*/}
                            {/*name: 'age',*/}
                            {/*id: 'age-simple',*/}
                        {/*}}*/}
                        {/*className="custom-select"*/}
                    {/*>*/}
                        {/*<MenuItem value="" >*/}
                            {/*<em>1</em>*/}
                        {/*</MenuItem>*/}
                        {/*<MenuItem value={10}>Ten</MenuItem>*/}
                        {/*<MenuItem value={20}>Twenty</MenuItem>*/}
                        {/*<MenuItem value={30}>Thirty</MenuItem>*/}
                    {/*</Select>*/}
                    <FormControl >
                        {/*<InputLabel htmlFor="age-simple">Age</InputLabel>*/}
                        <Select
                            value={this.state.age}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'age',
                                id: 'age-simple',
                            }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <Icon  style={{marginLeft:41}}>email</Icon>
                    <Icon  style={{marginLeft:24}}>notifications</Icon>
                    <Icon  style={{marginLeft:24}}>account_circle</Icon>

                </Grid>
            </Grid>
            </div>
        );
    }
}

export default Subheader;