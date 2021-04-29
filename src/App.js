import React, { Component } from 'react';
import CartContainer from './containers/cartContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/cart">
            <CartContainer />
          </Route>
        </Switch>
      </div>
    </Router>
        
      </div>
    );
  }
};

export default App;
