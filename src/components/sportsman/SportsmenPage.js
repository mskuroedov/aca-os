import React from 'react';
import SportsmenHeader from "./profile/SportsmenHeader";
import SportsmenMenu from "./profile/SportsmenMenu";
import Header from "../headers/Header";
import Subheader from "../headers/Subheader";

const SportsmenPage = () => (
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
        <SportsmenMenu />
    </div>
);

export default SportsmenPage;
