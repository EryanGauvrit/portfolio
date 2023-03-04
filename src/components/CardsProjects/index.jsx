import { Link } from "react-router-dom";
import projectsDatas from "../../datas/projects.json";

function CardsProjects() {

    return (
        <section className="card-project-list">
            {
                projectsDatas.map((project) =>
                    <Link className="card-project" to={"/projects/" + project.id} key={project.id} >
                        <h2>{project.title}</h2>
                        <div className="cover-bloc">
                            <img src={project.cover} alt={project.title} />
                        </div>
                        <div className="summary-bloc">
                            <p>{project.summary}</p>
                        </div>
                    </Link>
                )
            }
        </section>
    )
}

export default CardsProjects;