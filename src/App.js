import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './components/layout/NavBar';
import Normal from './Normal';
import Pokemon from './Pokemon';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
      <div>
        <NavBar />
      </div>
      <Switch>
        <Route exact path="/normal" component={Normal} />
        <Route exact path="/:pokemonIndex" component={Pokemon} />
      </Switch>
    </Router>
  )
}

export default App;
