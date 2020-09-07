import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Products from "./Products";
import { Button, Jumbotron, Nav, Navbar } from "react-bootstrap";
import JumboTronComponent from "./JumboTronComponent";
import UserForm from "./UserForm";
import GitHub from "./GitHub";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import GitHubUser from "./GitHubUser";

class App extends Component {
  render() {
    const isValid = true;
    return (
      <div>
        <div className="App">
          <h2> Chapter 1:</h2>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Chrissie's react practice</h2>
          </div>
          <p className="App-intro">
            <ul>
              See headings for practice associated with chapters in Beginning
              React! For this page I have:
              <li>Changed all text on the App on App.js</li>
              <li>
                Made a few changes in App.css (logo spinning the other way,
                bigger header, etc)
              </li>
              <li> Have not made this pretty</li>
            </ul>
          </p>
        </div>
        <hr />
        <div>
          <h2 className="App"> Chapter 2:</h2>
          <ul>
            For this page I have:
            <li>Added two more products</li>
            <li>Only stars to show orange and not text too (Rating)</li>
          </ul>
          <Products />
        </div>
        <hr />
        <h2 className="App"> Chapter 3:</h2>
        <ul>
          For this page I have:
          <li>Added a button</li>
          <li>Changed the buttons css using JS</li>
        </ul>
        <Button style={styles2.button1} variant="primary" disabled={!isValid}>
          Default
        </Button>
        <hr />
        <h2 className="App"> Chapter 4:</h2>
        <ul>
          For this page I have:
          <li>Added number of views behind the star ratings</li>
        </ul>
        <hr />
        <h2 className="App"> Chapter 5:</h2>
        <ul>
          For this page I have:
          <li>Added a Jombotron and played with it.</li>
          <JumboTronComponent>
            I've added this in the App.js file
          </JumboTronComponent>
        </ul>
        <hr />
        <h2 className="App"> Chapter 6:</h2>
        <ul>
          For this page I have:
          <li>Added a Formik Form</li>
          <li>Added a Field for first name</li>
          <li>
            <UserForm />
          </li>
        </ul>
        <hr />
        <h2 className="App"> Chapter 7:</h2>
        <ul>
          For this page I have:
          <li>API search for Github using first name</li>
          <li>Changed look using JS/CSS</li>
          <p></p>
          <li>
            <GitHub />
          </li>
        </ul>
        <hr />
        <h2 className="App"> Chapter 8:</h2>
        <ul>
          For this page I have:
          <li>Used a navbar with bootstrap react</li>
          <li>
            <Header />
          </li>
        </ul>
        <hr />
      </div>
    );
  }
}

export default App;

const styles2 = {
  button1: {
    backgroundColor: "orange",
    color: "white",
    fontFamily: "Sen",
    border: "None",
    outline: "orange",
  },
};

class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/github"> GitHub</Nav.Link>
                <Nav.Link href="/products">Products page</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path="/github/user/:login/:id" component={GitHubUser} />
            <Route path="/github" component={GitHub} />
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route path="/*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

class Home extends Component {
  render() {
    return <div>Home Component</div>;
  }
}

class NotFound extends Component {
  render() {
    return <div>Not Found</div>;
  }
}
