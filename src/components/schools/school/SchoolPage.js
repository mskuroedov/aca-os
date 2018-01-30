import React from 'react'
import SchoolHeader from "./common/SchoolHeader";
import SchoolMenu from "./SchoolMenu";
import Header from "../../../Header";
import Subheader from "../../../Subheader";

export default class SchoolPage extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Subheader
                    title="Группа мальчиков 2010 г. р."
                    breadcrumbs={[
                        {title: 'Школы', link: '#1'},
                        {title: 'Спортивная школа №43', link: '#2'},
                    ]}
                />
                <SchoolHeader/>
                <SchoolMenu/>
            </div>
        )
    }
}