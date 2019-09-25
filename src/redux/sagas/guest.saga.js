import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
// function* fetchUserGuest() {
//   try {
    
//     const response = yield axios.get('/api/guest/user');
//     console.log(response.data)
//     // now that the session has given us a user object
//     // with an id and username set the client-side user object to let
//     // the client-side code know the user is logged in
//     yield put({ type: 'SET_GUEST', payload: response.data });
//   } catch (error) {
//     console.log('User get request failed', error);
//   }
// }

function* getMediaInfo(action) {
  try {

    console.log('~~~~~~~~~RAAAAAAWR~~~~~~~~~~');
    const response = yield axios.get(`/api/guest/public/${action.payload}`);

  

    yield put ({type: 'SET_MEDIA', payload:response.data});
    
      
    } catch (error) {
      console.log('User GET request failed', error);
    }
}

function* guestSaga() {
  //yield takeLatest('FETCH_USER_GUEST', fetchUserGuest);
  yield takeLatest('GET_MEDIA_GUEST', getMediaInfo);
}

export default guestSaga;
