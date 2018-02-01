import React from 'react'
import Header from "../../../Header";
import Subheader from "../../../Subheader";

export default class SchoolListPage extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Subheader
                    title="Список школ нах"
                />
            </div>
        )
    }
}