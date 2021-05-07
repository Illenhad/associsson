import React from 'react';
import ProjectCard2 from '../../components/ProjectCard2/ProjectCard';
import jsonData from '../../data/json_data.json';

import './ProjectList.css';

function Project_List() {

    return (
       
        <div className="grid-4">
            {
                    jsonData.map(card => (
                        <ProjectCard2 key={card._id} img_path={card.picture} title={card.title} description={card.about} picture={card.picture}
                                     categories={card.categories}/>
                                     
                    ))
                   
            }

        </div>
    );
}

export default Project_List;

