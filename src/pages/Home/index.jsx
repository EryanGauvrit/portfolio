import BannerHome from "../../components/BannerHome";
import ContentHome from "../../components/ContentHome";
import { Link } from "react-router-dom";
import ChangeTitlePage from "../../components/ChangeTitlePage";
import pp from "../../assets/PP.png";
import SlideShowRecentsProjects from "../../components/SlideShowRecentsProjects";

function Home() {
    return (

        <main className="main-home">
            <ChangeTitlePage
                titlePage='Portfolio'
            />
            <BannerHome />
            <section className="home-content">
                <ContentHome
                    title="Bienvenue sur mon portfolio !"
                    content="Si vous êtes arrivés jusqu'ici, c'est que soit vous êtes recruteur, soit vous êtes curieux. Je vous laisse découvrir ma création si vous n'êtes pas encore convaincu de ce que je peux faire et ce que je pourrai faire bientôt ..."
                />
                <ContentHome
                    title="Qui suis-je ?"
                    content="Rapidement, si vous êtes recruteur, je suis celui que vous attendez : un junior en plein épanouissement devant les infinies possibilités qu'offre le développement web. Si vous êtes simplement curieux ou un confrère, peut-être que ce projet vous donnera des idées pour vos futures créations, du moins je l'espère."
                    link={<p className="link-home-content">Cliquez pour en savoir <Link to='/profil'>plus ...</Link></p>}
                    pp={<img src={pp} alt="Profil" />}
                />
            </section>
            <SlideShowRecentsProjects />

        </main>
    )
}

export default Home;