import React from 'react'
import Header from "../../../Header";
import Subheader from "../../../Subheader";
import SchoolHeader from "./common/SchoolHeader";
import SchoolMenu from "./SchoolMenu";

export default class SchoolListPage extends React.Component {
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
                <SchoolHeader />
                <SchoolMenu {...this.props.match.params} />
            </div>
        )
    }
}