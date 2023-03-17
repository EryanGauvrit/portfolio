import BackTop from "../../components/BackTop";
import BannerProjects from "../../components/BannerProjects";
import CardsProjects from "../../components/CardsProjects";
import ChangeTitlePage from "../../components/ChangeTitlePage";

function Projects() {
    return (
        <main className="card-list-main">
            <ChangeTitlePage
                titlePage='Portfolio - Mes projets'
            />
            <BackTop />
            <BannerProjects
                title='Voici la liste de mes projets :'
            />
            <CardsProjects />
        </main>
    )
}

export default Projects;