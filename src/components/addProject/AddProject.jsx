import React, { Component } from 'react'

export default class AddProject extends Component {

    state = {
        name: '',
        category: '',
        description: '',
        items: []
    }

    onChange = (event) => {
        this.setState ({
            [event.target.name] : event.target.value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            name: '',
            category: '',
            description: '',
            items: [...this.state.items, {
                name: this.state.name,
                category: this.state.category,
                description: this.state.description
                }
            ]
        })
    }

    createProject = () => {
        // TODO -> appeler le webservice qui enregistre le projet en base

        //TEST
        /* return this.state.items.map((item, index) => {
            return(
                <div key={index}>
                    <h3>{item.name}</h3>
                    <p>Catégorie : {item.category}</p>
                    <p>Description : {item.description}</p>
                </div>
            )
        }) */
    }
 
    render() {
        return (
            <React.Fragment>
                <h1>NOUVEAU PROJET</h1>
                <form onSubmit={this.onSubmit}>

                    <label for="name">Nom</label>
                    <input 
                        type="text" 
                        name="name" 
                        onChange={this.onChange}
                        value={this.state.nom}
                    />

                    <label for="category">Catégorie</label>
                    <select 
                        name="category"
                        onChange={this.onChange}
                        value={this.state.nom}
                        >
                        {/* TODO : appeler le webservice qui retourne les catégories enregistrées en base */}
                        <option value="">--Sélectionnez une catégorie</option>
                        <option value="1">Site Internet</option>
                        <option value="2">Logiciel administratif</option>
                        <option value="3">Application mobile</option>
                    </select>

                    <label for="description">Description</label>
                    <textarea 
                        name="description" 
                        rows="5"
                        onChange={this.onChange}
                        value={this.state.description}
                    />

                    <input type="submit" value="Valider" />
                </form>

                {this.createProject()}
                
            </React.Fragment>
        )
    }
}
