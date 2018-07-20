import React from 'react';
import {Grid} from "material-ui";
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import InputAdornment from "material-ui/es/Input/InputAdornment";
import Icon from "material-ui/es/Icon/Icon";
import Input from "material-ui/es/Input/Input";
import FormControl from "material-ui/es/Form/FormControl";
import Trainer from "./Trainer";
import Typography from "material-ui/es/Typography/Typography";
import styles from '../../../styles'


class Trainers extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        selectSchool: 1,
        name: 'hai',
        tableView: true,
    };
    changeView = event => {
        this.setState({
            tableView: !(this.state.tableView)
        });
    };
    handleChange = event => {
        this.setState({selectedFilter: event.target.value});
    };

    render() {
        const {classes} = this.props;
        return (
            <div>
                <Grid container spacing={16}>

                    <Grid item xs={12} lg={4}>
                        <FormControl className={classes.formControl} style={{marginBottom:0}}>
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
                    <div style={{width:'100%'}}></div>
                    <Grid item xs={12} lg={7}>
                        <Typography className={classes.title}>Тренеры</Typography>
                        <Trainer/>
                        <Trainer/>
                        <Trainer/>
                        <Trainer/>
                        <Trainer/>
                        <Trainer/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

Trainers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Trainers);