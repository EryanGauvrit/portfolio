

function ProjectsDatasSkills({ project }) {

    const skills = project?.skills || [];

    const skillsMap = skills.map((event, index) =>
        <li key={event}>{project.skills[index]}</li>
    )

    return (
        <ul>
            {skillsMap}
        </ul>
    )
}

export default ProjectsDatasSkills;