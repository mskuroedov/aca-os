import React from 'react';
import Header from "./headers/Header";
import Subheader from "./headers/Subheader";

const IndexPage = () => (
    <div>
        <Header/>
        <Subheader
            title="Главная"
        />
        <p>Index Page</p>
    </div>
);

export default IndexPage;
