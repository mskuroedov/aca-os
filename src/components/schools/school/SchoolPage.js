import React from 'react'
import SchoolHeader from "./common/SchoolHeader";
import SchoolMenu from "./common/SchoolMenu";

export default class SchoolPage extends React.Component {
    render() {
        return (
            <div>
                <SchoolHeader />
                <SchoolMenu />
            </div>
        )
    }
}