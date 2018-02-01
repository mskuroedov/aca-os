import React from 'react';
import {connect} from "react-redux";
import PublicHeader from "./components/headers/PublicHeader";
import PrivateHeader from "./components/headers/PrivateHeader";

const Header = (props) => (
    props.isAuthenticated ? <PrivateHeader/> : <PublicHeader/>
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.user
});

export default connect(mapStateToProps)(Header);