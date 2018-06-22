import React from 'react';
import Header from "./headers/Header";
import Subheader from "./headers/Subheader";
import Portal from "./Portal";
import Footer from "./footer/Footer";

const IndexPage = () => (
    <div>
        <Header/>
        <Subheader
            title="Портал"
        />
        <Portal/>
        <Footer/>
    </div>
);

export default IndexPage;


