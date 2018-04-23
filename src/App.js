import React, { Component } from 'react';
import Machines from './machine/Machines';
import AddMachine from './machine/Create';
import Readings from './reading/Readings';
import AddReading from './reading/Create';
import Login from './Login';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from "react-router";
import { Route, Switch } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';

const history= createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Projeção de horímetros</h1>
          </header>
          <Switch>
            <Route exact path="/login"  component={Login} />
            <Route exact path="/" component={Machines}/>
            <Route exact path="/machine/add" component={AddMachine} />
            <Route exact path="/reading/add" component={AddReading} />
            <Route path="/:id" component={Readings} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

