import React from 'react';
import Header from "../headers/Header";
import Subheader from "../headers/PublicSubheader";
import LibraryHeader from "./Library/LibraryHeader";
import LibraryMenu from "./Library/LibraryMenu";
import Footer from "../footer/Footer";

const LibrariesPage = () => (
    <div>
        <Header/>
        <Subheader
            breadcrumbs={[
                {title: 'Библиотека', link: '/libraries'},
            ]}
        />
        {/*<LibraryHeader />*/}
        <LibraryMenu />
        <Footer/>
    </div>
);

export default LibrariesPage;
