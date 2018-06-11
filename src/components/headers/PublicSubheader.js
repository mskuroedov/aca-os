import React from 'react';
import {Grid} from "material-ui";
import Icon from 'material-ui/Icon';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

class Subheader extends React.Component {

    state = {
        selectSchool: 1,
        name: 'hai',
    };

    handleChange = event => {
        this.setState({selectedFilter: event.target.value});
    };

    render() {
        const {title, breadcrumbs, cart} = this.props;
        return (
            <div>
                <Grid container spacing={0} className="subheader ">
                    <Grid item xs={12} >
                        {
                            breadcrumbs && breadcrumbs.map((val, i) => (
                                    breadcrumbs.length - 1 !== i ?
                                        <span key={val.link} className="path">
                                           <Link to={val.link}>{val.title}</Link>
                                           <Icon>keyboard_arrow_right</Icon>
                                        </span>
                                        :
                                        <span key={val.link} className="path">
                                            {/*{React.createElement('br')}*/}
                                            <Link to={val.link}>{val.title}</Link>
                                        </span>
                                )
                            )
                        }
                        {
                            title &&
                            <span className="path big">
                                {/*{React.createElement('br')}*/}
                                {title}
                            </span>
                        }
                    </Grid>
                    {/*<Grid item xs={12} lg={6} style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end'}}>*/}
                        {/*<Icon style={{marginLeft: 24}}>account_circle</Icon>*/}
                        {/*{cart && <Link to='/cart' style={{color:'white',lineHeight:.7}} className='cart'><span className='cart-items'>2</span><Icon style={{marginLeft: 24}}>shopping_cart</Icon></Link>}*/}
                    {/*</Grid>*/}
                </Grid>
            </div>
        );
    }
}

Subheader.propTypes = {
    title: PropTypes.string,
    breadcrumbs: PropTypes.arrayOf(PropTypes.object),
};
export default Subheader;