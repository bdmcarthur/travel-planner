import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import axios from "axios";

class Navbar extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    console.log("logging out");
    axios
      .post("/user/logout")
      .then(response => {
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            username: null
          });
        }
      })
      .catch(error => {
        console.log("Logout error");
      });
  }

  render() {
    const loggedIn = this.props.loggedIn;
    console.log("navbar render, props: ");
    console.log(this.props);

    return (
      <div>
        <header className="navbar" id="nav-container">
          <div className="col-4">
            {loggedIn ? (
              <section className="navbar-section">
                <a
                  href="/"
                  className="btn btn-link text-secondary"
                  onClick={this.logout}
                >
                  <span className="text-secondary">logout</span>
                </a>
              </section>
            ) : (
              <section className="navbar-section">
                <a
                  href="/"
                  className="btn btn-link text-secondary"
                  onClick={this.logout}
                >
                  <span className="text-secondary">logout</span>
                </a>
                <a href="/" className="btn btn-link text-secondary">
                  <span className="text-secondary">home</span>
                </a>
                <a href="/login" className="btn btn-link text-secondary">
                  <span className="text-secondary">login</span>
                </a>
                <a href="/signup" className="btn btn-link">
                  <span className="text-secondary">sign up</span>
                </a>
              </section>
            )}
          </div>
        </header>
      </div>
    );
  }
}

export default Navbar;
