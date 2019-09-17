import React, { Component } from 'react';
import Swal from 'sweetalert2';


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
                confirmButtonText: 'Submit'
              })
            }
          })
    }
    
    
    
    render () {
        return (
            <div className='login'>
                <button onClick={this.showModal}>Login</button>
            </div>
        )
    }
}

export default LoginModal;