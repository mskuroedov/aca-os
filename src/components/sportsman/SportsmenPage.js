import React from 'react';
import SportsmenPageProfile from "./profile/SportsmenPageProfile";
import SportsmenHeader from "./profile/SportsmenHeader";
import SportsmenMenu from "./profile/SportsmenMenu";
import Header from "../../Header";
import Subheader from "../../Subheader";

const SportsmenPage = () => (
    <div>
        <Header />
        <Subheader />
        <SportsmenHeader />
        <SportsmenMenu />
    </div>
);

export default SportsmenPage;
