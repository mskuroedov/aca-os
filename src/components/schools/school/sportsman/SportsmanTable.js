import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from "material-ui/es/Paper/Paper";
import Table from "material-ui/es/Table/Table";
import TableRow from "material-ui/es/Table/TableRow";
import TableCell from "material-ui/es/Table/TableCell";
import Link from "react-router-dom/es/Link";
import Avatar from "material-ui/es/Avatar/Avatar";
import {TableBody, TableHead} from "material-ui";


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
    avatar: {
        width: 36,
        height: 36,
        marginLeft:16
    },
    row: {
        paddingTop: 18,
        paddingBottom: 18
    },
    link:{
        borderBottom:'1px solid rgba(36,36,33,0.2)',
        color:'rgba(36,36,33,1)',
        '&:hover':{
            color:'rgba(0,118,94,1)'
        }
    }
});


class SportsmanTable extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        selectSchool: 1,
        name: 'hai',
    };

    handleChange = event => {
        this.setState({selectSchool: event.target.value});
    };

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
                        <TableRow>
                            <TableCell >
                                <Avatar
                                    alt="Adelle Charles"
                                    src="https://jira.hyperledger.org/secure/useravatar?size=xsmall&avatarId=10346"
                                    classes={{
                                        root: classes.avatar
                                    }}
                                />
                            </TableCell>
                            <TableCell >
                                <Link to="/sportsman/1" className={classes.link}>Красильников Сергей Васильевич</Link>
                            </TableCell>
                            <TableCell ><Link to="#" className={classes.link}>Группа 2010 г. р.</Link></TableCell>
                            <TableCell numeric >2010</TableCell>
                            <TableCell numeric >12.03.2012</TableCell>
                            <TableCell >Вратарь</TableCell>
                            <TableCell numeric >42</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell >
                                <Avatar
                                    alt="Adelle Charles"
                                    src="https://jira.hyperledger.org/secure/useravatar?size=xsmall&avatarId=10346"
                                    classes={{
                                        root: classes.avatar
                                    }}
                                />
                            </TableCell>
                            <TableCell >
                                <Link to="/sportsman/1" className={classes.link}>Красильников Сергей Васильевич</Link>
                            </TableCell>
                            <TableCell ><Link to="#" className={classes.link}>Группа 2010 г. р.</Link></TableCell>
                            <TableCell numeric >2010</TableCell>
                            <TableCell numeric >12.03.2012</TableCell>
                            <TableCell >Вратарь</TableCell>
                            <TableCell numeric >42</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

SportsmanTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SportsmanTable);

