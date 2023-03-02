import CardsProjects from "../../components/CardsProjects";
import ChangeTitlePage from "../../components/ChangeTitlePage";

function Projects() {
    return (
        <main className="card-list-main">
            <ChangeTitlePage
                titlePage='Portfolio - Projets'
            />
            <h1>Voici la liste de mes projets :</h1>
            <CardsProjects />
        </main>
    )
}

export default Projects;