import React from 'react'
import Header from "../../../Header";
import Subheader from "../../../Subheader";
import SchoolHeader from "../school/common/SchoolHeader";
import SchoolMenu from "../school/common/SchoolMenu";

export default class SchoolListPage extends React.Component {
    render() {
        return (
            <div>
                <SchoolHeader />
                <SchoolMenu />
            </div>
        )
    }
}