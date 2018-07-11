import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Typography from "@material-ui/core/es/Typography/Typography";
import Table from "@material-ui/core/es/Table/Table";
import Paper from "@material-ui/core/es/Paper/Paper";
import TableHead from "@material-ui/core/es/TableHead/TableHead";
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import TableBody from "@material-ui/core/es/TableBody/TableBody";
import styles from '../../../../styles'


class Experience extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="xs-hidden">
        <Typography className={classes.title}>
          Воспитанники вне «Академии хоккея Ак Барс»
        </Typography>
        <Paper className={classnames('paper', classes.paper)}>
          <Table className="table no-bottom">
            <TableHead>
              <TableRow>
                <TableCell>ФИО</TableCell>
                <TableCell>Лига</TableCell>
                <TableCell numeric>Разряд</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Аллаяров Руслан Садуллаевич</TableCell>
                <TableCell>Детская хоккейная лига</TableCell>
                <TableCell numeric>3</TableCell>
                <TableCell className="PaperMenuTrigger">
                  <PaperMenu relate />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Байдин Никита Константинович</TableCell>
                <TableCell>Юношеская хоккейная лига</TableCell>
                <TableCell numeric>1</TableCell>{' '}
                <TableCell className="PaperMenuTrigger">
                  <PaperMenu relate />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Манкевич Павел Владимирович</TableCell>
                <TableCell>Юношеская хоккейная лига</TableCell>
                <TableCell numeric>1</TableCell>{' '}
                <TableCell className="PaperMenuTrigger">
                  <PaperMenu relate />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Попов Юрий Анатольевич</TableCell>
                <TableCell>Детская хоккейная лига</TableCell>
                <TableCell numeric>2</TableCell>{' '}
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

Experience.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Experience);
