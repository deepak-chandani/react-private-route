import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import fakeAuth from "./utils/fakeAuth";

import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="nav-container">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/"> Home </Link>
            </li>
            <li className="nav-item">
              <Link to="/about"> About </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard"> Dashboard </Link>
            </li>
          </ul>
        </div>

        <div className="page-content">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <PrivateRoute
            path="/dashboard"
            isAuthenticated={fakeAuth.isAuthenticated}
            component={Dashboard}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
