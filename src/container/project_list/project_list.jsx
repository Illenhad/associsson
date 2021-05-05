import React, {useState, useEffect} from 'react';

import './project_list.css';
import ProjectCard from '../../components/project_card/project_card'
import jsonData from '../../data/json_data.json'

function Project_List() {

    const datas = jsonData
    console.log("datas",datas)

    return(
        <div className="grid-4">
            {
                datas.length > 0 ?
                    datas.map(card => (
                 
                        <ProjectCard key={card._id} img_path = {card.picture} name={card.name} city={card.address} description={card.about}/>
                 
                    ))
                    :
                    <div>
                    Aucun projet n'a encore été publié
                </div>
            }
        </div>
    );
}
export default Project_List

