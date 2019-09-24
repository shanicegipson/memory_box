import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace 
// the component name TemplateClass with the name for the new 
// component.
class EditPage extends Component {
    state = {
        id: parseInt(this.props.match.params.id),
        description: ''
        
    }

    editInfo = (event, picDesc) => {
        console.log(picDesc, 'this is the description')
        this.setState({
           ...this.state.newInfo,
            [picDesc]: event.target.value,
            
        });
    }
    

    updateImage = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'UPDATE_MEDIA', payload: this.state });
        console.log(this.state, 'Updated info');
    }

    render() {
        let mediaInfo =this.props.store.media.filter((media, index) => { 
            if (this.props.match.params.id == media.pics_id) {
                return true;
            }

            return false;
            
            
        });
        mediaInfo = mediaInfo.map((media, index) => {
            console.log(this.props.match.params.id, 'picture ID that was clicked');
            console.log(parseInt(media.pics_id), 'picture ID');
            console.log(media, 'Image that was clicked');
            return (
                <div key={index}>
                    <img src={media.path} alt='text' />
                </div>
            )
        });

        return (
            <div>
                {mediaInfo}
                <textarea type='text' onChange={this.editInfo}></textarea>
                <button onClick={this.updateImage}>Update</button>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(EditPage);
