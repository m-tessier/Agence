import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import StudyCase from 'components/StudyCase';
import clients from 'data/clients';


const Works = () => (
  <div className="Works container">
    <h2>Au fil des années, nous avons pu accompagner les meilleurs.</h2>
    <p>Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.</p>
    <Router>
      <ul>
        {clients.map((client, index) => (
          <li key={index}><Link to={`/works/${client.slug}`}>{client.name}</Link></li>
        ))}
      </ul>
      <Switch>
        <Route path="/works/:workSlug">
          <StudyCase />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default Works;