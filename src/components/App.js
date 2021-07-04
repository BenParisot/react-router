import React from 'react';
import {
  BrowserRouter as Router, 
  Route,
  Switch 
} from 'react-router-dom';
import Red from '../components/Colors/Red';
import Blue from '../components/Colors/Blue';
import Yellow from '../components/Colors/Yellow';
import Pick from './Colors/Pick';
import Header from '../components/Header';

export default function App() {
  return (
        <>
            <Router>
              <Header />
              <Switch>
                <Route path="/red" component={Red} />
                <Route path="/blue" component={Blue} />
                <Route path="/yellow" component={Yellow} />
                <Route path="/:color" component={Pick} />
              </Switch>
            </Router>
        </>
  );
}
