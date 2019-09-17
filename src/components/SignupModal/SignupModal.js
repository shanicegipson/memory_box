import React, { Component } from 'react';
import Swal from 'sweetalert2';

class SignupModal extends Component {
    showModal = () => {
        Swal.mixin({
            input: 'text',
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
            progressSteps: ['1', '2', '3']
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
              })
            }
          })
    }
    
    
    
    render () {
        return (
            <div className='login'>
                <button onClick={this.showModal}>SIGNUP</button>
            </div>
        )
    }
}

export default SignupModal;