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
import AdminContainer from './components/admin/adminContainer'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <NavBar />
          <div>
            <Switch>
              <Route path="/cart" component={CartContainer}>
              </Route>
              <Route path="/smoothie" component={SmoothieContainer}>
              </Route>
              <Route path="/admin" component={AdminContainer}>
              </Route>
              <Route path="/" component={Home}>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
};

export default App;
