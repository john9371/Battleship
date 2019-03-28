import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Q from './Components/Queue.js'
import Game from './Components/Game.js'
import StartGame from './Components/startGame'
class App extends Component {
  render() {
    return (
      <Router >
        <Switch>
          <Route path='/game' component={Game} />
          <Route exact path="/start" component={StartGame} ></Route>
          <Route exact path="/" component={Q} >
            {/* <Route path="?name" component={Game} /> */}
          </Route>

        </Switch>
      </Router >
    );
  }
}

export default App;
