import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from "material-ui/es/Paper/Paper";
import Table from "material-ui/es/Table/Table";
import TableRow from "material-ui/es/Table/TableRow";
import TableCell from "material-ui/es/Table/TableCell";
import {TableBody, TableHead} from "material-ui";
import TableItem from "./TableItem";


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        fontSize: 13,
        marginLeft: 'auto',
        marginRight: 20,
        fontFamily: 'BlissPro',
    },
    select: {
        backgroundColor: 'rgba(36,36,33,0.1)',
        paddingLeft: 17,
        paddingTop: 13,
        paddingBottom: 10,
        paddingRight: 40,
        fontSize: 16,
        color: '#242421',
        '&:after': {
            backgroundColor: '#242421'
        }
    },
    selectIcon: {
        color: '#6D6D6D',
        marginTop: 3
    },
    selectLine: {
        color: 'transparent'
    },
    row: {
        paddingTop: 18,
        paddingBottom: 18
    }
});


class TableView extends React.Component {

    render() {
        const {classes} = this.props;
        return (

            <Paper className="paper">
                <Table className="table_sportsman">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>ФИО</TableCell>
                            <TableCell>Группа</TableCell>
                            <TableCell numeric>Год набора</TableCell>
                            <TableCell numeric>Дата рождения</TableCell>
                            <TableCell>Амплуа</TableCell>
                            <TableCell numeric>Рейтинг</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.props.sportsman.map((item) => {
                                return <TableItem key={item.id} {...item} />
                            })
                        }
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

TableView.propTypes = {
    classes: PropTypes.object.isRequired,
    sportsman: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(TableView);

