import { Form, Link } from "react-router-dom";
import errorPicture from "../../assets/picture-error.jpg"

function Error() {
    return (
        <main className="error-main">
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