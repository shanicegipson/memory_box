import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Button from 'react-bootstrap/Button';
import MediaItem from '../../MediaItem/MediaItem';


class UserPage extends Component {
  moveToAddPage = (event) => {
    this.props.history.push("/upload");
  }
  render() {
    const userFirstName = this.props.store.user.firstName;
    return (
      <div>
        <div>
          <div className="header">
          <h1 id="welcome">
            {userFirstName} MEMORY BOX!
          </h1>
          </div>
          
          
          <MediaItem />
          <div className='feature-btn'>
            <Button 
              onClick={this.moveToAddPage}
              type="button"
              size="lg">+
          </Button>
          </div>

          <LogOutButton className="log-in" />
        </div>
      </div>

    )
  }
}

export default connect(mapStoreToProps)(UserPage);
