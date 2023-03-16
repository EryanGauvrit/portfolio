import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to='/' className='logo' onClick={"#backTop-anchor"}><img src={logo} alt="logo" /></Link>
      <nav>
        <Link to='/' onClick={"#backTop-anchor"}>Accueil</Link>
        <div className='nav-point'></div>
        <Link to='/profil' onClick={"#backTop-anchor"}>Profil</Link>
        <div className='nav-point'></div>
        <Link to='/projects' onClick={"#backTop-anchor"}>Projets</Link>
      </nav>
    </header>
  );
}

export default Header;
