import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import MediaItem from '../../../MediaItem/MediaItem';

import { withRouter } from 'react-router-dom';


class GuestPage extends Component {

    componentDidMount() {
      this.props.dispatch({type:'GET_MEDIA_GUEST', payload: this.props.match.params.id});
    }

    // componentDidUpdate() {
    //   this.props.dispatch({type:'GET_MEDIA_GUEST', payload: this.props.match.params.id});
    // }

    moveToUserPage = (event) => {
      this.props.history.push("/admin");
    }
  
    moveToSharePage = (event) => {
      this.props.history.push("/share");
    }
  
    
    render() {
      const userFirstName = this.props.store.user.firstName;
      console.log(this.props.store, 'What is this?');
      return (
        <div>
          <div>
            <div className="header">
            <h1 id="welcome">
              {userFirstName}'s MEMORY BOX!
            </h1>
            </div>
            <div>
                <MediaItem />
            </div>
                
            
          </div>
        </div>
  
      )
    }
  }
  
  export default connect(mapStoreToProps)(GuestPage);
  