import React from 'react';
import SignupModal from '../../SignupModal/SignupModal';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div>
      <p>
        Instagram, Facebook and even the Iphone all have features that their users to create and share albums with their loved ones. 
        Unfortunately these platforms require a membership to view these precious moments. Fortunately with the creation of memory box you can 
        you are able to share your photos with your friends and family even if they don't have an account. 
      </p>
      <SignupModal />
    </div>
  </div>
);

export default AboutPage;
