import React from 'react';
import ProjectList from "../container/ProjectList/ProjectList";
import AddProject from "../components/addProject/AddProject";
import {Switch, Route, Link} from "react-router-dom";

function Routes(props) {
    return (
        <Switch>
            <Route path="/projects"><ProjectList /></Route>
            <Route path="/login"><div>Connexion</div></Route>
            <Route path="/legal"><div>Mentions Légales</div></Route>
            <Route path="/protection-data"><div>Protections des données</div></Route>
            <Route path="/contact"><div>Nous contacter</div></Route>
            <Route path="/add-project"><AddProject creation={true} /></Route>
            <Route path="/update-project"><AddProject creation={false} /></Route>
            <Route path="/"><div>Home</div></Route>
        </Switch>
    );
}

export default Routes;