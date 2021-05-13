import { Link } from 'react-router-dom';
import ToggleButton from 'components/ToggleButton';

const Navbar = (props) => {
  return (
    <nav className="container d-flex justify-content-between align-items-baseline">
      <div className="d-flex align-items-baseline">
        <h1><Link to="/">STUDIO</Link></h1>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">L'agence</Link></li>
          <li><Link to="/works">Projets</Link></li>
        </ul>
      </div>
      <ToggleButton state={props.state} onClick={props.changeTheme}>
        {props.state.background === "#eeeeee" ? 'Mode nuit' : 'Mode jour'}
      </ToggleButton>
    </nav>
  );
};

export default Navbar;