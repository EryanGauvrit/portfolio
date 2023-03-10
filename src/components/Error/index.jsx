import { Link } from "react-router-dom";
import errorPicture from "../../assets/picture-error.jpg"
import ChangeTitlePage from "../ChangeTitlePage";

function Error() {
    return (
        <main className="error-main">
            <ChangeTitlePage
                titlePage='ERREUR - 404'
            />
            <section>
                <h2>ERREUR !</h2>
                <p>Cette adresse ne mène nulle part ...</p>
                <img src={errorPicture} alt='Erreur' />
                <Link to="/">Retour page d'accueil</Link>
            </section>
        </main>
    )
}

export default Error;