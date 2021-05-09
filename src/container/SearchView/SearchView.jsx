import React from 'react';
import Searchbar from "../../components/searchbar/searchbar";
import "./SearchView.css";

function SearchView() {

    return (
        <div className="search-container">
            <h1 className="title">Phrase d'accroche présentant la plateforme</h1>
            <Searchbar/>
        </div>
    );
}

export default SearchView;