import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';

const dropStyle = {
    width: '200px',
    height:'100px',
    border: '3px solid teal',
    backgroundColor: 'grey'
}


class UploadPage extends Component {
    handleFinishedUpload = info => {
        console.log('File uploaded with filename', info.filename)
        console.log('Access it on s3 at', info.fileUrl)
        console.log('This is the user id', this.props.store.user.id);
        const data = {
            image: info.fileUrl,
            user:this.props.store.user.id
        }

        console.log(data, 'this is the object I am passing from the upload page to my Router');

        this.props.dispatch({type:'POST_MEDIA_URL', payload:data});
    }

    render() {
        const uploadOptions = {
            server: 'http://localhost:5000',
            // signingUrlQueryParams: {uploadType: 'avatar'},
        }

        const s3Url = 'https://memoryboxbucket.s3.amazonaws.com';

        return (
            <div>
                <h2>Add a new image below:</h2>
                <DropzoneS3Uploader
                    onFinish={this.handleFinishedUpload}
                    style={dropStyle}
                    s3Url={s3Url}
                    maxSize={1024 * 1024 * 5}
                    upload={uploadOptions}
                />
            </div>

        )
    }
}

export default connect(mapStoreToProps)(UploadPage);
