import React, { Component } from 'react';
import { connect } from 'react-redux';
// import LogOutButton from '../../LogOutButton/LogOutButton';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import MediaItem from '../../../MediaItem/MediaItem';

import './UserPage.css';
import  Fab  from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ShareIcon from '@material-ui/icons/Share';


class UserPage extends Component {
  
  
  moveToUploadPage = (event) => {
    this.props.history.push("/upload");
  }

  moveToSharePage = (event) => {
    this.props.history.push("/share");
  }

  
  render() {
    const userFirstName = this.props.store.user.firstName;
    return (
      <div>
        <div>
          <div className="header">
          <h1 id="welcome">
            {userFirstName}'s MEMORY BOX!
          </h1>
          </div>
              <MediaItem />
          
            <div className='feature-btn'>
            <Fab className='add-btn'
                color="secondary"
                onClick={this.moveToUploadPage}>
              <AddIcon />
            </Fab>
          
            <Fab className='share-btn'
                color="primary"
                onClick={this.moveToSharePage}>
                
              <ShareIcon />
            </Fab>
                
            </div>
          
          

          {/* <LogOutButton className="log-in" /> */}
        </div>
      </div>

    )
  }
}

export default connect(mapStoreToProps)(UserPage);
