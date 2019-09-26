import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';


import LoginModal from '../../LoginModal/LoginModal';
import SignupModal from '../../SignupModal/SignupModal';
import './LandingPage.css';

import { Grid } from '@material-ui/core';

class LandingPage extends Component {

    // onLogin = (event) => {
    //     this.props.history.push('/login');
    // }

    render() {
        if (this.props.store.user.id){
           this.props.history.push("/admin");
        }
        return (
            <div className="landing_container">
                <div className="transparent-div">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <p className='description'>Memory Box is a user-friendly web application that allows the user to post images, videos, and 
                            captions to their personalized account. The user is then able to share these images through a 
                            URL link that they send to friends and family members to give them access. The recipient of 
                            the URL receives a message that the user has shared their memory box with them and are able 
                            to click on the link to be redirected to the user's page.</p>
                        </Grid>
                        <Grid item xs={6} className='modal' >
                            <div className='log-modal'>
                                <LoginModal className="modal-btn" />
                            </div>
                        </Grid>
                        <Grid item xs={6} >
                            <div className='sign-modal'>
                                <SignupModal className="modal-btn" />
                            </div>
                        </Grid> 
                    </Grid>
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(LandingPage);
