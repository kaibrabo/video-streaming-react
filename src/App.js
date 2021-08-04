import React, { useEffect } from 'react';
import { Counter } from './features/counter/Counter';
import Homescreen from './screens/Homescreen';
import LoginScreen from './screens/LoginScreen';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import { auth } from './firebase';

function App() {
  const user = null;
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        // logged in
        console.log(user);
      } else {
        // logged out
      }
    });

    return unsubscribe;
  }, []);

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
