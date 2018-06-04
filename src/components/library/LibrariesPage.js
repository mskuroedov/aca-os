import React from 'react';
import Header from "../headers/Header";
import Subheader from "../headers/PublicSubheader";
import LibraryHeader from "./Library/LibraryHeader";
import LibraryMenu from "./Library/LibraryMenu";

const LibrariesPage = () => (
    <div>
        <Header/>
        <Subheader
            breadcrumbs={[
                {title: 'Библиотека', link: '#3'},
            ]}
        />
        {/*<LibraryHeader />*/}
        <LibraryMenu />
    </div>
);

export default LibrariesPage;
