import React from 'react'
import Header from "../../../Header";
import Subheader from "../../../Subheader";
import SchoolList from "./SchoolList";

export default class SchoolListPage extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Subheader
                    title="ШКОЛЫ"
                />
                <SchoolList />
            </div>
        )
    }
}