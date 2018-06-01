import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import FontAwesome from 'react-fontawesome';

const styles = theme => ({
    grayText: {
        color: 'rgba(128,128,128,.6)',
        fontWeight: 'bold',
        fontSize: 14
    }

});


class ShareSection extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return (
            <div style={{display: 'flex',alignItems:'center',marginTop:40}}>
                <span className={classes.grayText} style={{marginRight:16}}>Поделиться</span>
                <button style={{border:'1px solid #dae0ec',borderRadius:'20px',minWidth:40,height:40,marginRight:5,backgroundColor:'white',color:'#385899'}}><FontAwesome name='facebook' size='lg'/></button>
                <button style={{border:'1px solid ##dae0e9',borderRadius:'20px',minWidth:40,height:40,marginRight:5,backgroundColor:'white',color:'#42668f'}}><FontAwesome name='vk' size='lg'/></button>
                <button style={{border:'1px solid #fcf1e9',borderRadius:'20px',minWidth:40,height:40,marginRight:5,backgroundColor:'white',color:'#ee8128'}}><FontAwesome name='odnoklassniki' size='lg'/></button>
                <button style={{border:'1px solid #d1ecfc',borderRadius:'20px',minWidth:40,height:40,marginRight:5,backgroundColor:'white',color:'#17a2f3',paddingLeft:10,paddingRight:10}}><FontAwesome name='twitter' size='lg'/> <span className={classes.grayText}>15</span></button>
            </div>
        )
    }
}

ShareSection.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShareSection);