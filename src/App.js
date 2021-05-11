import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
            <Route path="/smoothie-shop-frontend/cart" component={CartContainer}>
              </Route>
              <Route path="/smoothie-shop-frontend/smoothie" component={SmoothieContainer}>
              </Route>
              {/* <Route path="/smoothie-shop-frontend/admin" component={AdminContainer}>
              </Route> */}
              <Route path="/smoothie-shop-frontend/" component={Home}>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
};

export default App;
