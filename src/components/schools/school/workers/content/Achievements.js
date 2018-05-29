import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Typography from "@material-ui/core/es/Typography/Typography";
import Paper from "@material-ui/core/es/Paper/Paper";
import Table from "@material-ui/core/es/Table/Table";
import TableHead from "@material-ui/core/es/TableHead/TableHead";
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import TableBody from "@material-ui/core/es/TableBody/TableBody";

const styles = theme => ({
    title: {
        marginBottom: 11,
        fontSize: 20,
        color: ' rgba(36,36,33,0.6);',
        fontFamily: '"BlissPro",sans-serif',
        fontWeight: 'normal'
    },

});


class Achievements extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <div>
                <Typography className={classes.title}>Награды и достижения</Typography>
                <Paper className="paper">
                    <Table className="table no-bottom">
                        <TableHead>
                            <TableRow>
                                <TableCell >Дата</TableCell>
                                <TableCell >Соревнования</TableCell>
                                <TableCell >Достижение</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell >21.07.1974</TableCell>
                                <TableCell >Чемпионат СССР</TableCell>
                                <TableCell >3 место</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell >08.02.1982</TableCell>
                                <TableCell >Кубок СССР</TableCell>
                                <TableCell >лучший бомбардир</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell >13.12.1994</TableCell>
                                <TableCell >Чемпионат СССР</TableCell>
                                <TableCell >1 место</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>

            </div>

        )
    }
}

Achievements.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Achievements);