import React from "react";
import Collapse from "../../components/Collapse";
import Download from "../../components/Download";
import SocialLink from "../../components/SocialLink";

function Profil() {
    return (
        <React.Fragment>
            <main className="profil-main">
                <h1>Je raconte ma (courte) vie ...</h1>
                <section className="bio-bloc">
                    <h2>Biographie</h2>
                    <p>Je m'appelle Eryan, et je vais vous raconter un peu mon parcours...</p>
                    <Collapse
                        title='Les débuts'
                        content={
                            <React.Fragment>
                                <p>
                                    J'ai commencé à m’intéresser au développement informatique en général à l'âge de 15/16 ans, donc fin des années collège. Comme tout adolescent, je jouais beaucoup au jeux vidéos, et j'ai commencé à me poser la question : "Comment est créé un jeu vidéo ?". <br />
                                    C'est à partir de ce moment là que j'ai commencé à me renseigner et bidouiller quelques trucs dans mon coin (langage C puis C++). J'ai passé ma 2nd (1ère année de lycée) à écrire des petits bouts de codes et me faire des mini-jeux. J'avais donc deux grandes passions :
                                </p>
                                <ul>
                                    <li>L'informatique (jeux vidéo et développement) </li>
                                    <li>Le sport (le football à cette période)</li>
                                </ul>
                                <p>
                                    A la fin de la seconde, je devais choisir une voie débouchant sur un BAC qui pourrait me plaire (n'étant pas vraiment à l'aise avec les études, je voulais quelques chose de court). J'ai trouvé l'orientation BAC STI2D (Sciences Technologiques de l’Industrie et du Développement Durable) spécialité SIN (Système Informatique Numérique), elle se rapprochait assez de ce que je voulais : étudier l'informatique et en particulier le développement.
                                </p>
                            </React.Fragment>
                        }
                    />
                    <Collapse
                        title='La période lycée'
                        content={
                            <React.Fragment>
                                <p>
                                    Durant ces 2 années avant le BAC, nous avons vu diverses matières plus ou moins intéressantes selon mes goûts. C'est là que j'ai réellement découvert le développement web, simplement en HTML/CSS à l'époque (oui ça ne volait pas haut), et c'est donc lors de ces cours que je me suis passionné pour la conception d'un site web.
                                </p>
                                <p>
                                    En parallèle, je m'étais renseigné sur les débouchés d'un développeur de jeux vidéos et voyant que cette voie était "sans issues" (beaucoup de demandes mais peu d'offre d'emploi, pour être surmené et pas suffisamment payé), l'idée de me concentrer sur le développement web a émergé.
                                </p>
                                <p>
                                    Mais Tout cela a bien changé à partir de la terminale, où j'ai perdu beaucoup de motivation. En effet, l'idée de rester derrière un bureau toute la journée ne me convenait pas. Je voulais aussi me mettre réellement au sport, pas simplement faire mes 2 entraînements par semaine. Je voulais en faire plus. Je me suis donc orienté vers l'armée, qui était, selon moi, l'endroit idéal pour cela, en plus de l'esprit de cohésion qui me correspondait.
                                </p>
                            </React.Fragment>
                        }
                    />
                    <Collapse
                        title='Expérience militaire'
                        content={
                            <React.Fragment>
                                <p>
                                    J'ai obtenu mon BAC, puis à la fin des vacances je me suis engagé au 27e BCA d'Annecy pour commencer une nouvelle aventure. Durant ces 3 années, de septembre 2019 à novembre 2022, j'ai appris énormément, que se soit à l'armée avec le sport, le combat, le maniement des armes et j'en passe, ou simplement dans la vie de tous les jours, avec le savoir vivre en groupe et être le fait d'être soudé 24h/24, gérer son stress et s'adapter à toutes les situations, qu'on soit prêt à cela ou non.
                                </p>
                                <p>
                                    J'ai finis mon contrat et n'ai pas prolongé car je m'y plaisait moins. En effet, il y avait un manque évident de sport (même si j'ai bien progressé, ce n'était toujours pas suffisant), l'esprit d'équipe était peu présent: chacun n'hésitait pas à marcher sur les autres afin d'avoir quelques responsabilités. Bref, l'ambiance devenait malsaine.
                                </p>
                                <p>
                                    Je suis donc retourné vers ma première passion : le développement. Ayant grandi un peu, j'ai su maintenant que je voudrais me réorienter dans un domaine plus sérieux : le web (au lieu du jeu vidéo).
                                    J'ai décidé de me lancer dans une formation en ligne : la formation "développeur web" chez <a href="https://openclassrooms.com/fr/" target="_blank" rel='noreferrer'>OpenClassrooms</a> qui était à mes frais.
                                </p>
                            </React.Fragment>
                        }
                    />
                    <Collapse
                        title='Reconversion'
                        content={
                            <React.Fragment>
                                <p>
                                    La formation s'est très bien passée, avec la petite expérience que je m'étais faite, je connaissais un peu la logique qu'il fallait avoir : se débrouiller par soi-même et donc chercher la réponse seul.
                                </p>
                                <p>
                                    Juste avant la fin, voyant que mes économies s'envolaient, j'ai décidé de chercher un travail le temps de finir la formation. J'ai trouvé un poste de vendeur dans un magasin d'article de sports et de montagne : Ekosport. J'y suis resté seulement 2 mois, constatant que je n'arrivais pas à suivre la formation et travailler à temps plein en période de fêtes. J'ai donc décidé de mettre un dernier coup de collier sur la formation dès l'instant où j'ai quitté cet emploi.
                                </p>
                                <p>
                                    Deux semaines après, j'ai enfin terminé cette formation qui fût très intéressantes, surtout le fait d'apprendre tant de choses en ligne (situation particulière quand on n'en a jamais fait l'expérience) et sans spécialement énormément d'aide. Je vous présente le détail plus loin.
                                </p>
                            </React.Fragment>
                        }
                    />
                </section>

                <section className="form-bloc">
                    <h2>Formation "Développeur Web"</h2>
                </section>

                <Download />

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