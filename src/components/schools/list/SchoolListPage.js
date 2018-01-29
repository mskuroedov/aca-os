import React from 'react'
import Subheader from "../../../Subheader";
import Header from "../../../Header";
import SchoolHeader from "./SchoolHeader";

export default class SchoolListPage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Subheader />
                <SchoolHeader />

            </div>
        )
    }
}