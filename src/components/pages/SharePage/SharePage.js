import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace 
// the component name TemplateClass with the name for the new 
// component.
class SharePage extends Component {
    

    render() {
        return (
            <div>
                <h2>Share Page</h2>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(SharePage);
