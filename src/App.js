import React, { Component } from 'react';
import CartContainer from './containers/cartContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './components/shared/NavBar'
import SmoothieContainer from './containers/smoothieContainer'


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
        </Switch>
      </div>
    </Router>
        
      </div>
    );
  }
};

export default App;
