import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';

import './UploadPage.css';


const dropStyle = {
    width: '800px',
    height:'400px',
    border: '5px solid #a8f0e9',
    position: 'relative',
    backgroundColor: 'rgba(194, 192, 192, 0.75)', 
}


class UploadPage extends Component {
    handleFinishedUpload = info => {
        const data = {
            image: info.fileUrl,
            user:this.props.store.user.id
        }

        this.props.dispatch({type:'POST_MEDIA_URL', payload:data});
       
        this.props.history.push("/admin");
    
    }

    render() {
        const uploadOptions = {
            // server: 'https://memory-box-app.herokuapp.com',
            server: 'http://localhost:5000',
            // signingUrlQueryParams: {uploadType: 'avatar'},
        }

        const s3Url = 'https://memoryboxbucket.s3.amazonaws.com';

        const insideDropArea = (
            <div className='inside-drop'>
                <p>Click or Drop File Here!</p>
            </div>
        )

        return (
            <div>
                <div className='drop-zone'>
                    <DropzoneS3Uploader 
                        children={insideDropArea}
                        onFinish={this.handleFinishedUpload}
                        style={dropStyle}
                        s3Url={s3Url}
                        maxSize={1024 * 1024}
                        upload={uploadOptions}
                    />
                </div>
            </div>

        )
    }
}

export default connect(mapStoreToProps)(UploadPage);
