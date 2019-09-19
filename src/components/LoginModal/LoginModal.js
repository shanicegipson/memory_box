import React, { Component } from 'react';
import Swal from 'sweetalert2';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';


class LoginModal extends Component {

  showModal = () => {
    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
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
              },
            
            });
            

          } else {
            this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
          }
        })
      }
    })
  }


  render() {
    return (
      <div className='login'>
        <button onClick={this.showModal}>Login</button>
      </div>
    )
  }
}

export default connect (mapStoreToProps)(withRouter(LoginModal));