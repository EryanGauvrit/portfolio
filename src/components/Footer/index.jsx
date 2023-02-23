import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Footer() {
    return (
        <footer>
            <img src={logo} alt="Logo portefolio" />
            <ul className='social-link'>
                <li><a href='https://www.linkedin.com/in/eryan-gauvrit/' target="_blank" rel='noreferrer'><i className="fa-brands fa-linkedin"></i></a></li>
                <li><a href='https://github.com/EryanGauvrit' target="_blank" rel='noreferrer'><i className="fa-brands fa-github"></i></a></li>
                <li><a href='mailto:eryan.gauvrit@gmail.com'><i className="fa-solid fa-envelope"></i></a></li>
            </ul>
            <ul className='internal-link'>
                <li><Link to="/">Accueil</Link></li>
                <li><div className='nav-point'></div></li>
                <li><Link to="/profil">Mon cv</Link></li>
            </ul>
            <p>© 2023 EryanGauvrit - Portefolio. All rights reserved</p>
        </footer>
    )
}

export default Footer;