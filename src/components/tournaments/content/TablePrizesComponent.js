import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Table from "@material-ui/core/es/Table/Table";
import TableHead from "@material-ui/core/es/TableHead/TableHead";
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import TableBody from "@material-ui/core/es/TableBody/TableBody";

const styles = theme => ({});


class TablePrizesComponent extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <Table className="table  no-bottom">
                <TableHead>
                    <TableRow>
                        <TableCell >Название</TableCell>
                        <TableCell >Описание</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell >
                           Самый ценный игрок
                        </TableCell>
                        <TableCell>
                            Самому ценному игроку регулрного чемпионата по мнению журналистов
                        </TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell >
                           Самый ценный игрок
                        </TableCell>
                        <TableCell>
                            Самому ценному игроку регулрного чемпионата по мнению журналистов
                        </TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell >
                           Самый ценный игрок
                        </TableCell>
                        <TableCell>
                            Самому ценному игроку регулрного чемпионата по мнению журналистов
                        </TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell >
                           Самый ценный игрок
                        </TableCell>
                        <TableCell>
                            Самому ценному игроку регулрного чемпионата по мнению журналистов
                        </TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell >
                           Самый ценный игрок
                        </TableCell>
                        <TableCell>
                            Самому ценному игроку регулрного чемпионата по мнению журналистов
                        </TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell >
                           Самый ценный игрок
                        </TableCell>
                        <TableCell>
                            Самому ценному игроку регулрного чемпионата по мнению журналистов
                        </TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell >
                           Самый ценный игрок
                        </TableCell>
                        <TableCell>
                            Самому ценному игроку регулрного чемпионата по мнению журналистов
                        </TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell >
                           Самый ценный игрок
                        </TableCell>
                        <TableCell>
                            Самому ценному игроку регулрного чемпионата по мнению журналистов
                        </TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell >
                           Самый ценный игрок
                        </TableCell>
                        <TableCell>
                            Самому ценному игроку регулрного чемпионата по мнению журналистов
                        </TableCell>

                    </TableRow>

                </TableBody>
            </Table>
        )
    }
}

TablePrizesComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TablePrizesComponent);