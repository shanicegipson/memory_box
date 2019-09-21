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
        console.log(response, 'Response for POST');
        
      } catch (error) {
        console.log('User post request failed', error);
      }
}

function* getMediaInfo() {
  try {
    const response = yield axios.get('/api/media/user');

    console.log(response.data, 'this is the response from the GET on saga');

    yield put ({type: 'SET_MEDIA', payload:response.data});
    
      
    } catch (error) {
      console.log('User GET request failed', error);
    }
}

function* mediaInfoSaga() {
  yield takeLatest('POST_MEDIA_URL', postMediaUrl);
  yield takeLatest('GET_MEDIA', getMediaInfo);
}

export default mediaInfoSaga;