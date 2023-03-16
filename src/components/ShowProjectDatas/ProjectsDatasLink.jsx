

function ProjectDatasLink({ link }) {

    return (
        <a href={link} target="_blank" rel='noreferrer' className={`${link ? "project-link" : "project-NoLink"}`}>
            <p>Ce projet est actuellement disponible ici</p>
            <i className="icon-params fa-solid fa-arrow-up-right-from-square"></i>
        </a>
    )
}

export default ProjectDatasLink;