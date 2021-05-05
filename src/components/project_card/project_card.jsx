import React from 'react';
import './project_card.css'

function ProjectCard(props) {

    const {img_path, title, description,categories} = props
    console.log(categories)
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
                            <h2> {title}</h2>
                            <p>{cut_description}</p>
                        </a>
                    </div>       
                    <div>
                        <div className="skills">
                            <a href="">
                                <img className="round" src={img_path} alt="user" />
                       
                                <h6>categories</h6>
                                <ul>
                                    {
                                        categories.map(categorie => (
                                            <li>{categorie}</li>
                                        ))
                                       
                                    }
                                    
                                </ul>
                            </a>
                        </div>
                    </div>
                </div>
        </>
    );
}
export default ProjectCard