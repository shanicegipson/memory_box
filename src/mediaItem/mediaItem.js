import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../redux/mapStoreToProps';

class mediaItem extends Component {
    render() {
        return(
            <div></div>
        )
    }
}
export default connect (mapStoreToProps)(mediaItem);