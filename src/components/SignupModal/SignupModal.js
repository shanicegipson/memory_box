import React, { Component } from 'react';
import Swal from 'sweetalert2';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

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
      main: '#00796b',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
  }

});

const styles = {
  root: {
    color: 'white',
  }
};

class SignupModal extends Component {
  state = {
    firstName: '',
    email: '',
    password: ''
  };  
  
  showModal = () => {
        Swal.mixin({
            input: 'text',
            confirmButtonText: 'Next &rarr;',
            confirmButtonColor:'#0bbaa6',
            showCancelButton: true,
            progressSteps: ['1', '2', '3'],
        }).queue([
            {
              title: 'First Name',
              text: 'Please insert your First Name'
            },
            {
              title: 'Email',
              text: 'Please insert your email'
            },
            {
              title: 'Password',
              text: 'Please insert your password'
            }
          ]).then((result) => {
            if (result.value) {
              Swal.fire({
                title: 'All done!',
                html: 
               'Your answers: <pre><code>' +
                JSON.stringify(result.value) +
                '</code></pre>',
                confirmButtonText: 'Submit'
            
              }).then(() => {
                if (result.value[0] && result.value[1] && result.value[2]) {
                  this.props.dispatch({
                    type: 'REGISTER',
                    payload: {
                      firstName: result.value[0],
                      email: result.value[1],
                      username: result.value[1],
                      password: result.value[2],
                    },
                  });
                

                } else {
                  this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
                }
              })
            }
          })
    }
    
    
    render () {

        return (
          <MuiThemeProvider theme={theme}>
            <div className='sign-btn'>
                <Button variant= 'contained'  fullWidth={true} size='large' color='secondary' onClick={this.showModal}>SIGNUP</Button>
            </div>
          </MuiThemeProvider>
            
        )
    }
}

export default  connect (mapStoreToProps) (SignupModal);