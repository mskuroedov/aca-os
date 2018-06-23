import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import moment from "moment/moment";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';

const styles = theme => ({
    typography: {
        margin: theme.spacing.unit * 2,
    },

});


class CustomEvent extends React.Component {

    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    handleClose = () => {
        this.setState({
            anchorEl: null,
        });
    };
    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;

        // return (
        //     <div>
        //         <strong>{moment(event.start).format('ha')}</strong> {this.props.title}
        //         <span className="pull-right">
        //   {/*{bookedIcon}*/}
        //             {/*<Badge>{event.noOfPax} <i className="fa fa-user"></i></Badge>*/}
        // </span>
        //     </div>
        // );
        return (
            <div onClick={()=> {return true}}>
                <button  onClick={this.handleClick}>
                    {this.props.title}
                </button>
                <Popover
                    open={Boolean(anchorEl)}
                    anchorEl={anchorEl}
                    onClose={this.handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <Typography className={classes.typography}>The content of the Popover.</Typography>
                </Popover>
            </div>
        );
    }
}

CustomEvent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomEvent);