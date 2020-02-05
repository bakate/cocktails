import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Error from './pages/Error';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Navbar from './components/Navbar';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route path="/cocktail/:id">
        <SingleCocktail />
      </Route>
      <Route exact path="*">
        <Error />
      </Route>
    </Switch>
  </Router>
);

export default App;
