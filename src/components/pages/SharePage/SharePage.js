import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace 
// the component name TemplateClass with the name for the new 
// component.
class SharePage extends Component {
    copyUrl = (event) => {
        this.textArea.select();
        document.execCommand("copy");

        event.target.focus();
        alert("Copied the text");

        console.log(this.props, 'what is this prop too?');
        console.log(this.props.match.url, 'this is the exact URL prop too?');
        console.log(this.props.user.id, 'this is the user');
        console.log(this.props.match.url + this.props.user.id, 'this should be the url and id');
    }
    

    render() {
        const userId = this.props.store.user.id;
        const guestUrl = `${window.location.origin}/#/guest/${userId}`
        
        return (
            <div>
                <div>
                    <h2>You've gathered some awesome memories to share with friends and family! </h2>
                </div>
                <div>
                    <p>Sharing your profile is as easy as a click of a button. 
                        Push the button below to copy your URL and share with 
                        whomever you like!</p>
                </div>
                <div>
                    <textarea className="url-box" 
                        ref={(textarea) => this.textArea = textarea}
                        value={guestUrl} id='urlId'/>
                    
                    <button onClick={this.copyUrl}>Copy</button>
                </div>
            </div>
            
        );
    }
}

export default connect(mapStoreToProps)(SharePage);
