import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to='/' className='logo'><img src={logo} alt="logo" /></Link>
      <nav>
        <Link to='/'>Accueil</Link>
        <div className='nav-point'></div>
        <Link to='/profil'>Profil</Link>
        <div className='nav-point'></div>
        <Link to='/projects'>Projets</Link>
      </nav>
    </header>
  );
}

export default Header;
