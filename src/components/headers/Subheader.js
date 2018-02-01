import React from 'react';
import {connect} from "react-redux";
import PrivateSubheader from "./PrivateSubheader";
import PublicSubheader from "./PublicSubheader";


const Subheader = (props) => (
    props.isAuthenticated ? <PrivateSubheader {...props}/> : <PublicSubheader {...props}/>
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.user
});

export default connect(mapStateToProps)(Subheader);
