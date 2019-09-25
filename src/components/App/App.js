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
import GuestPage from '../pages/GuestPage/GuestPage';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';

import './App.css';
import LoginModal from '../LoginModal/LoginModal';
import SignupModal from '../SignupModal/SignupModal';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#26a69a',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
  }

});

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
    <MuiThemeProvider theme={theme}>
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

            <Route
              exact
              path="/guest/:id"
              component={GuestPage}
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
            they will see the share page instead. */}
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
    </MuiThemeProvider>
  )}
}

export default connect()(App);
