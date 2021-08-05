import React, { useEffect } from 'react';
import Homescreen from './screens/Homescreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen'; 

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
        dispatch(logout())
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        {!user ?
          (<LoginScreen />)
          :
          (
            <Switch>
              <Route path="/profile">
                <ProfileScreen />
              </Route>
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

export default App;
