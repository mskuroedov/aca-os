import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Table from "@material-ui/core/es/Table/Table";
import TableHead from "@material-ui/core/es/TableHead/TableHead";
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import TableBody from "@material-ui/core/es/TableBody/TableBody";



class TableChampComponent extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <Table className="table  no-bottom">
                <TableHead>
                    <TableRow>
                        <TableCell numeric style={{width:80}}>Место</TableCell>
                        <TableCell >Команда</TableCell>
                        <TableCell numeric>И</TableCell>
                        <TableCell numeric>В</TableCell>
                        <TableCell numeric>П</TableCell>
                        <TableCell numeric>По/б</TableCell>
                        <TableCell numeric>Зш</TableCell>
                        <TableCell numeric>Пш</TableCell>
                        <TableCell numeric>О</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell numeric>
                            1
                        </TableCell>
                        <TableCell>
                            Барс
                        </TableCell>
                        <TableCell numeric>
                            51
                        </TableCell>
                        <TableCell numeric>
                            33
                        </TableCell>
                        <TableCell numeric>
                            12
                        </TableCell>
                        <TableCell numeric>
                            6
                        </TableCell>
                        <TableCell numeric>
                            153
                        </TableCell>
                        <TableCell numeric>
                            115
                        </TableCell>
                        <TableCell numeric>
                            72
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell numeric>
                            1
                        </TableCell>
                        <TableCell>
                            Барс
                        </TableCell>
                        <TableCell numeric>
                            51
                        </TableCell>
                        <TableCell numeric>
                            33
                        </TableCell>
                        <TableCell numeric>
                            12
                        </TableCell>
                        <TableCell numeric>
                            6
                        </TableCell>
                        <TableCell numeric>
                            153
                        </TableCell>
                        <TableCell numeric>
                            115
                        </TableCell>
                        <TableCell numeric>
                            72
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell numeric>
                            1
                        </TableCell>
                        <TableCell>
                            Барс
                        </TableCell>
                        <TableCell numeric>
                            51
                        </TableCell>
                        <TableCell numeric>
                            33
                        </TableCell>
                        <TableCell numeric>
                            12
                        </TableCell>
                        <TableCell numeric>
                            6
                        </TableCell>
                        <TableCell numeric>
                            153
                        </TableCell>
                        <TableCell numeric>
                            115
                        </TableCell>
                        <TableCell numeric>
                            72
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell numeric>
                            1
                        </TableCell>
                        <TableCell>
                            Барс
                        </TableCell>
                        <TableCell numeric>
                            51
                        </TableCell>
                        <TableCell numeric>
                            33
                        </TableCell>
                        <TableCell numeric>
                            12
                        </TableCell>
                        <TableCell numeric>
                            6
                        </TableCell>
                        <TableCell numeric>
                            153
                        </TableCell>
                        <TableCell numeric>
                            115
                        </TableCell>
                        <TableCell numeric>
                            72
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell numeric>
                            1
                        </TableCell>
                        <TableCell>
                            Барс
                        </TableCell>
                        <TableCell numeric>
                            51
                        </TableCell>
                        <TableCell numeric>
                            33
                        </TableCell>
                        <TableCell numeric>
                            12
                        </TableCell>
                        <TableCell numeric>
                            6
                        </TableCell>
                        <TableCell numeric>
                            153
                        </TableCell>
                        <TableCell numeric>
                            115
                        </TableCell>
                        <TableCell numeric>
                            72
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell numeric>
                            1
                        </TableCell>
                        <TableCell>
                            Барс
                        </TableCell>
                        <TableCell numeric>
                            51
                        </TableCell>
                        <TableCell numeric>
                            33
                        </TableCell>
                        <TableCell numeric>
                            12
                        </TableCell>
                        <TableCell numeric>
                            6
                        </TableCell>
                        <TableCell numeric>
                            153
                        </TableCell>
                        <TableCell numeric>
                            115
                        </TableCell>
                        <TableCell numeric>
                            72
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell numeric>
                            1
                        </TableCell>
                        <TableCell>
                            Барс
                        </TableCell>
                        <TableCell numeric>
                            51
                        </TableCell>
                        <TableCell numeric>
                            33
                        </TableCell>
                        <TableCell numeric>
                            12
                        </TableCell>
                        <TableCell numeric>
                            6
                        </TableCell>
                        <TableCell numeric>
                            153
                        </TableCell>
                        <TableCell numeric>
                            115
                        </TableCell>
                        <TableCell numeric>
                            72
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell numeric>
                            1
                        </TableCell>
                        <TableCell>
                            Барс
                        </TableCell>
                        <TableCell numeric>
                            51
                        </TableCell>
                        <TableCell numeric>
                            33
                        </TableCell>
                        <TableCell numeric>
                            12
                        </TableCell>
                        <TableCell numeric>
                            6
                        </TableCell>
                        <TableCell numeric>
                            153
                        </TableCell>
                        <TableCell numeric>
                            115
                        </TableCell>
                        <TableCell numeric>
                            72
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        )
    }
}

TableChampComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default TableChampComponent;