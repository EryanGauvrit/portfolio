import BannerHome from "../../components/BannerHome";
import ContentHome from "../../components/ContentHome";
import { Link } from "react-router-dom";

function Home() {
    return (
        <main className="main-home">
            <BannerHome />
            <section className="home-content">
                <ContentHome
                    title="Bienvenue sur mon portefolio !"
                    content="Si vous êtes arrivés jusqu'ici, c'est que soit vous êtes recruteur, soit vous êtes curieux. Je vous laisse découvrir ma création si vous n'êtes pas encore convaincu de ce que je peux faire et ce que je pourrais faire bientôt ..."
                />
                <ContentHome
                    title="Qui suis-je ?"
                    content="Rapidement, si vous êtes recruteur, je suis celui que vous attendez : un junior en plein épanouissement devant d'infinis possibilités qu'offre le développement web. Si vous êtes simplement curieux ou un confrère, peut-être que ce projet vous donnera des idées pour vos futures créations, du moins je l'espère."
                    link={<p className="link-home-content">Cliquez pour en savoir <Link to='/profil'>plus ...</Link></p>}
                />
            </section>

        </main>
    )
}

export default Home;