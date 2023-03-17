import React from "react";
import Collapse from "../../components/Collapse";
import Download from "../../components/Download";
import SocialLink from "../../components/SocialLink";
import pictureHor from "../../assets/pictures/img-chien.jpg";
import ChangeTitlePage from "../../components/ChangeTitlePage";
import BackTop from "../../components/BackTop";

function Profil() {
    return (
        <React.Fragment>
            <ChangeTitlePage
                titlePage='Portfolio - Mon profil'
            />
            <BackTop />
            <main className="profil-main">

                <div className="sectionAndPicture">
                    <section className="bio-bloc">
                        <h1>Biographie</h1>
                        <p>Je m’appelle Eryan, et voici mon parcours…</p>
                        <Collapse
                            title='Les prémices'
                            icontitle={<i className="fa-solid fa-graduation-cap"></i>}
                            content={
                                <React.Fragment>
                                    <ul>
                                        <li>
                                            <i className="fa-solid fa-laptop"></i>
                                            <p>
                                                Fan de jeux vidéo, tout est parti d’une simple question : « Comment sont-ils créés ? »
                                            </p>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-laptop-code"></i>
                                            <p>
                                                J’ai commencé à apprendre seul quelques notions : le langage C et C++, puis j’ai réalisé des mini jeux grâce au code.
                                            </p>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-book"></i>
                                            <p>
                                                J’ai ensuite choisi de m’orienter vers un Bac STI2D (sciences technologiques de l’industrie et du développement durable), spécialité SIN (système informatique numérique) : j’ai ainsi pu étudier l’informatique et le développement.
                                            </p>
                                        </li>
                                        <li>
                                            <div className="icon-illustration-list">
                                                <i className="fa-brands fa-html5"></i>
                                                <i className="fa-brands fa-css3-alt"></i>
                                            </div>
                                            <p>
                                                J’ai découvert par la suite le HTML/ CSS au sein du cursus, et j’ai petit à petit laissé émerger l'idée de faire du développement web mon métier, après quelques hésitations entre celui-ci et le développement de jeux vidéo.
                                            </p>
                                        </li>
                                    </ul>
                                </React.Fragment>
                            }
                        />
                        <Collapse
                            title='Passion sport'
                            icontitle={<i className="fa-solid fa-person-running"></i>}
                            content={
                                <React.Fragment>
                                    <ul>
                                        <li>
                                            <i className="fa-solid fa-futbol"></i>
                                            <p>
                                                J’ai toujours été d’une nature sportive. Après de nombreuses années au sein d’une équipe de football, j’ai commencé la course à pied de manière sérieuse.
                                            </p>
                                        </li>
                                        <li>
                                            <div className="icon-illustration-list">
                                                <i className="fa-solid fa-person-running"></i>
                                                <i className="fa-solid fa-mountain"></i>
                                            </div>
                                            <p>
                                                Je pratique aujourd’hui le trail et la course sur route, et participe à des compétitions depuis quelques années maintenant. L’entraînement fait partie intégrante de mes journées et mes objectifs se font de plus en plus exigeants.
                                            </p>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-person-skiing"></i>
                                            <p>
                                                En parallèle, je passe les hivers sur les skis, que ce soit ceux de piste ou ceux de randonnée.
                                            </p>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-mountain-sun"></i>
                                            <p>
                                                Quelque soit le sport pratiqué, la montagne est mon terrain de prédilection et j’en suis passionné.
                                            </p>
                                        </li>
                                    </ul>
                                </React.Fragment>
                            }
                        />
                        <Collapse
                            title='Expérience militaire'
                            icontitle={<i className="fa-sharp fa-solid fa-person-military-rifle"></i>}
                            content={
                                <React.Fragment>
                                    <ul>
                                        <li>
                                            <i className="fa-solid fa-bolt"></i>
                                            <p>
                                                Après le BAC, j’ai décidé de m’engager au sein du 27 ème Bataillon de chasseurs alpins d’Annecy. Je rêvais d’aventure et d’adrénaline.
                                            </p>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-people-group"></i>
                                            <p>
                                                Là-bas, j’ai pu apprendre énormément de choses, que ce soit dans le sport, dans le combat ou dans le maniement d’armes. J’ai aussi appris à vivre en groupe soudé et en cohésion, à gérer mon stress et à être prêt à chaque seconde.
                                            </p>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-hourglass-end"></i>
                                            <p>
                                                Mon expérience à duré trois ans, et elle me servira sûrement tout au long de ma vie.
                                            </p>
                                        </li>
                                    </ul>
                                </React.Fragment>
                            }
                        />
                        <Collapse
                            title='Reconversion'
                            icontitle={<i className="fa-solid fa-code"></i>}
                            content={
                                <React.Fragment>
                                    <ul>
                                        <li>
                                            <i className="fa-solid fa-school"></i>
                                            <p>
                                                J’ai entamé une formation de développeur web chez <a href="https://openclassrooms.com/fr/" target="_blank" rel='noreferrer'>OpenClassrooms</a>, que j’ai rapidement su mener à bien grâce à mes notions antérieures. Je connaissais déjà la logique et l’état d’esprit à avoir : savoir être totalement autonome et chercher par soi-même.
                                            </p>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-file-code"></i>
                                            <p>
                                                Durant cette formation, j’ai réalisé sept projets différents qui m’ont permis de perfectionner mes acquis et d’apprendre toujours plus de nouvelles notions. J’ai aussi créé moi-même d’autres projets afin de gagner en expérience.
                                            </p>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-briefcase"></i>
                                            <p>
                                                A présent, je me sens totalement prêt à décrocher un emploi dans ce domaine pour lequel j’ai tant investi et qui me passionne toujours autant, si ce n’est plus, qu’à mes débuts.
                                            </p>

                                        </li>
                                    </ul>
                                </React.Fragment>
                            }
                        />
                    </section>
                    <aside className="picHor-bloc">
                        <img src={pictureHor} alt="Illustration" />
                    </aside>
                </div>

                <div className="download-style">
                    <Download />
                </div>


            </main>

            <div className="socialLink-bloc">
                <SocialLink
                    name='Linkedin'
                    link='https://www.linkedin.com/in/eryan-gauvrit/'
                    logo={<i className="fa-brands fa-linkedin"></i>}
                    icon={<i className="icon-params fa-solid fa-arrow-up-right-from-square"></i>}
                />
                <SocialLink
                    name='Github'
                    link='https://github.com/EryanGauvrit'
                    logo={<i className="fa-brands fa-github"></i>}
                    icon={<i className="icon-params fa-solid fa-arrow-up-right-from-square"></i>}
                />
                <SocialLink
                    name='mail'
                    link='mailto:eryan.gauvrit@gmail.com'
                    logo={<i className="fa-solid fa-envelope"></i>}
                    icon={<i className="icon-params fa-solid fa-paper-plane"></i>}
                />
            </div>

        </React.Fragment>

    )
}

export default Profil;