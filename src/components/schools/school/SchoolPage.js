import React from 'react'
import Header from "../../../Header";
import Subheader from "../../../Subheader";
import SchoolHeader from "./common/SchoolHeader";
import SchoolPageContent from "./SchoolPageContent";

export default class SchoolPage extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Subheader
                    title="Школы"
                />
                <SchoolHeader/>
                <SchoolPageContent {...this.props.match.params} />
            </div>
        )
    }
}