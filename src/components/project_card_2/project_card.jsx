import React, {useState, useEffect} from 'react';
import './project_card.css'

function ProjectCard(props) {

    const {img_path, name, city, description} = props

    const cut_description = description.substr(1, 150)+"...";

    return(
        <>
           <div className="card-container">
                <img className="round" src={img_path} alt="user" />
                <h3>{name}</h3>
                <h6>{city}</h6>
                <p>{cut_description}</p>
                <div className="buttons">
                
                    <button className="primary">
                        En savoir plus
                    </button>
                </div>
                <div className="skills">
                    <h6>categories</h6>
                    <ul>
                        <li>Wordpress</li>
                        <li>site vitrine</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
export default ProjectCard