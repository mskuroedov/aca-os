import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from '@material-ui/core/es/Typography/Typography';
import Paper from '@material-ui/core/es/Paper/Paper';
import Table from '@material-ui/core/es/Table/Table';
import TableHead from '@material-ui/core/es/TableHead/TableHead';
import TableRow from '@material-ui/core/es/TableRow/TableRow';
import TableCell from '@material-ui/core/es/TableCell/TableCell';
import TableBody from '@material-ui/core/es/TableBody/TableBody';
import PaperMenu from '../PaperMenu';
import classnames from 'classnames';

const styles = theme => ({
  title: {
    marginBottom: 11,
    fontSize: 20,
    color: ' rgba(36,36,33,0.6);',
    fontFamily: '"BlissPro",sans-serif',
    fontWeight: 'normal'
  },
  paper: {
    position: 'relative'
  }
});

class TrainCareer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="xs-hidden">
        <Typography className={classes.title}>Карьера</Typography>
        <Paper className={classnames('paper', classes.paper)}>
          <Table className="table no-bottom">
            <TableHead>
              <TableRow>
                <TableCell>Период</TableCell>
                <TableCell>Должность</TableCell>
                <TableCell>Организация</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>2010-2017</TableCell>
                <TableCell>тренер-преподаватель высшей категории</TableCell>
                <TableCell>«Ак Барс»</TableCell>
                <TableCell className="PaperMenuTrigger">
                  <PaperMenu relate />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

TrainCareer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TrainCareer);
