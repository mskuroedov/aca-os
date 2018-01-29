import React from 'react'
import Header from "../../../Header";
import Subheader from "../../../Subheader";
import SchoolHeader from "./common/SchoolHeader";

export default class SchoolPage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Subheader />
                <SchoolHeader />
                <SchoolMenu />
            </div>
        )
    }
}