import React from 'react';
import Header from "./headers/Header";
import Subheader from "./headers/Subheader";
import Portal from "./Portal";

const IndexPage = () => (
    <div>
        <Header/>
        <Subheader
            title="Портал"
        />
        <Portal/>
    </div>
);

export default IndexPage;


