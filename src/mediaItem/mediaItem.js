import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../redux/mapStoreToProps';
import { Grid } from '@material-ui/core';

class MediaItem extends Component {
    componentDidMount() {
        this.props.dispatch({type: 'GET_MEDIA'})
    }

    render() {
        const mediaInfo = this.props.store.media.map((media, index) =>{
        return (
            <Grid item xs={12} md={4} key={index}>
                <div  className='media_item'>
                    <img src={media.path} alt='text'/>
                </div>
            </Grid>
        )
    });
        
        return(
            <div>
                <h2>
                    THESE ARE YOUR IMAGES:
                </h2>
                <Grid container spacing={3}>{mediaInfo}</Grid>
            </div>
        )
    }
}
export default connect (mapStoreToProps)(MediaItem);