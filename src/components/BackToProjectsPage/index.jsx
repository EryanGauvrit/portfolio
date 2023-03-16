import { Link } from "react-router-dom";


function BackToProjectsPage() {
    return (
        <Link to='/projects' className="backToProjectsPage" onClick={"#backTop-anchor"}>
            <div className="four-square">
                <div>
                    <i className="fa-solid fa-square"></i>
                    <i className="fa-solid fa-square"></i>
                </div>
                <div>
                    <i className="fa-solid fa-square"></i>
                    <i className="fa-solid fa-square"></i>
                </div>
            </div>
            <p>Retour aux autres projets</p>
        </Link>
    )
}

export default BackToProjectsPage;