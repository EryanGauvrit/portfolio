import React, { useState } from "react";
import projectsDatas from '../../datas/projects.json';
import { Link } from "react-router-dom";
import moment from "moment/moment";

function SlideShowRecentsProjects() {

    // On ressort les projets du plus récent au plus ancien
    let recentsProjects = [];

    moment.locale('fr');

    projectsDatas.sort((a, b) => {  // on converti les dates du format texte au format de date exploitable
        let aH = moment(a.date);
        let bH = moment(b.date);

        if (aH.valueOf() > bH.valueOf()) return -1; // on les compare pour remettre le tableau dans l'ordre souhaité
        if (aH.valueOf() < bH.valueOf()) return 1;
        return 0;
    });

    for (let i = 0; i <= 2; i++) {
        recentsProjects.push(projectsDatas[i]); // On ne retient que les 3 premiers dans un tableau
    }
    console.log(recentsProjects);

    // On met en place la navigation entre les projets via un "Slide Show"

    const recentsProjectsLength = recentsProjects.length;
    const [currentProject, setCurrentProject] = useState(0);

    const nextProject = () => {
        setCurrentProject(currentProject === recentsProjectsLength - 1 ? 0 : currentProject + 1);
    }
    const prevProject = () => {
        setCurrentProject(currentProject === 0 ? recentsProjectsLength - 1 : currentProject - 1);
    }

    return (
        <div className="recents-projects">
            <h2>Mes derniers projets :</h2>
            {
                recentsProjects.map((I, index) => {
                    return (
                        <div className="current-project-bloc-style" key={index}>
                            <div className={index === currentProject ? "project active" : "project"}>
                                {index === currentProject && (
                                    <div
                                        className="currentProject-box"
                                        style={{
                                            backgroundImage: `url(${recentsProjects[index].cover})`
                                        }}
                                    >

                                        <i className={"fa-solid fa-chevron-left "} onClick={prevProject}></i>
                                        <div className="recent-project-info">
                                            <h3>{recentsProjects[index].title}</h3>
                                            <p>{recentsProjects[index].summary}</p>
                                            <Link to={`/projects/${recentsProjects[index].id}`}>Aller sur la page de ce projet</Link>
                                        </div>
                                        <i className={"fa-solid fa-chevron-right "} onClick={nextProject}></i>
                                    </div>

                                )}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SlideShowRecentsProjects;