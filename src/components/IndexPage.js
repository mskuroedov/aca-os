import React from 'react';
import Header from "../Header";
import Subheader from "../Subheader";

const IndexPage = () => (
    <div>
        <Header/>
        <Subheader
            title="Группа мальчиков 2010 г. р."
            breadcrumbs={[
                {title: 'Школы', link: '#1'},
                {title: 'Спортивная школа №43', link: '#2'},
            ]}
        />
        <p>Index Page</p>
    </div>
);

export default IndexPage;
