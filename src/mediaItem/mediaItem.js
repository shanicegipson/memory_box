import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../redux/mapStoreToProps';

class MediaItem extends Component {
    componentDidMount() {
        this.props.dispatch({type: 'GET_MEDIA'})
    }

    render() {
        const mediaInfo = this.props.store.media.map((media, index) =>{
        return (
            <div key={index}>
                <img src={media.path} alt='text'/>
            </div>
        )
    });
        
        console.log('This is the media info that will pull out in the media item', mediaInfo);
        return(
            <div>
                <h2>
                    THESE ARE YOUR IMAGES:
                </h2>
                <ul>{mediaInfo}</ul>
            </div>
        )
    }
}
export default connect (mapStoreToProps)(MediaItem);