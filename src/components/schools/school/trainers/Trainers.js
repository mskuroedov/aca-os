import React from 'react';
import {Grid} from "material-ui";
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import InputAdornment from "material-ui/es/Input/InputAdornment";
import Icon from "material-ui/es/Icon/Icon";
import Input from "material-ui/es/Input/Input";
import FormControl from "material-ui/es/Form/FormControl";
import Trainer from "./Trainer";
import Typography from "material-ui/es/Typography/Typography";


const styles = theme => ({
    formControl:{
        marginTop:'-5px',
        float:'right'
    },
    button: {
        margin: theme.spacing.unit,
        fontSize: 13,
        marginRight: 20,
        fontWeight: 'bold',
        fontFamily: 'BlissPro',
    },
    gray: {
        color: 'rgba(36,36,33,0.3)'
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
    title: {
        marginBottom: 11,
        fontSize: 20,
        color: ' rgba(36,36,33,0.6);',
        fontFamily: '"BlissPro",sans-serif',
        fontWeight: 'normal'
    },
    searchInputIcon: {
        color: 'rgba(145,143,138,1)',
        position: 'relative',
        top: 8
    }
});



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
        this.setState({selectSchool: event.target.value});
    };

    render() {
        const {classes} = this.props;
        return (
            <div>
                <Grid container>
                    <Grid item xs={7}>
                        <Typography className={classes.title}>Тренеры</Typography>
                        <Trainer />
                    </Grid>
                    <Grid item xs={5}>
                        <FormControl className={classes.formControl}>
                            <Input classes={{
                                root: classes.searchInput,
                                inkbar: classes.searchInkbar
                            }}
                                   placeholder="Поиск по имени..."
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
            </div>
        )
    }
}

Trainers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Trainers);