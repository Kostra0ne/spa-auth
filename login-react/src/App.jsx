import React, { Component } from "react";
import "./styles/App.css";
import { Switch, Route } from "react-router-dom";
// auth
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
// partials
import HeaderMain from "./components/HeaderMain";
import Nav from "./components/Nav";
import FooterMain from "./components/FooterMain";
// views
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Signup from "./views/Signup";
import Signin from "./views/Signin";
import Dashboard from "./views/Dashboard";
import NotFound from "./views/NotFound";

export default class App extends Component {
  state = {
    isNavMobileActive: false,
  };

  // burgerCallback toggle le booléen isNavMobileActive de true à false
  // ceci cause le re-render du component app et des components enfants (et donc de la nav mobile)
  burgerCallback = () =>
    this.setState({ isNavMobileActive: !this.state.isNavMobileActive });

  render() {
    return (
      <div className="App">
        <HeaderMain burgerCallback={this.burgerCallback} />
        {/*  la props navStatus est envoyée à la nav(navType=mobile) */}
        <Nav navType="mobile" navStatus={this.state.isNavMobileActive} />
        <main id="content-main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <ProtectedRoute path="/dashboard" component={Dashboard} />
            <Route path="*" component={NotFound} />
          </Switch>
        </main>
        <FooterMain />
      </div>
    );
  }
}
