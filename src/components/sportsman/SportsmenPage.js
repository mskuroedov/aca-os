import React from 'react';
import SportsmenHeader from "./profile/SportsmenHeader";
import SportsmenMenu from "./profile/SportsmenMenu";
import Header from "../../Header";
import Subheader from "../../Subheader";

const SportsmenPage = () => (
    <div>
        <Header/>
        <Subheader
            title="Группа мальчиков 2010 г. р."
            breadcrumbs={[
                {title: 'Школы', link: '#1'},
                {title: 'Спортивная школа №43', link: '#2'},
            ]}
        />
        <SportsmenHeader />
        <SportsmenMenu />
    </div>
);

export default SportsmenPage;