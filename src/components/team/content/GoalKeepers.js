import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import classNames from 'classnames';
import Paper from "material-ui/es/Paper/Paper";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import TableHead from "@material-ui/core/es/TableHead/TableHead";
import Table from "@material-ui/core/es/Table/Table";
import Grid from "@material-ui/core/es/Grid/Grid";
import Typography from "@material-ui/core/es/Typography/Typography";
import TableBody from "@material-ui/core/es/TableBody/TableBody";
import FormControl from "material-ui/es/Form/FormControl";
import Switch from "material-ui/es/Switch/Switch";
import styles from '../../styles'


class GoalKeepers extends React.Component {
    constructor(props) {
        super(props);
    }

    state={
        checked:false
    }

    render() {
        const {classes} = this.props;
        return (
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <Grid container alignItems={'center'}>
                        <Grid item>
                            <Typography className={classes.title}>Вратари</Typography>

                        </Grid>
                        <Grid item style={{marginLeft:'auto'}}>
                            <FormControl>

                                <Switch
                                    color='primary'
                                    classes={{
                                        icon:classes.icon,
                                        iconChecked:classes.iconChecked
                                    }}
                                    checked={this.state.checked}
                                    onChange={()=>{
                                        this.setState({
                                            checked:!this.state.checked
                                        })
                                    }}

                                />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <span className={classes.switchName}
                                  style={{color: '#005945'}}>Плей-офф</span>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Paper className='paper'>
                        <Table className='table no-bottom'>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{paddingRight:25}}>ФИ</TableCell>
                                    <TableCell numeric>№</TableCell>
                                    <TableCell numeric>Возраст</TableCell>
                                    <TableCell numeric>Рост</TableCell>
                                    <TableCell numeric>Вес</TableCell>
                                    <TableCell>Хват</TableCell>
                                    <TableCell numeric>Игры</TableCell>
                                    <TableCell numeric>Бр.</TableCell>
                                    <TableCell numeric>Сп.</TableCell>
                                    <TableCell numeric>% сп.</TableCell>
                                    <TableCell numeric>Ср. г./и.</TableCell>
                                    <TableCell numeric>Ш.</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody >
                                <TableRow>
                                    <TableCell style={{paddingRight:25}}>Константинопольский Константин</TableCell>
                                    <TableCell numeric>97</TableCell>
                                    <TableCell numeric>24</TableCell>
                                    <TableCell numeric>182</TableCell>
                                    <TableCell numeric>78</TableCell>
                                    <TableCell>Правый</TableCell>
                                    <TableCell numeric>75</TableCell>
                                    <TableCell numeric>185</TableCell>
                                    <TableCell numeric>84</TableCell>
                                    <TableCell numeric>65</TableCell>
                                    <TableCell numeric>2</TableCell>
                                    <TableCell numeric>0</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{paddingRight:25}}>Константинопольский Константин</TableCell>
                                    <TableCell numeric>97</TableCell>
                                    <TableCell numeric>24</TableCell>
                                    <TableCell numeric>182</TableCell>
                                    <TableCell numeric>78</TableCell>
                                    <TableCell>Правый</TableCell>
                                    <TableCell numeric>75</TableCell>
                                    <TableCell numeric>185</TableCell>
                                    <TableCell numeric>84</TableCell>
                                    <TableCell numeric>65</TableCell>
                                    <TableCell numeric>2</TableCell>
                                    <TableCell numeric>0</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{paddingRight:25}}>Константинопольский Константин</TableCell>
                                    <TableCell numeric>97</TableCell>
                                    <TableCell numeric>24</TableCell>
                                    <TableCell numeric>182</TableCell>
                                    <TableCell numeric>78</TableCell>
                                    <TableCell>Правый</TableCell>
                                    <TableCell numeric>75</TableCell>
                                    <TableCell numeric>185</TableCell>
                                    <TableCell numeric>84</TableCell>
                                    <TableCell numeric>65</TableCell>
                                    <TableCell numeric>2</TableCell>
                                    <TableCell numeric>0</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{paddingRight:25}}>Константинопольский Константин</TableCell>
                                    <TableCell numeric>97</TableCell>
                                    <TableCell numeric>24</TableCell>
                                    <TableCell numeric>182</TableCell>
                                    <TableCell numeric>78</TableCell>
                                    <TableCell>Правый</TableCell>
                                    <TableCell numeric>75</TableCell>
                                    <TableCell numeric>185</TableCell>
                                    <TableCell numeric>84</TableCell>
                                    <TableCell numeric>65</TableCell>
                                    <TableCell numeric>2</TableCell>
                                    <TableCell numeric>0</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            </Grid>

        )
    }
}

GoalKeepers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GoalKeepers);