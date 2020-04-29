import React from 'react';
import SignInForm from "./containers/signInForm";
import NotFound from "./components/NotFound";
import Home from "./containers/Home";
import './App.css';
import store from "./redux/store";
import { Provider } from 'react-redux';
import {
  //HashRouter as Router,
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from "./containers/PrivateRoute";
import { history } from "./helpers/history";
import { Unauthorised } from './components/Unauthorised';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Navbar bg="dark" variant="dark">
          <Nav>
            <Nav.Item>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/login">Sign In</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
        

        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/login" component={SignInForm}/>
          <Route path="/unauthorised" component={Unauthorised} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
      
  );
}

export default App;
