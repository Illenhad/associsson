import React from 'react';
import {Switch, Route} from "react-router-dom";
import ProjectList from "../container/ProjectList/ProjectList";
import SearchView from "../container/SearchView/SearchView";

function Routes() {
    return (
        <Switch>
            <Route path="/projects"><ProjectList/></Route>
            <Route path="/login">
                <div>Connexion</div>
            </Route>
            <Route path="/legal">
                <div>Mentions Légales</div>
            </Route>
            <Route path="/protection-data">
                <div>Protections des données</div>
            </Route>
            <Route path="/contact">
                <div>Nous contacter</div>
            </Route>
            <Route path="/"><SearchView/></Route>
        </Switch>
    );
}

export default Routes;