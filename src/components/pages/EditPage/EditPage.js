import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace 
// the component name TemplateClass with the name for the new 
// component.
class EditPage extends Component {
    state = {
        image:  {
            id: parseInt(this.props.match.params.id),
            description: ''
        }
    }

    updateMovie = (event) => {
        event.preventDefault();
        // const clickedMovieId =this.props.match.params.id
        this.props.dispatch({ type: 'UPDATE_MEDIA', payload: this.state.image });
        console.log(this.state.image, 'Updated info');
    }

    render() {
        const mediaInfo =this.props.store.media.map((media, index) => {        
            // console.log(this.props.match.params.id, 'movie ID that was clicked');
            // console.log(movie.movies_id, 'movie ID');
            console.log(media, 'Image that was clicked');
            // console.log(movie[0].title, 'title of movie clicked');
        //    console.log(movieInfo, 'movie info');
            console.log(this.props.match.params.id, 'What is this');

            return media.pics_id == this.props.match.params.id
        })

        return (
            <div>
                {mediaInfo}
            </div>
        );
    }
}

export default connect(mapStoreToProps)(EditPage);
