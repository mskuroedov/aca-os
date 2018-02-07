import React from 'react';
import SportsmenHeader from "./SportsmenHeader";
import SportsmenPageContent from "./SportsmenPageContent";
import Header from "../headers/Header";
import Subheader from "../headers/Subheader";

const SportsmenPage = (props) => (
    <div>
        <Header/>
        <Subheader
            breadcrumbs={[
                {title: 'Школы', link: '#1'},
                {title: 'Спортивная школа №43', link: '#2'},
                {title: 'Группа мальчиков 2010 г. р.', link: '#3'},
            ]}
        />
        <SportsmenHeader />
        <SportsmenPageContent {...props.match.params} />
    </div>
);

export default SportsmenPage;
