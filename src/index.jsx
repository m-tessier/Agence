import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {ThemeContext, themes} from 'theme/theme-context';
import 'sass/styles.scss';

import Home from 'pages/Home';
import About from 'pages/About';
import Works from 'pages/Works';

import Navbar from 'components/Navbar'


const App = () => {
  const themeIsSave = localStorage['theme-light'] === 'true' ? themes.light : themes.dark;
  const [state, setState] = useState(localStorage['theme-light'] ? themeIsSave : themes.light);
  const [card, setCard] = useState(false);

  const toggleTheme =() => {
    setState(state === themes.dark ? themes.light : themes.dark);
    const isSave = (state === themes.dark ? true : false);
    localStorage.setItem("theme-light", isSave);
  };

  const toggleCard =() => {
    setCard(current => !current);
  };

  
  return (
    <ThemeContext.Provider value={state}>
      <div className="App h-100" style={state}>
        <Router>
          <Navbar state={state} changeTheme={toggleTheme} />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/Works">
              <Works card={card} changeCard={toggleCard} />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDom.render(<App />, document.getElementById('root'));