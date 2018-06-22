import React from 'react'
import Header from "../../headers/Header";
import Subheader from "../../headers/Subheader";
import SchoolHeader from "./SchoolHeader";
import SchoolPageContent from "./SchoolPageContent";
import Footer from "../../footer/Footer";

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
                <Footer/>
            </div>
        )
    }
}