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


class TableLeadsComponent extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <Table className="table  no-bottom">
                <TableHead>
                    <TableRow>
                        <TableCell >Игрок</TableCell>
                        <TableCell >Команда</TableCell>
                        <TableCell numeric>Игры</TableCell>
                        <TableCell numeric>Голы</TableCell>
                        <TableCell numeric>Передачи</TableCell>
                        <TableCell numeric>Очки</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell >
                            Константинопольский Константин
                        </TableCell>
                        <TableCell>
                            Торпедо Нижний Новгород
                        </TableCell>
                        <TableCell numeric>
                            53
                        </TableCell>
                        <TableCell numeric>
                            31
                        </TableCell>
                        <TableCell numeric>
                            32
                        </TableCell>
                        <TableCell numeric>
                            63
                        </TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell >
                            Константинопольский Константин
                        </TableCell>
                        <TableCell>
                            Торпедо Нижний Новгород
                        </TableCell>
                        <TableCell numeric>
                            53
                        </TableCell>
                        <TableCell numeric>
                            31
                        </TableCell>
                        <TableCell numeric>
                            32
                        </TableCell>
                        <TableCell numeric>
                            63
                        </TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell >
                            Константинопольский Константин
                        </TableCell>
                        <TableCell>
                            Торпедо Нижний Новгород
                        </TableCell>
                        <TableCell numeric>
                            53
                        </TableCell>
                        <TableCell numeric>
                            31
                        </TableCell>
                        <TableCell numeric>
                            32
                        </TableCell>
                        <TableCell numeric>
                            63
                        </TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell >
                            Константинопольский Константин
                        </TableCell>
                        <TableCell>
                            Торпедо Нижний Новгород
                        </TableCell>
                        <TableCell numeric>
                            53
                        </TableCell>
                        <TableCell numeric>
                            31
                        </TableCell>
                        <TableCell numeric>
                            32
                        </TableCell>
                        <TableCell numeric>
                            63
                        </TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell >
                            Константинопольский Константин
                        </TableCell>
                        <TableCell>
                            Торпедо Нижний Новгород
                        </TableCell>
                        <TableCell numeric>
                            53
                        </TableCell>
                        <TableCell numeric>
                            31
                        </TableCell>
                        <TableCell numeric>
                            32
                        </TableCell>
                        <TableCell numeric>
                            63
                        </TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell >
                            Константинопольский Константин
                        </TableCell>
                        <TableCell>
                            Торпедо Нижний Новгород
                        </TableCell>
                        <TableCell numeric>
                            53
                        </TableCell>
                        <TableCell numeric>
                            31
                        </TableCell>
                        <TableCell numeric>
                            32
                        </TableCell>
                        <TableCell numeric>
                            63
                        </TableCell>

                    </TableRow>
                </TableBody>
            </Table>
        )
    }
}

TableLeadsComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableLeadsComponent);