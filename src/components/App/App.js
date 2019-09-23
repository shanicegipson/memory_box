import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import AboutPage from '../pages/AboutPage/AboutPage';
import UserPage from '../pages/UserPage/UserPage';
import LandingPage from '../pages/LandingPage/LandingPage';
import UploadPage from '../pages/UploadPage/UploadPage';
import SharePage from '../pages/SharePage/SharePage';
import EditPage from '../pages/EditPage/EditPage';
// import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import LoginModal from '../LoginModal/LoginModal';
import SignupModal from '../SignupModal/SignupModal';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              
              component={AboutPage}
            />
            <Route
              exact
              path="/home"
              component={LandingPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute
              exact
              path="/admin"
              component={UserPage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/share"
              component={SharePage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will be redirected to the authRedirect path provided. */}
            <ProtectedRoute
              exact
              path="/login"
              authRedirect="/admin"
              component={LoginModal}
            />
            <ProtectedRoute
              exact
              path="/registration"
              authRedirect="/admin"
              component={SignupModal}
            />
            <ProtectedRoute
              exact
              path="/upload"
              // authRedirect="/admin"
              component={UploadPage}
            />
            <ProtectedRoute
              exact
              path="/edit/:id"
              // authRedirect="/admin"
              component={EditPage}
            />

            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
