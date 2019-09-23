import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../redux/mapStoreToProps';
import { Grid } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import './MediaItem.css';

class MediaItem extends Component {
    state = {
        showEditButton: false,
    }
    
    componentDidMount() {
        this.props.dispatch({type: 'GET_MEDIA'})
    }

    toEditPage = (pics_id) => (event) => {
        this.props.history.push("/edit/"+ pics_id);
    }


    render() {
        const mediaInfo = this.props.store.media.map((media, index) =>{
            console.log(media.pics_id, 'id of pic');
        return (
            <Grid item xs={12} md={4} key={index}>
                <div  className='media_item' >
                    <img src={media.path}  onClick={this.toEditPage(media.pics_id)} alt='text'/>
                    
                </div>
            </Grid>
        )
    });
        
        return(
            <div>
                <Grid container spacing={3}>{mediaInfo}</Grid>
            </div>
        )
    }
}
export default connect (mapStoreToProps)(withRouter(MediaItem));