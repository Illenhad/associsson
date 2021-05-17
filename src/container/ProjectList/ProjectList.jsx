import React, {useState, useEffect} from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import jsonData from '../../data/json_data.json';
import {httpRequestUpdateProject} from '../../backCall/projectListCall'

import './ProjectList.css';

function Project_List() {

    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {

        setJsonData(httpRequestUpdateProject())

    })

    return (
       
        <div className="col-5 col-4 col-3 col-2 col-1">
          
                    {
                        jsonData.map(card => (
                            <ProjectCard key={card._id} img_path={card.picture} title={card.title} description={card.about} picture={card.picture} categories={card.categories}/>              
                        ))
                    }
               
        </div>
    );
}

export default Project_List;

