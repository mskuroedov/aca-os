import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';

export const PublicRoute = ({
                                isAuthenticated,
                                component: Component,
                                ...rest
                            }) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>Page allowed only for no authenticated users</div>
        ) : (
            <Component {...props} />
        )
    )}/>
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.user
});

export default connect(mapStateToProps)(PublicRoute);
