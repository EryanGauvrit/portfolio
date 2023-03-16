import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projectsDatas from '../../datas/projects.json';
import Error from '../Error';
import ProjectsDatasSkills from "./ProjectDatasSkills";
import ProjectDatasLink from "./ProjectsDatasLink";
// import { useNavigate } from "react-router-dom";

function ShowProjectDatas() {

    // const navigate = useNavigate();

    const { id } = useParams();
    // On initialise le tableau avec useState
    const [project, setProject] = useState({
        title: '',
        description: '',
        date: '',
        duration: '',
        client: '',
        address: '',
        skills: [],
        link: ''
    });

    useEffect(() => {
        projectsDatas.map((data) => {
            if (data.id === id) { // On oublie pas de vérifier l'ID en URL avec celle du fichier JSON
                setProject(data);
            }
            return null;
        })
    });

    if (project.title === undefined) {
        return <Error />;
    }

    return (
        <main className="project-details-main">
            <h1>Projet : {project.title}</h1>
            <section className="project-details-datas">
                <aside className="project-info">
                    <ul>
                        <li>Durée : {project.duration}</li>
                        <li>Date de réalisation : {project.date}</li>
                    </ul>
                    <ul className="project-client">
                        <li>{project.client}</li>
                        <li>{project.address}</li>
                    </ul>
                </aside>
                <article>
                    {project.description}
                </article>
                <aside className="project-skills">
                    <p>Compétences utilisées ici :</p>
                    <ProjectsDatasSkills project={project} />
                </aside>
                <ProjectDatasLink link={project.link} />
            </section>
        </main>
    )
}

export default ShowProjectDatas;