import React, {Fragment} from 'react';
import './ProjectCard.css';
import user from "../../images/user.jpg"

function ProjectCard(props) {

    const {img_path, title, description, categories,picture} = props
    const cut_description = description.substr(1, 150) + "...";

    return (
        <Fragment>
            <div className="card-container">
                <a href="#">
                    <header>
                        <div className="Header" style={{backgroundImage: `url(`+picture+`)`, backgroundSize: "cover",}}/>
                    </header>
                    <div className="bodyCard">
                        <img className="round" src={user} alt="The image of the user"/>
                        <h2>{title}</h2>
                        <p>{cut_description}</p>
                    </div>
                    <div className="skills">
                        <h6>Catégories</h6>
                        <ul>
                            {categories.map(categorie => (<li>{categorie}</li>))}
                        </ul>
                    </div>
                </a>
            </div>
        </Fragment>
    );
}

export default ProjectCard;