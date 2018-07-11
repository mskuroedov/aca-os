import React from "react";
import PropTypes from 'prop-types';
import {Avatar, TableCell, TableRow} from "material-ui";
import {Link} from "react-router-dom";
import {withStyles} from "material-ui/styles/index";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import MoreVertIcon from 'material-ui-icons/MoreVert';

const styles = theme => ({
    link:{
        borderBottom:'1px solid rgba(36,36,33,0.2)',
        color:'rgba(36,36,33,1)',
        '&:hover':{
            color:'rgba(0,118,94,1)'
        }
    }
});

class TeamTableItem extends React.Component {
    render () {
        const {classes} = this.props;
        const {place, team, games, wins,loses,poB,zsh,psh,o} = this.props;
        return (
            <TableRow>
                <TableCell numeric style={{maxWidth:30,paddingRight:16}}>
                    {place}
                </TableCell>
                <TableCell style={{width:350,paddingLeft:24}}>
                    <Link to="/team/1" className={classes.link}>{team}</Link>
                </TableCell>
                <TableCell numeric>{games}</TableCell>
                <TableCell numeric>{wins}</TableCell>
                <TableCell numeric>{loses}</TableCell>
                <TableCell numeric>{poB}</TableCell>
                <TableCell numeric>{zsh}</TableCell>
                <TableCell numeric>{psh}</TableCell>
                <TableCell numeric>{o}</TableCell>
                <TableCell numeric>{o}</TableCell>
                <TableCell numeric>{o}</TableCell>
                {/*<TableCell style={{width:10,padding:0}}>*/}
                    {/*<IconButton aria-label="Delete">*/}
                        {/*<MoreVertIcon/>*/}
                    {/*</IconButton>*/}
                {/*</TableCell>*/}
            </TableRow>
        )
    }
}

TeamTableItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeamTableItem);