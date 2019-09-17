import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './LandingPage.css';
import LoginModal from '../LoginModal/LoginModal';
import SignupModal from '../SignupModal/SignupModal';

class LandingPage extends Component {

    // onLogin = (event) => {
    //     this.props.history.push('/login');
    // }

    render() {
        return (
            <div className="container">
               
                <p>Memory Box is a user-friendly web application that allows the user to post images, videos, and 
                    captions to their personalized account. The user is then able to share these images through a 
                    URL link that they send to friends and family members to give them access. The recipient of 
                    the URL receives a message that the user has shared their memory box with them and are able 
                    to click on the link to be redirected to the user's page.</p>
                 <LoginModal />
                 <SignupModal />
            </div>
        );
    }
}

export default connect(mapStoreToProps)(LandingPage);
