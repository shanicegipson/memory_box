import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';



import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';


class EditPage extends Component {
    state = {
        id: parseInt(this.props.match.params.id),
        description: ''
        
    }

    editInfo = (event, newPicDesc) => {
        console.log(newPicDesc, 'this is the description')
        this.setState({
           ...this.state,
            [newPicDesc]: event.target.value,
            
        });
    }
    

    updateImage = (event) => {
        event.preventDefault();
        this.props.dispatch({
             type: 'UPDATE_MEDIA',
              payload: {
                  ...this.state, 
                  id:this.props.match.params.id
            },
        });
        this.props.history.push("/admin");
    }

    toUserPage() {
        this.props.history.push("/admin");
    }

    render() {
        let mediaInfo =this.props.store.media.filter((media, index) => { 
            if (this.props.match.params.id == media.pics_id) {
                return true;
            }
            return false;
        });
        mediaInfo = mediaInfo.map((media, index) => {
            return (
                <div key={index}>
                    <h1>EDIT PAGE</h1>
                    <div>
                        <img className='edit-pic' src={media.path} alt='text' />
                        <p>{media.description}</p>
                    </div>
                </div>
            )
        });

        return (
           
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        {mediaInfo}
                    </Grid>
                    <Grid xs={6}>
                        <TextField
                            id='outlined-with-placeholder'
                            onChange={(event) => this.editInfo(event, 'description')}
                            value={this.state.description}
                            label="Add Description"
                            variant='filled'
                            multiline rowsMax="4"
                            >
                        </TextField>
                        <Grid container spacing={3}>
                            <Grid item xs={3}>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                size="large" 
                                onClick={this.updateImage}>Save</Button>
                        </Grid>
                            {/* <Grid item xs={3}>
                                <Button 
                                    variant="contained" 
                                    color="secondary" 
                                    size="large" 
                                    onClick={this.toUserPage}>Cancel</Button>
                            </Grid> */}
                        </Grid>
                    </Grid>
                </Grid>  
            </div>
           
            
        ); 
    }
}

export default connect(mapStoreToProps)(withRouter(EditPage));
