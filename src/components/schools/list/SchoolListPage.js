import React from 'react'
import Header from "../../headers/Header";
import Subheader from "../../headers/Subheader";
import SchoolList from "./SchoolList";
import Footer from "../../footer/Footer";

export default class SchoolListPage extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Subheader
                    title="Школы"
                />
                <SchoolList/>
                <Footer/>
            </div>
        )
    }
}