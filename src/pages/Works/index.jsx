import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import ToggleButton from 'components/ToggleButton';
import StudyCase from 'components/StudyCase';
import clients from 'data/clients';


const Works = (props) => (
  <div className="Works container">
    <h2>Au fil des années, nous avons pu accompagner les meilleurs.</h2>
    <p>Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.</p>
    <Router>
      <ToggleButton card={props.card} onClick={props.changeCard}>
        {!props.card ? 'Card' : 'Titre'}
      </ToggleButton>
      {!props.card
        ? <ul>
            {clients.map((client, index) => (
              <li key={index}><Link to={`/works/${client.slug}`}>{client.name}</Link></li>
            ))}
          </ul>
        : <div className="d-flex justify-content-between">
            {clients.map((client, index) => (
              <div key={index} className="card">
                <h3><Link to={`/works/${client.slug}`}>{client.name}</Link></h3>
                <p>{client.title}</p>
              </div>
            ))}
          </div>
      }
      <Switch>
        <Route path="/works/:workSlug">
          <StudyCase />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default Works;