import React from 'react';
import logo from './logo.svg';
import PrivateRoute from "./PrivateRoute";
import Connexion from './pages/connexion/connexion';
import Homepage from './pages/homepage/homepage';
import './App.css';
import GeneralCards from './pages/generalCards/general-cards'
import { Route, Switch } from 'react-router-dom';
import SpecificCards from './pages/specificCards/specific-card'


function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute exact path="/type/:categoryType" component={GeneralCards} />
        <PrivateRoute exact path="/:categoryType/:id" component={SpecificCards} />
        <PrivateRoute exact path="/" component={Homepage} />
          <Route path="/connexion" component={Connexion} />
      </Switch>
    </div>
  );
}

export default App;
