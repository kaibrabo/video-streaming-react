import React from 'react';
import { Counter } from './features/counter/Counter';
import Homescreen from './screens/Homescreen';
import LoginScreen from './screens/LoginScreen';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';

function App() {
  const user = null;

  return (
    <Router>
      <div className="app">
        {!user ?
          (<LoginScreen />)
          :
          (
            <Switch>
              <Route exact path="/">
                <Homescreen />
              </Route>
            </Switch>
          )
        }
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
