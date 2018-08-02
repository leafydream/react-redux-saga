import { delay } from 'redux-saga';
import { put, call, takeEvery, all, fork } from 'redux-saga/effects';
import axios from 'axios';

import { increment, fetchUserFulfilled } from '../actions';
import * as actionTypes from '../constants/actionTypes';

function* fetchData() {
    let response = yield call(axios.get, 'https://api.github.com/users/torvalds');
    yield put(fetchUserFulfilled(response.data));
}
  
export default function* watchFetchData() {
    yield takeEvery(actionTypes.FETCH_DATA, fetchData);
}