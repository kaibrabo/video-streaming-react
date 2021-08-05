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
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        // logged in
        dispatch(login({
          uid: user.uid,
          email: user.email,
        }))
      } else {
        // logged out
        dispatch(logout)
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
