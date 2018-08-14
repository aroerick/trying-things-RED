import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";
import './App.css';

const Home = props => 
  <div>
    <h1>Home</h1>
    <p>Are you too good for your home?</p>
    <pre>{JSON.stringify(props, null, 4)}</pre>
  </div>
const Contact = (props) => 
  <div>
    <h1>Contact Us</h1>
    <p>Please don't</p>
    <pre>{JSON.stringify(props, null, 4)}</pre>
  </div>
const NotFound = () => <h1>You're fuckin lost mate.</h1>

const nav = 
  <nav>
    <NavLink to='/'exact activeClassName="active">Home</NavLink>  
    <NavLink to='/contact' activeClassName="active">Contact</NavLink>
  </nav>

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          { nav }
          <Switch>
            <Route 
              exact 
              path="/" 
              component={ Home } 
            />
            <Route 
              exact
              path="/contact" 
              component={ Contact } />
            <Route
              exact
              path='/hello/:name'
              component= {props => (
                <div>
                  <h2>Well hello there {props.match.params.name}!</h2>
                  {/* <pre>{JSON.stringify(props, null, 4)}</pre> */}
                </div>
              )} 
            />
            <Redirect from="/home" to="/"exact />
            {/* <Redirect to="/" /> */}
            <Route component={ NotFound } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
