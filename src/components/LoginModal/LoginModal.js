import React, { Component } from 'react';
import Swal from 'sweetalert2';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';

import Button from '@material-ui/core/Button';

class LoginModal extends Component {
  

  showModal = () => {
    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      confirmButtonColor:'#0bbaa6',
      showCancelButton: true,
      progressSteps: ['1', '2']
    }).queue([
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
          confirmButtonText: 'LOGIN'

        }).then(() => {
          if (result.value[0] && result.value[1]) {
            console.log('email:', result.value[0]);
            console.log('password:', result.value[1]);
            this.props.dispatch({
              type: 'LOGIN',
              payload: {
                username: result.value[0],
                email: result.value[0],
                password: result.value[1],
              }
            
            });
            
          } else {
            alert('Error: Please check your email or password');
            this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
          }
        })
      }
    })
  }


  render() {
    return (
      
        <div className='login-btn'>
          <Button size='large' variant= 'contained' 
          color='primary' 
          fullWidth={true}
          onClick={this.showModal}>Login</Button>
        </div>
      
    )
  }
}

export default connect (mapStoreToProps)(withRouter(LoginModal));