import React from 'react';
import {connect} from "react-redux";
import PublicHeader from "./PublicHeader";
import PrivateHeader from "./PrivateHeader";

const Header = (props) => (
    props.isAuthenticated ? <PrivateHeader/> : <PublicHeader/>
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.user
});

export default connect(mapStateToProps)(Header);