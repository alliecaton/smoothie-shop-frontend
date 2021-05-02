import React, { Component } from 'react';
import CartContainer from './containers/cartContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './components/shared/NavBar'
import SmoothieContainer from './containers/smoothieContainer'
import Home from './components/shared/Home'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <NavBar />
          <div>
            <Switch>
              <Route path="/cart">
                <CartContainer />
              </Route>
              <Route path="/smoothie">
                <SmoothieContainer />
              </Route>
            <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
};

export default App;
