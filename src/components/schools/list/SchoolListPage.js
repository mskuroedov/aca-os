import React from 'react'
import Header from "../../headers/Header";
import Subheader from "../../headers/Subheader";
import SchoolList from "./SchoolList";

export default class SchoolListPage extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Subheader
                    title="Школы"
                />
                <SchoolList/>
            </div>
        )
    }
}