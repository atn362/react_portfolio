import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from './components/About';
import Logo from './logo.jpg';

import './App.css';

function App() {
  return (
      <section className="header">
        <section className="header-logo">
          Alexander Todd Norton
          <img className="logo" src={Logo} alt="logo" />
        </section>
        <div className="navbar"></div>
        <div className="links">
          <BrowserRouter>
            <Switch className="links">
              <Route components={About} path="/about">About</Route>
            </Switch>
          </BrowserRouter>
        </div>
      </section>
    );
  }

export default App;
