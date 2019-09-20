import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* postMediaUrl(action) {
    try {
        const config = {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        };

        const data = {
            mediaUrl: action.payload
        }

        console.log('posting image url');
        
        const response = yield axios.post('api/media', data, config);
        console.log(response);
    
        
      } catch (error) {
        console.log('User post request failed', error);
      }
}

function* mediaInfoSaga() {
  yield takeLatest('POST_MEDIA_URL', postMediaUrl);
}

export default mediaInfoSaga;