import React from 'react'
import SchoolHeader from "../school/common/SchoolHeader";
import SchoolMenu from "../school/common/SchoolMenu";
import Header from "../../../Header";
import Subheader from "../../../Subheader";

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