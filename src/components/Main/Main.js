import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './Main.scss';

// Components
import Home from './components/Home/Home';
import Favorites from './components/Favorites/Favorites';

const Main = () => (
  <main className="Main">
    <div className="Main__container">
      <Switch>
        <Route exact path="/" component={Home} exact />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </div>
  </main>
);

export default Main;
