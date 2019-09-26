import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../redux/mapStoreToProps';
import { Grid } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import './MediaItem.css';

// const useStyles = makeStyles(theme => ({
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       justifyContent: 'space-around',
//       overflow: 'hidden',
//       backgroundColor: theme.palette.background.paper,
//     },
//     gridList: {
//       width: 500,
//       height: 450,
//     },
//   }));
  
//   const classes = useStyles();
  

class MediaItem extends Component {
    state = {
        showEditButton: false,
    }
    
    componentDidMount() {
        
        this.props.dispatch({type: 'GET_MEDIA'}); 
       
    }

    toEditPage = (pics_id) => (event) => {
        this.props.history.push("/edit/"+ pics_id);
    }


    render() {
        const mediaInfo = this.props.store.media.map((media, index) =>{
            console.log(media.pics_id, 'id of pic');
        return (
            <GridListTile  key={index}>
                <div  className='media_item' >
                    <img src={media.path}  onClick={this.toEditPage(media.pics_id)} alt='text'/>
                </div>
            </GridListTile >
        )
    });
        
        return(
            <div>
                <GridList cellHeight={'auto'} cols={3}>{mediaInfo}</GridList>
            </div>
        )
    }
}
export default connect (mapStoreToProps)(withRouter(MediaItem));