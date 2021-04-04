import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom"
import Home from "./pages/Home"
import Episodes from "./pages/Episodes"
import Characters from "./pages/Characters"
import './App.css';

function App() {
  const appIcon = "https://i.pinimg.com/originals/26/48/52/264852967f9a162e06b16a2ea1a4ca28.jpg"

  return (
    <Router>
      <Navbar bg="navbar" variant="dark">
        <Navbar.Brand href="/home">
          <img
            alt="appIcon"
            src={appIcon}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}Get Schwifty
        </Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink className="nav-link" to="/episodes">Episodes</NavLink>
          <NavLink className="nav-link" to="/characters">Characters</NavLink>
        </Nav>
      </Navbar>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/episodes" component={Episodes} />
        <Route exact path="/characters" component={Characters} />
        <Redirect from="/" to="/home" />
      </Switch>
    </Router>
  );
}

export default App;
