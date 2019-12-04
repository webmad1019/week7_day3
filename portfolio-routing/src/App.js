import React, { Component } from 'react';
import './App.css';
import Home from './components/portfolio/Home';
import About from './components/portfolio/About';
import Lifecycle from './components/Lifecycle'
import ProjectDetails from './components/portfolio/ProjectDetails'
import PropsComp from './components/portfolio/PropsComp.js'
import { projects as Projects } from './components/portfolio/Projects';

import NavBar from './components/Navbar';

import { Switch, Route, Redirect } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/lifecycle" component={Lifecycle} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/:id" component={ProjectDetails} />
          <Route path="/route-with-props" render={() => <PropsComp user="German" age="22" />} />  {/* El retorno de la prop render de una Route es lo que se renderiza */}
          <Route path="/route-with-redirect" render={() =>
            false ? <PropsComp user="German" age="22" /> : <Redirect to="/" />
          } />

        </Switch>
      </div>
    );
  }
}

export default App;