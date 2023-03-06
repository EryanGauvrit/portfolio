import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projectsDatas from '../../datas/projects.json';

function SlideShowProjectDetails() {

    const { id } = useParams();
    // On initialise le tableau avec useState
    const [project, setProject] = useState({
        pictures: []
    });

    // On récupère les images avec .map et on les mets  dans le tableau avec useEffect
    useEffect(() => {
        projectsDatas.map((data) => {
            if (data.id === id) { // On oublie pas de vérifier l'ID en URL avec celle du fichier JSON
                setProject(data);
            }
            return null;
        })
    });

    /********** Gestion des images **********/

    const picturesLength = project.pictures.length; // on récupère la taille du tableau d'images
    const [currentPicture, setCurrentPicture] = useState(0); // on initialise un état à 0 pour l'image actuelle

    /* Conditions affichage images selon les requirements */
    const nextPicture = () => {
        setCurrentPicture(currentPicture === picturesLength - 1 ? 0 : currentPicture + 1);
    }
    const prevPicture = () => {
        setCurrentPicture(currentPicture === 0 ? picturesLength - 1 : currentPicture - 1);
    }

    /* Gestion des chevrons */

    let chevron = "activeChevron"; // par défault ils sont activés

    if (picturesLength === 1) {
        chevron = "notActiveChevron";
    }

    return (
        <div className="picture-gallery">

            {project.pictures.map((I, index) => {

                return (
                    <div className="current-picture-bloc-style" key={index}>
                        <div
                            className={index === currentPicture ? "picture active" : "picture"}
                        >
                            {index === currentPicture && (
                                <div
                                    className="currentPicture-box"
                                    style={{
                                        backgroundImage: `url(${project.pictures[index]})`
                                    }}
                                >

                                    <i className={"fa-solid fa-chevron-left " + chevron} onClick={prevPicture}></i>
                                    <i className={"fa-solid fa-chevron-right " + chevron} onClick={nextPicture}></i>

                                </div>

                            )}
                        </div>
                    </div>

                );
            })}

        </div>
    )
}

export default SlideShowProjectDetails;