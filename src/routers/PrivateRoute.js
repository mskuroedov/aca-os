import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';

export const PrivateRoute = ({
                                 isAuthenticated,
                                 component: Component,
                                 ...rest
                             }) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
                <Component {...props} />
            </div>
        ) : (
            <div>
                <p>no auth</p>
            </div>
            // <Redirect to="/"/>
        )
    )}/>
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.user
});

export default connect(mapStateToProps)(PrivateRoute);
