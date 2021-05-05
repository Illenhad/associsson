import React, {useState, useEffect} from 'react';
import './project_card.css'

function ProjectCard(props) {

    const {img_path, title, city, description} = props

    const cut_description = description.substr(1, 150)+"...";

    return(
        <>
        
           <div className="card-container">
               
                   <header>
                        <a href="">
                            <img className="header" src='https://www.docstring.fr/media/blog_posts/deployer-une-application-django-sur-pythonanywhere/thumbnail/deployer-une-application-django-sur-pythonanywhere.jpg' alt="user" />
                        </a>
                    </header> 

                    <div className ="bodyCard">
                        <a href="">
                            <h2> Déployer une application Django sur PythonAnywhere</h2>
                            <p>{cut_description}</p>
                        </a>
                    </div>       
                    <div>
                        <div className="skills">
                            <a href="">
                                <img className="round" src={img_path} alt="user" />
                       
                                <h6>categories</h6>
                                <ul>
                                    <li>Wordpress</li>
                                    <li>site vitrine</li>
                                </ul>
                            </a>
                        </div>
                    </div>
                </div>
        </>
    );
}
export default ProjectCard