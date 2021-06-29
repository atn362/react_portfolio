import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home'
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

import './App.css';

function App() {
  return (

          <BrowserRouter>
            <Switch className="links">
              <Route components={Home} path="/" exact/>
              <Route components={About} path="/about"/>
              <Route components={Portfolio} path="/portfolio"/>
              <Route components={Contact} path="/contact"/>
              <Route components={Resume} path="/resume"/>
            </Switch>
          </BrowserRouter>
  )
}

export default App;
