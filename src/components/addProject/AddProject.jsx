import React, { Component } from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "./addProject.css";

export default class AddProject extends Component {

    state = {
        creation: this.props.creation, 
        name: '',
        category: '',
        description: '',
        items: [],
        error: ''
    }

    componentDidMount() {

        let projectDescription = '';

        if (!this.state.creation) {
            
            //TODO : appel du webservice

            let projectName = 'Chantez en canon avec le roi';
            let projectCategory = '1';
            projectDescription = '<p>Sire, ouvrez !</p><p>On en a gros !</p>';

            this.setState({
                name: projectName,
                category: projectCategory,
                description: projectDescription
            })

            document.querySelector('#inputName').value = projectName;
            document.querySelector('#selectCategory').value = projectCategory;
        }

        ClassicEditor
            .create(document.querySelector('#ckeditor'), {
                toolbar: ['bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
            })
            .then(editor => {
                editor.setData(projectDescription);
                this.setState({descriptionEditor: editor});
            })  

    }

    onChange = (event) => {
        this.setState ({
            [event.target.name] : event.target.value
        });
    }

    handleCkeditor = (event, editor) => {
        this.setState({description: editor.getData()});
    }

    onSubmit = (event) => {
        event.preventDefault();

        //check input
        let boolError = false;
        
        if (this.state.name == '') {
            this.setState({error: 'Vous devez saisir un nom de projet'});
            boolError = true;
        }

        if (!boolError && this.state.category == '') {
            this.setState({error: 'Vous devez saisir une catégorie'});
            boolError = true;
        }

        if (!boolError && this.state.descriptionEditor.getData() == '') {
            this.setState({error: 'Vous devez saisir une description'});
            boolError = true;
        }

        if (!boolError) {
            this.setState({
                name: '',
                category: '',
                description: '',
                
                items: [...this.state.items, {
                    name: this.state.name,
                    category: this.state.category,
                    description: this.state.descriptionEditor.getData()
                    }
                ]
            })
        }
        
    }

    createProject = () => {
        // TODO -> appeler le webservice qui enregistre le projet en base

        //TEST
        /*
        return this.state.items.map((item, index) => {
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
            <div id="container">
                <div id="content">
                    <div id="image"></div>
                    <div id="form-content">
                        <h1>{this.state.creation ? "Nouveau projet" : "Modifier un projet"} </h1>
                        { this.state.error != '' ? <div class="error">{this.state.error}</div> : null }
                        <form onSubmit={this.onSubmit}>
                            <div class="name-and-category input-container">
                                <div class="info-unit unit-name">
                                    <label id="inputName" class="label" for="name">Nom</label>
                                    <input class="input-name class-input"
                                        type="text" 
                                        name="name" 
                                        onChange={this.onChange}
                                        value={this.state.name}
                                    />
                                </div>
                                <div class="info-unit unit-category">
                                    <label class="label" for="category">Catégorie</label>
                                    <select 
                                        id = "selectCategory"
                                        class="class-input select-category"
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
                                </div>
                            </div>
                            <div class="info-unit unit-description input-container">
                                <label class="label" for="description">Description</label>
                                <div id="ckeditor" />
                            </div>
                            <input class="button" type="submit" value="Valider" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
