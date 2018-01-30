import React from 'react'
import SchoolHeader from "../school/common/SchoolHeader";
import Header from "../../../Header";
import Subheader from "../../../Subheader";
import SchoolMenu from "../school/SchoolMenu";

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
                <SchoolMenu />
            </div>
        )
    }
}