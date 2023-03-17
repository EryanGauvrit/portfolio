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
                titlePage='Eryan Gauvrit - Portfolio'
            />
            <BannerHome />
            <section className="home-content">
                <ContentHome
                    title="Bienvenue sur mon portfolio !"
                    content="Si vous êtes arrivés jusqu'ici, c'est que soit vous êtes recruteur, soit vous êtes curieux. Je vous laisse découvrir si vous avez encore quelques doutes sur ce que je peux vous apporter..."
                />
                <ContentHome
                    title="Qui suis-je ?"
                    content="Je m'appelle Eryan Gauvrit et je suis LE développeur que vous attendez : un junior en plein épanouissement devant les infinies possibilités qu'offre le développement web. Si vous êtes simplement curieux ou un confrère, peut-être que ce projet vous donnera des idées pour vos futures créations, du moins je l'espère."
                    link={<Link to='/profil' className="link-home-content" onClick={"#backTop-anchor"}>Cliquez pour en savoir plus ...</Link>}
                    pp={<img src={pp} alt="Eryan Gauvrit" />}
                />
            </section>
            <SlideShowRecentsProjects />

        </main>
    )
}

export default Home;