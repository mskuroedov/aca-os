import React from 'react';
import { Grid } from 'material-ui';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Paper from 'material-ui/es/Paper/Paper';
import Table from 'material-ui/es/Table/Table';
import TableHead from '../../../../node_modules/material-ui/Table/TableHead';
import TableRow from 'material-ui/es/Table/TableRow';
import TableCell from 'material-ui/es/Table/TableCell';
import TableBody from '../../../../node_modules/material-ui/Table/TableBody';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import Icon from 'material-ui/Icon';
import {FormControl, FormHelperText} from 'material-ui/Form';
import styles from '../../styles'

class Perfomance extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    selectedFilter: 1,
    name: 'hai'
  };

  handleChange = event => {
    this.setState({ selectedFilter: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={8}>
          <Grid item>
            <FormControl>
              <Select
                value={this.state.selectedFilter}
                onChange={this.handleChange}
                disableUnderline={true}
                classes={{
                  select: classes.select,
                  icon: classes.selectIcon
                }}
                autoWidth
              >
                <MenuItem value={1}>2017</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl>
              <Select
                value={this.state.selectedFilter}
                onChange={this.handleChange}
                disableUnderline={true}
                classes={{
                  select: classes.select,
                  icon: classes.selectIcon
                }}
                autoWidth
              >
                <MenuItem value={1}>Чемпионат России</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <Button
              classes={{
                root: 'Button',
                label: 'Gray'
              }}
            >
              Сбросить
            </Button>
          </Grid>
          <TableTitle title="Статистика" />
          <Grid item xs={12} className="paper_w_table">
            <Paper className="paper">
              <Table className="table">
                <TableHead>
                  <TableRow>
                    <TableCell numeric>Игры</TableCell>
                    <TableCell numeric>Выигрыши</TableCell>
                    <TableCell numeric>Голы</TableCell>
                    <TableCell numeric>Голов в ср. за игру</TableCell>
                    <TableCell numeric>Передачи</TableCell>
                    <TableCell numeric>Очки</TableCell>
                    <TableCell numeric>Очков в ср. за игру</TableCell>
                    <TableCell numeric>Голы поб.</TableCell>
                    <TableCell numeric>Поб. буллиты</TableCell>
                    <TableCell numeric>Штраф. мин.</TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell numeric>34</TableCell>
                    <TableCell numeric>34</TableCell>
                    <TableCell numeric>2</TableCell>
                    <TableCell numeric>2</TableCell>
                    <TableCell numeric>11</TableCell>
                    <TableCell numeric>13</TableCell>
                    <TableCell numeric>0.0</TableCell>
                    <TableCell numeric>0</TableCell>
                    <TableCell numeric>0</TableCell>
                    <TableCell numeric>14</TableCell>
                    <TableCell className="PaperMenuTrigger">
                      <PaperMenu relate />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Perfomance.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Perfomance);
