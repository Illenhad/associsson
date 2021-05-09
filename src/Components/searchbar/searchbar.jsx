import React, {Fragment} from 'react';
import "./searchbar.css";

function Searchbar() {
    return (
        <Fragment>
            <form className="searchbar">
                <input type="text" className="search-input"
                       placeholder="Asso, Lieux, Technos..."/>
                <button className="search-btn">Recherche</button>
            </form>
        </Fragment>
    );
}

export default Searchbar;